import React from "react"
import { render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { wrapInForm } from "../__test__/wrapInForm"

import ResetButton from "./ResetButton"
import TextField from "../TextField/TextField"

describe("ResetButton", () => {
  const onSubmit = jest.fn()

  it("should reset the form when clicked upon", () => {
    const { getByTestId } = render(
      wrapInForm(onSubmit, {},
        <>
          <TextField name="foo" />
          <ResetButton />
        </>
      )
    )

    const input = getByTestId("foo")
    const resetButton = getByTestId("reset")

    fireEvent.change(input, { target: { value: "Changed value" } })
    expect(input).toHaveValue("Changed value")

    fireEvent.click(resetButton)
    expect(input).toHaveValue("")
  })

  describe("when given an onClick callback", () => {
    const onClick = jest.fn()

    it("should call the onClick handler", () => {
      const { getByTestId } = render(
        wrapInForm(onSubmit, {},
          <>
            <TextField name="foo" />
            <ResetButton onClick={onClick} />
          </>
        )
      )

      const resetButton = getByTestId("reset")

      fireEvent.click(resetButton)
      expect(onClick).toHaveBeenCalled()
    })
  })
})
