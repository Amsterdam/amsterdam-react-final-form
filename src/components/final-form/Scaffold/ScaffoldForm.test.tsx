import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import ScaffoldForm from "./ScaffoldForm"
import Scaffold, { ScaffoldFields } from "./Scaffold"

describe("ScaffoldForm", () => {
  const onSubmit = jest.fn()

  const fields:ScaffoldFields = {
      field: {
        type: "TextField",
        props: {
          label: "Label",
          name: "field",
          position: { row: 0, column: 0 }
        }
      }
  }

  beforeEach(() => {
    onSubmit.mockReset()
  })

  it("should submit values", () => {
    render(
      <ScaffoldForm onSubmit={onSubmit}>
        <Scaffold fields={fields} />
      </ScaffoldForm>
    )

    const input = screen.getByLabelText("Label") as HTMLInputElement

    fireEvent.change(input, { target: { value: "foo bar" } })
    fireEvent.submit(screen.getByTestId("form-test-id"))

    expect(onSubmit).toHaveBeenCalledWith({ field: "foo bar" })
  })
})
