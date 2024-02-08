import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SelectField from "./SelectField";
import { wrapInForm } from "../__test__/wrapInForm";

describe("SelectField", () => {
  const onSubmit = jest.fn();

  beforeEach(() => {
    onSubmit.mockReset();
  });

  it("should set an initial value", () => {
    const { getByTestId } = render(
      wrapInForm(
        onSubmit,
        { myField: "bar" },
        <SelectField
          name="myField"
          options={{ foo: "Foo", bar: "Bar" }}
          data-testid="select-field"
        />
      )
    );

    const selectElement = getByTestId("select-field") as HTMLInputElement
    expect(selectElement.value).toEqual("bar");
  });

  it("should propagate its changes to the wrapping form", () => {
    const { getByTestId } = render(
      wrapInForm(
        onSubmit,
        { myField: "bar" },
        <SelectField
          name="myField"
          options={{ foo: "Foo", bar: "Bar" }}
          data-testid="select-field"
        />
      )
    );

    const selectElement = getByTestId("select-field") as HTMLInputElement

    fireEvent.change(selectElement, {
      target: { value: "foo" }
    });
    fireEvent.submit(getByTestId("form-test-id"));

    expect(onSubmit).toHaveBeenCalledWith(
      { myField: "foo" },
      expect.anything(),
      expect.anything()
    );
  });

  describe("when a validation error is set", () => {
    it("should NOT show a FieldError", () => {
      const { getByTestId } = render(
        wrapInForm(
          onSubmit,
          { myField: "bar" },
          <SelectField
            name="myField"
            options={{ foo: "Foo", bar: "Bar" }}
            validate={() => "always errors"}
            data-testid="select-field"
          />
        )
      );

      fireEvent.focus(getByTestId("select-field"));
      fireEvent.change(getByTestId("select-field"), {
        target: { value: "foo" }
      });

      const text = screen.queryByText("always errors")
      expect(text).toBeNull()
    });

    it("should show a FieldError when a user interacts with the component", () => {
      const { getByTestId } = render(
        wrapInForm(
          onSubmit,
          { myField: "bar" },
          <SelectField
            name="myField"
            options={{ foo: "Foo", bar: "Bar" }}
            validate={() => "always errors"}
            data-testid="select-field"
          />
        )
      );

      fireEvent.focus(getByTestId("select-field"));
      fireEvent.change(getByTestId("select-field"), {
        target: { value: "foo" }
      });
      fireEvent.blur(getByTestId("select-field"));

      const text = screen.queryAllByText("always errors")
      expect(text).toHaveLength(1)
    });
  });

  describe("when isRequired error is set", () => {
    it("should NOT show a FieldError", () => {
      const { getByTestId } = render(
        wrapInForm(
          onSubmit,
          { myField: "bar" },
          <SelectField
            name="myField"
            options={{ "": "-", foo: "Foo", bar: "Bar" }}
            isRequired={true}
            data-testid="select-field"
          />
        )
      );

      fireEvent.focus(getByTestId("select-field"));
      fireEvent.change(getByTestId("select-field"), {
        target: { value: "" }
      });

      const text = screen.queryAllByText("Dit veld is verplicht")
      expect(text).toHaveLength(0)
    });

    it("should show a FieldError when a user interacts with the component", () => {
      const { getByTestId } = render(
        wrapInForm(
          onSubmit,
          { myField: "bar" },
          <SelectField
            name="myField"
            options={{ "": "-", foo: "Foo", bar: "Bar" }}
            isRequired={true}
            data-testid="select-field"
          />
        )
      );

      fireEvent.focus(getByTestId("select-field"));
      fireEvent.change(getByTestId("select-field"), {
        target: { value: "" }
      });
      fireEvent.blur(getByTestId("select-field"));

      const text = screen.queryAllByText("Dit veld is verplicht")
      expect(text).toHaveLength(1)
    });
  });
});
