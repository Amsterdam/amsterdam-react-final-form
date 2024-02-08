import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import RadioFields from "./RadioFields";
import { wrapInForm } from "../__test__/wrapInForm";
import { FieldError } from "../../unbound/FieldError";

describe("RadioFields", () => {
  const onSubmit = jest.fn();

  beforeEach(() => {
    onSubmit.mockReset();
  });

  it("should set an initial value", () => {
    const { getByLabelText } = render(
      wrapInForm(
        onSubmit,
        { myField: "bar" },
        <RadioFields
          name="myField"
          options={{ foo: "Foo", bar: "Bar" }}
        />
      )
    );

    const checkedInput = getByLabelText("Bar") as HTMLInputElement;
    expect(checkedInput.checked).toEqual(true);
    expect(checkedInput.value).toEqual("bar");
  });

  it("should propagate its changes to the wrapping form", async () => {
    const { getByLabelText } = render(
      wrapInForm(
        onSubmit,
        { myField: "bar" },
        <RadioFields
          name="myField"
          options={{ foo: "Foo", bar: "Bar" }}
        />
      )
    );

    fireEvent.click(getByLabelText("Foo"));

    fireEvent.submit(screen.getByTestId("form-test-id"));

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith(
        { myField: "foo" },
        expect.anything(),
        expect.anything()
      );
    });
  });

  describe("when a validation error is set", () => {
    it("should NOT show a FieldError", () => {
      render(
        wrapInForm(
          onSubmit,
          { myField: "bar" },
          <RadioFields
            name="myField"
            options={{ foo: "Foo", bar: "Bar" }}
            validate={() => "always errors"}
          />
        )
      );

      const text = screen.queryByText("always errors")
      expect(text).toBeNull()
    });

    it("should show a FieldError after user interaction", async () => {
      const { getByLabelText } = render(
        wrapInForm(
          onSubmit,
          { myField: "bar" },
          <RadioFields
            name="myField"
            options={{ foo: "Foo", bar: "Bar" }}
            validate={() => "always errors"}
          />
        )
      );

      fireEvent.focus(getByLabelText("Foo"));
      fireEvent.click(getByLabelText("Foo"));
      fireEvent.blur(getByLabelText("Foo"));

      await waitFor(() => {
        const text = screen.queryAllByText("always errors")
        expect(text).toHaveLength(1)
      });
    });
  });
});
