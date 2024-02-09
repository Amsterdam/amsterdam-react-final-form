import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import TextField from "./TextField"
import { wrapInForm } from "../__test__/wrapInForm"


describe("TextField", () => {
  const onSubmit = jest.fn()

  beforeEach(() => {
    onSubmit.mockReset()
  })

  it("should set an initial value", () => {
    const { getByTestId } = render(
      wrapInForm(onSubmit, { myField: "myValue" }, <TextField name="myField" />)
    )
    const element = getByTestId("myField") as HTMLInputElement
    expect(element.value).toEqual("myValue")
  })

  it("should propagate its changes to the wrapping form", () => {
    const { getByTestId } = render(
      wrapInForm(onSubmit, { myField: "myValue" }, <TextField name="myField" />)
    )
    fireEvent.change(getByTestId("myField"), {
      target: { value: "Changed value" }
    })

    fireEvent.submit(getByTestId("form-test-id"))

    expect(onSubmit).toHaveBeenCalledWith(
      { myField: "Changed value" },
      expect.anything(),
      expect.anything()
    )
  })

  describe("when a validation error is set", () => {
    it("should NOT show a FieldError", () => {
      render(
        wrapInForm(
          onSubmit,
          { myField: "myValue" },
          <TextField name="myField" validate={() => "always errors"} />
        )
      )
      const text = screen.queryAllByText("always errors")
      expect(text).toHaveLength(0)
    })

    describe("when a user interacts with the component", () => {
      it("should show a FieldError", () => {
        const { getByTestId } = render(
          wrapInForm(
            onSubmit,
            { myField: "myValue" },
            <TextField name="myField" validate={() => "always errors"} />
          )
        )
        const element = getByTestId("myField")
        fireEvent.focus(element)
        fireEvent.change(element, {
          target: { value: "Changed value" }
        })
        fireEvent.blur(element)

        const text = screen.queryAllByText("always errors")
        expect(text).toHaveLength(1)
      })
    })
  })

  describe("when isRequired is set", () => {
    it("should NOT show a FieldError", () => {
      render(
        wrapInForm(
          onSubmit,
          { myField: "myValue" },
          <TextField name="myField" isRequired={true} />
        )
      )

      const text = screen.queryAllByText("always errors")
      expect(text).toHaveLength(0)
    })

    describe("when a user interacts with the component", () => {
      it("should show a FieldError", () => {
        const { getByTestId } = render(
          wrapInForm(
            onSubmit,
            { myField: "myValue" },
            <TextField name="myField" isRequired={true} />
          )
        )
        const element = getByTestId("myField")
        fireEvent.focus(element)
        fireEvent.change(element, {
          target: { value: "" }
        })
        fireEvent.blur(element)
        const text = screen.queryAllByText("Dit veld is verplicht")
        expect(text).toHaveLength(1)
      })
    })
  })
})

