import React from "react"
import { render } from "@testing-library/react"
import { Label } from "./Label"

describe("Label", () => {
  describe("when NOT given a label property", () => {
    const { getByTestId, queryByTestId } = render(
      <Label><div data-testid="child">Foo</div></Label>
    )

    it("should just render its children", () => {
      expect(queryByTestId("label")).toBeNull()
      expect(getByTestId("child")).toBeInTheDocument()
    })
  })

  describe("when given a label property", () => {
    it("should render a label and its children", () => {
      const { getByText } = render(
        <Label label='myLabel'><div data-testid="child">Foo</div></Label>
      )

      const label = getByText("myLabel")

      expect(label).toBeInTheDocument()
      expect(getByText("Foo")).toBeInTheDocument()
    })
  })
})
