import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import DateField from "./DateField";
import { wrapInForm } from "../__test__/wrapInForm";


const initialValue = "2021-01-31"

describe("DateField", () => {
  const onSubmit = jest.fn();

  beforeEach(() => {
    onSubmit.mockReset();
  });

  it("should set an initial value", () => {
    const initialValue = "2021-01-31"; // Format the date string to match input type 'date'
    const { getByDisplayValue } = render(
      wrapInForm(onSubmit, { myField: initialValue }, <DateField name="myField" />)
    );
    expect(getByDisplayValue(initialValue)).toBeInTheDocument();
  });

  it("should propagate its changes to the wrapping form", async () => {
    const { getByDisplayValue, getByRole, getByTestId } = render(
      wrapInForm(onSubmit, { myField: initialValue}, <DateField name="myField" />)
    );
    const input = getByDisplayValue(initialValue);
    fireEvent.change(input, { target: { value: "2022-01-31" } });
    fireEvent.submit(getByTestId("form-test-id"));
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith(
        { myField: "2022-01-31" },
        expect.anything(),
        expect.anything()
      );
    });
  });

  describe("when a validation error is set", () => {
    it("should NOT show a FieldError", () => {
      const { queryByTestId } = render(
        wrapInForm(
          onSubmit,
          { myField: initialValue},
          <DateField name="myField" validate={() => "always errors"} />
        )
      );
      expect(queryByTestId("field-error")).toBeNull();
    });

    it("should show a FieldError when a user interacts with the component", async () => {
      const { getByTestId, getByDisplayValue } = render(
        wrapInForm(
          onSubmit,
          { myField: initialValue},
          <DateField name="myField" validate={() => "always errors"} />
        )
      );
      const input = getByDisplayValue(initialValue);
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: "2022-01-31" } });
      fireEvent.blur(input);
      await waitFor(() => {
        expect(getByTestId("form-test-id")).toHaveTextContent("always errors");
      });
    });
  });

  describe("when isRequired is set", () => {
    it("should NOT show a FieldError", () => {
      const { queryByTestId } = render(
        wrapInForm(onSubmit, { myField: initialValue}, <DateField name="myField" isRequired={true} />)
      );
      expect(queryByTestId("field-error")).toBeNull();
    });

    it("should show a FieldError when a user interacts with the component", async () => {
      const { getByTestId, getByDisplayValue } = render(
        wrapInForm(onSubmit, { myField: initialValue}, <DateField name="myField" isRequired={true} />)
      );
      const input = getByDisplayValue(initialValue);
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: "" } });
      fireEvent.blur(input);
      await waitFor(() => {
        expect(getByTestId("form-test-id")).toHaveTextContent("Dit veld is verplicht");
      });
    });
  });
});
