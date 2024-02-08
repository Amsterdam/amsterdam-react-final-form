import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import CheckboxFields from "./CheckboxFields";
import { wrapInForm } from "../__test__/wrapInForm";


describe("CheckboxFields", () => {
  const onSubmit = jest.fn();

  beforeEach(() => {
    onSubmit.mockReset();
  });

  it("should set an initial value", () => {
    render(
      wrapInForm(
        onSubmit,
        { myField: ["foo", "bar"] },
        <CheckboxFields
          name="myField"
          options={{
            foo: "Foo",
            bar: "Bar",
            zoo: "Zoo",
          }}
        />
      )
    );

    // Find all input elements
    const inputElements:HTMLInputElement[] = screen.getAllByRole('checkbox');

    expect(inputElements[0].checked).toBe(true);
    expect(inputElements[1].checked).toBe(true);
    expect(inputElements[2].checked).toBe(false);

  });

  it("should propagate its changes to the wrapping form", async () => {
    render(
      wrapInForm(
        onSubmit,
        { myField: ["foo", "bar"] },
        <CheckboxFields
          name="myField"
          options={{
            foo: "Foo",
            bar: "Bar",
            zoo: "Zoo",
          }}
        />
      )
    );

    fireEvent.submit(screen.getByTestId("form-test-id"));

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith(
        { myField: ["foo", "bar"] },
        expect.anything(),
        expect.anything()
      );
    });
  });

});
