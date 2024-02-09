import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import ComplexCheckboxFields from "./ComplexCheckboxFields"
import { wrapInForm } from "../__test__/wrapInForm"


describe("ComplexCheckboxFields", () => {
  const onSubmit = jest.fn()

  beforeEach(() => {
    onSubmit.mockReset()
  })

  it("should set an initial value", () => {
    const { getByLabelText } = render(
      wrapInForm(
        onSubmit,
        {
          myField: [
            { myLabelField: "bar", nested: { value: "bar" } },
            { myLabelField: "zoo", nested: { value: "zoo" } }
          ]
        },
        <ComplexCheckboxFields
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

    const fooCheckbox = getByLabelText("foo") as HTMLInputElement
    const zooCheckbox = getByLabelText("zoo") as HTMLInputElement
    const barCheckbox = getByLabelText("bar") as HTMLInputElement

    expect(fooCheckbox.checked).toBeFalsy()
    expect(zooCheckbox.checked).toBeTruthy()
    expect(barCheckbox.checked).toBeTruthy()
  })

  it("should propagate its changes to the wrapping form", () => {
    const { getByLabelText, getByTestId } = render(
      wrapInForm(
        onSubmit,
        {
          myField: [
            { myLabelField: "bar", nested: { value: "bar" } },
            { myLabelField: "zoo", nested: { value: "zoo" } }
          ]
        },
        <ComplexCheckboxFields
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

    fireEvent.click(getByLabelText("foo"))
    fireEvent.click(getByLabelText("zoo"))
    fireEvent.submit(getByTestId("form-test-id"))

    expect(onSubmit).toHaveBeenCalledWith(
      {
        myField: [
          { myLabelField: "bar", nested: { value: "bar" } },
          { myLabelField: "foo", nested: { value: "foo" } }
        ]
      },
      expect.anything(),
      expect.anything()
    )
  })

  describe("when a validation error is set", () => {
    it("should show a FieldError when a user interacts with the component", () => {
      const { getByLabelText  } = render(
        wrapInForm(
          onSubmit,
          {
            myField: [
              { myLabelField: "bar", nested: { value: "bar" } },
              { myLabelField: "zoo", nested: { value: "zoo" } }
            ]
          },
          <ComplexCheckboxFields
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

      fireEvent.focus(getByLabelText("foo"))
      fireEvent.click(getByLabelText("foo"))
      fireEvent.blur(getByLabelText("foo"))

      const text = screen.queryAllByText("always errors")
      expect(text).toHaveLength(1)
    })
  })

  describe("when isRequired is set", () => {
    it("should show a FieldError when a user interacts with the component", () => {
      const { getByLabelText } = render(
        wrapInForm(
          onSubmit,
          {
            myField: [{ myLabelField: "foo", nested: { value: "foo" } }]
          },
          <ComplexCheckboxFields
            name="myField"
            optionLabelField="myLabelField"
            isRequired={true}
            options={[
              { myLabelField: "foo", nested: { value: "foo" } },
              { myLabelField: "zoo", nested: { value: "zoo" } },
              { myLabelField: "bar", nested: { value: "bar" } }
            ]}
          />
        )
      )

      fireEvent.focus(getByLabelText("foo"))
      fireEvent.click(getByLabelText("foo"))
      fireEvent.blur(getByLabelText("foo"))

      const text = screen.queryAllByText("Dit veld is verplicht")
      expect(text).toHaveLength(1)
    })
  })
})
