import React from "react"
import { render, fireEvent, waitFor, screen } from "@testing-library/react"
import BooleanField from "./BooleanField"
import { wrapInForm } from "../__test__/wrapInForm"


describe("BooleanField", () => {
  const onSubmit = jest.fn()

  beforeEach(() => {
    onSubmit.mockReset()
  })

  it("should set an initial value", () => {
    const { getByRole } = render(
      wrapInForm(onSubmit, { myField: true }, <BooleanField name="myField" />)
    )
    const checkbox = getByRole("checkbox") as HTMLInputElement
    expect(checkbox.checked).toEqual(true)
  })

  it("should propagate its changes to the wrapping form", async () => {
    const { getByRole, getByTestId } = render(
      wrapInForm(onSubmit, { myField: true }, <BooleanField name="myField" />)
    )
    const checkbox = getByRole("checkbox") as HTMLInputElement
    fireEvent.click(checkbox)
    await waitFor(() => {
      fireEvent.submit(getByTestId("form-test-id"))
      expect(onSubmit).toHaveBeenCalledWith(
        { myField: false },
        expect.anything(),
        expect.anything()
      )
    })
  })

  describe("when a validation error is set", () => {
    const errorMessage = "always errors"
    it("should NOT show a FieldError", () => {
      render(
        wrapInForm(
          onSubmit,
          { myField: true },
          <BooleanField name="myField" validate={() => errorMessage} />
        )
      )
      const text = screen.queryByText(errorMessage)
      expect(text).toBeNull()
    })

    it("should show a FieldError when a user interacts with the component", () => {
      const { getByRole } = render(
        wrapInForm(
          onSubmit,
          { myField: true },
          <BooleanField name="myField" validate={() => errorMessage} />
        )
      )
      const checkbox = getByRole("checkbox") as HTMLInputElement
      fireEvent.focus(checkbox)
      fireEvent.click(checkbox)
      fireEvent.blur(checkbox)

      const text = screen.queryAllByText(errorMessage)
      expect(text).toHaveLength(1)
    })
  })

  describe("when isRequired is set", () => {
    const fieldErrorMessage = "Dit veld is verplicht"
    it("should NOT show a FieldError", () => {
      render(
        wrapInForm(
          onSubmit,
          { myField: true },
          <BooleanField name="myField" isRequired />
        )
      )
      const text = screen.queryAllByText(fieldErrorMessage)
      expect(text).toHaveLength(0)
    })

    it("should show a FieldError when a user interacts with the component", () => {
      const { getByTestId } = render(
        wrapInForm(
          onSubmit,
          { myField: true },
          <BooleanField name="myField" isRequired />
        )
      )

      const checkbox = getByTestId("myField") as HTMLInputElement
      fireEvent.focus(checkbox)
      fireEvent.click(checkbox)
      fireEvent.blur(checkbox)

      const text = screen.queryAllByText(fieldErrorMessage)
      expect(text).toHaveLength(1)
    })
  })
})
