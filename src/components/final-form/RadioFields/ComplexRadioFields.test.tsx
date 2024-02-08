import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ComplexRadioFields from "./ComplexRadioFields";
import { wrapInForm } from "../__test__/wrapInForm";

describe("ComplexRadioFields", () => {
  const onSubmit = jest.fn();

  beforeEach(() => {
    onSubmit.mockReset();
  });

  it("should set an initial value", () => {
    const { getByLabelText } = render(
      wrapInForm(
        onSubmit,
        { myField: { "myLabelField": "bar", nested: { value: "bar" } } },
        <ComplexRadioFields
          name="myField"
          optionLabelField="myLabelField"
          options={[
            { "myLabelField": "foo", nested: { value: "foo" } },
            { "myLabelField": "zoo", nested: { value: "zoo" } },
            { "myLabelField": "bar", nested: { value: "bar" } }
          ]}
        />
      )
    );

    const text = screen.queryAllByText("bar")
    expect(text).toHaveLength(1)

    const fooRadio = getByLabelText("foo") as HTMLInputElement;
    const zooRadio = getByLabelText("zoo") as HTMLInputElement;
    const barRadio = getByLabelText("bar") as HTMLInputElement;

    expect(fooRadio.value).toEqual("0")
    expect(zooRadio.value).toEqual("1")
    expect(barRadio.value).toEqual("2")

  });

  it("should map the given `labelField` to its rendered labels", () => {
    render(
      wrapInForm(
        onSubmit,
        { myField: { "myLabelField": "bar", nested: { value: "bar" } } },
        <ComplexRadioFields
          name="myField"
          optionLabelField="myLabelField"
          options={[
            { "myLabelField": "foo", nested: { value: "foo" } },
            { "myLabelField": "zoo", nested: { value: "zoo" } },
            { "myLabelField": "bar", nested: { value: "bar" } }
          ]}
        />
      )
    );

    expect(screen.queryAllByText("foo")).toHaveLength(1)
    expect(screen.queryAllByText("zoo")).toHaveLength(1)
    expect(screen.queryAllByText("bar")).toHaveLength(1)
  });

  it("should propagate its changes to the wrapping form", () => {
    const { getByLabelText } = render(
      wrapInForm(
        onSubmit,
        { myField: { "myLabelField": "bar", nested: { value: "bar" } } },
        <ComplexRadioFields
          name="myField"
          optionLabelField="myLabelField"
          options={[
            { "myLabelField": "foo", nested: { value: "foo" } },
            { "myLabelField": "zoo", nested: { value: "zoo" } },
            { "myLabelField": "bar", nested: { value: "bar" } }
          ]}
        />
      )
    );

    fireEvent.focus(getByLabelText("foo"));
    fireEvent.click(getByLabelText("foo"));
    fireEvent.submit(screen.getByTestId("form-test-id"));

    expect(onSubmit).toHaveBeenCalledWith(
      { "myField": { "myLabelField": "foo", nested: { value: "foo" } } },
      expect.anything(),
      expect.anything()
    );
  });

  describe("when a validation error is set", () => {
    it("should NOT show a FieldError", () => {
      render(
        wrapInForm(
          onSubmit,
          { myField: { "myLabelField": "bar", nested: { value: "bar" } } },
          <ComplexRadioFields
            name="myField"
            optionLabelField="myLabelField"
            validate={() => "always errors"}
            options={[
              { "myLabelField": "foo", nested: { value: "foo" } },
              { "myLabelField": "zoo", nested: { value: "zoo" } },
              { "myLabelField": "bar", nested: { value: "bar" } }
            ]}
          />
        )
      );

      const text = screen.queryByText("always errors")
      expect(text).toBeNull()
    });
  });
});
