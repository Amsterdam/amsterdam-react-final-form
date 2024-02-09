import React from "react"
import { render, fireEvent, waitFor, screen } from "@testing-library/react"
import ComplexSelectField from "./ComplexSelectField"
import { wrapInForm } from "../__test__/wrapInForm"

describe("ComplexSelectField", () => {
  const onSubmit = jest.fn()

  beforeEach(() => {
    onSubmit.mockReset()
  })

  it("should set an initial value", () => {
    render(
      wrapInForm(
        onSubmit,
        { myField: { myLabelField: "bar", nested: { value: "bar" } } },
        <ComplexSelectField
          name="myField"
          optionLabelField="myLabelField"
          options={[
            { myLabelField: "foo", nested: { value: "foo" } },
            { myLabelField: "zoo", nested: { value: "zoo" } },
            { myLabelField: "bar", nested: { value: "bar" } }
          ]}
        />
      )
    )
    const selectedValue = screen.getByTestId("selectedValue")
    expect(selectedValue.textContent).toBe("bar")
  })

  it("should map the given `labelField` to its rendered options", () => {
    render(
      wrapInForm(
        onSubmit,
        { myField: { myLabelField: "bar", nested: { value: "bar" } } },
        <ComplexSelectField
          name="myField"
          optionLabelField="myLabelField"
          options={[
            { myLabelField: "foo", nested: { value: "foo" } },
            { myLabelField: "zoo", nested: { value: "zoo" } },
            { myLabelField: "bar", nested: { value: "bar" } }
          ]}
        />
      )
    )
    expect(screen.queryAllByText("foo")).toHaveLength(1)
    expect(screen.queryAllByText("zoo")).toHaveLength(1)
    expect(screen.queryAllByText("bar")).toHaveLength(2)
  })

  it("should propagate its changes to the wrapping form", async () => {
    const { getByTestId } = render(
      wrapInForm(
        onSubmit,
        { myField: { myLabelField: "bar", nested: { value: "bar" } } },
        <ComplexSelectField
          name="myField"
          optionLabelField="myLabelField"
          options={[
            { myLabelField: "foo", nested: { value: "foo" } },
            { myLabelField: "zoo", nested: { value: "zoo" } },
            { myLabelField: "bar", nested: { value: "bar" } }
          ]}
        />
      )
    )

    const selectElement = getByTestId("myField") as HTMLInputElement
    fireEvent.change(selectElement, { target: { value: "2" } })

    expect(selectElement.value).toBe("2")
    fireEvent.submit(screen.getByTestId("form-test-id"))

    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith(
        {
          myField: { myLabelField: "bar", nested: { value: "bar" } }
        },
        expect.anything(),
        expect.anything()
      )
    )
  })

  describe("when a validation error is set", () => {
    it("should show a FieldError when interacting with the component", async () => {
      const { getByTestId } = render(
        wrapInForm(
          onSubmit,
          { myField: "bar" },
          <ComplexSelectField
            name="myField"
            optionLabelField="myLabelField"
            validate={() => "always errors"}
            options={[
              { myLabelField: "foo", nested: { value: "foo" } },
              { myLabelField: "zoo", nested: { value: "zoo" } },
              { myLabelField: "bar", nested: { value: "bar" } }
            ]}
          />
        )
      )
      const selectElement = getByTestId("myField")
      fireEvent.focus(selectElement)
      fireEvent.change(selectElement, { target: { value: "2" } })
      fireEvent.blur(selectElement)

      await waitFor(() =>
        expect(screen.queryAllByText("always errors")).toHaveLength(1)
      )
    })
  })

  describe("when isRequired is set", () => {
    it("should show a FieldError when no option is selected", async () => {
      const { getByTestId } = render(
        wrapInForm(
          onSubmit,
          { myField: "bar" },
          <ComplexSelectField
            name="myField"
            optionLabelField="myLabelField"
            isRequired={true}
            withEmptyOption={true}
            options={[
              { myLabelField: "foo", nested: { value: "foo" } },
              { myLabelField: "zoo", nested: { value: "zoo" } },
              { myLabelField: "bar", nested: { value: "bar" } }
            ]}
          />
        )
      )
      const selectElement = getByTestId("myField")
      fireEvent.focus(selectElement)
      fireEvent.change(selectElement, { target: { value: "" } })
      fireEvent.blur(selectElement)

      await waitFor(() =>
        expect(screen.queryAllByText("Dit veld is verplicht")).toHaveLength(1)
      )
    })
  })
})
