import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TextAreaField from "./TextAreaField";
import { wrapInForm } from "../__test__/wrapInForm";
import { FieldError } from "../../unbound/FieldError";

describe("TextAreaField", () => {
  const onSubmit = jest.fn();

  let component: ReturnType<typeof render>;

  beforeEach(() => {
    onSubmit.mockReset();
  });

  it("should set an initial value", () => {
    const { getByTestId } = render(
      wrapInForm(onSubmit, { myField: "myValue" }, <TextAreaField name="myField" />)
    );
    const element = getByTestId("myField") as HTMLInputElement
    expect(element.value).toEqual("myValue");
  });

  it("should propagate its changes to the wrapping form", () => {
    const { getByTestId } = render(
      wrapInForm(onSubmit, { myField: "myValue" }, <TextAreaField name="myField" />)
    );
    fireEvent.change(getByTestId("myField"), { target: { value: "Changed value" } });
    fireEvent.submit(getByTestId("form-test-id"));

    expect(onSubmit).toHaveBeenCalledWith(
      {
        myField: "Changed value",
      },
      expect.anything(),
      expect.anything()
    );
  });

  describe("when a validation error is set", () => {
    beforeEach(() => {
      component = render(
        wrapInForm(
          onSubmit,
          { myField: "myValue" },
          <TextAreaField name="myField" validate={() => "always errors"} />
        )
      );
    });

    it("should NOT show a FieldError", () => {
      const text = screen.queryAllByText("always errors")
      expect(text).toHaveLength(0)
    });

    describe("when a user interacts with the component", () => {
      beforeEach(() => {
        const element = component.getByTestId("myField")
        fireEvent.focus(element);
        fireEvent.change(element, { target: { value: "Changed value" } });
        fireEvent.blur(element);
      });

      it("should show a FieldError", () => {
        const text = screen.queryAllByText("always errors")
        expect(text).toHaveLength(1)
      });
    });
  });

  describe("when isRequired is set", () => {
    beforeEach(() => {
      component = render(
        wrapInForm(
          onSubmit,
          { myField: "myValue" },
          <TextAreaField name="myField" isRequired={true} />
        )
      );
    });

    it("should NOT show a FieldError", () => {
      const text = screen.queryAllByText("Dit veld is verplicht")
      expect(text).toHaveLength(0)
    });

    describe("when a user interacts with the component", () => {
      beforeEach(() => {
        fireEvent.focus(component.getByTestId("myField"));
        fireEvent.change(component.getByTestId("myField"), { target: { value: "" } });
        fireEvent.blur(component.getByTestId("myField"));
      });

      it("should show a FieldError", () => {
        const text = screen.queryAllByText("Dit veld is verplicht")
        expect(text).toHaveLength(1)
      });
    });
  });
});
