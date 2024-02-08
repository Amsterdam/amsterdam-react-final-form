import React from "react";
import { render, fireEvent, queryByTestId, screen } from "@testing-library/react";
import NumberField from "./NumberField";
import { wrapInForm } from "../__test__/wrapInForm";

describe("NumberField", () => {
  const onSubmit = jest.fn();

  beforeEach(() => {
    onSubmit.mockReset();
  });

  it("should set an initial value", () => {
    const { getByTestId } = render(
      wrapInForm(onSubmit, { myField: "5" }, <NumberField name="myField" min="0" max="10" />)
    );

    const element = getByTestId("myField") as HTMLInputElement
    expect(element.value).toEqual("5")

  });

  it("should propagate its changes to the wrapping form", () => {
    const { getByTestId } = render(
      wrapInForm(onSubmit, { myField: "5" }, <NumberField name="myField" min="0" max="10" />)
    );

    const input = getByTestId("myField") as HTMLInputElement
    fireEvent.change(input, { target: { value: "6" } });

    fireEvent.submit(screen.getByTestId("form-test-id"));

    expect(onSubmit).toHaveBeenCalledWith({ myField: 6 }, expect.anything(), expect.anything());

  });

  describe("when a validation error is set", () => {
    it("should NOT show a FieldError", () => {
      const { queryByTestId } = render(
        wrapInForm(onSubmit, { myField: "5" }, <NumberField name="myField" validate={() => "always errors"} />)
      );
      expect(queryByTestId("field-error")).toBeNull();
    });

    it("should show a FieldError when a user interacts with the component", () => {
      const { getByTestId } = render(
        wrapInForm(onSubmit, { myField: "5" }, <NumberField name="myField" validate={() => "always errors"} />)
      );

      const input = getByTestId("myField")

      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: "Changed value" } });
      fireEvent.blur(input);

      const text = screen.queryAllByText("always errors")
      expect(text).toHaveLength(1)
    });
  });

  describe("when isRequired is set", () => {
    it("should NOT show a FieldError", () => {
      const { queryByTestId } = render(
        wrapInForm(onSubmit, { myField: "5" }, <NumberField name="myField" isRequired />)
      );
      const text = screen.queryByText("always errors")
      expect(text).toBeNull()
    });

    it("should show a FieldError when a user interacts with the component", () => {
      const { getByTestId } = render(
        wrapInForm(onSubmit, { myField: "5" }, <NumberField name="myField" isRequired />)
      );

      const input = getByTestId("myField")
      fireEvent.focus(input);
      fireEvent.change(input, { target: { value: "" } });
      fireEvent.blur(input);

      const text = screen.queryAllByText("Dit veld is verplicht")
      expect(text).toHaveLength(1)

    });
  });
});

