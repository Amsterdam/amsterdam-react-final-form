import React from "react"
import { render, screen } from "@testing-library/react"
import ComposedField from "./ComposedField"


describe("ComposedField", () => {
  it("should render a label when given", () => {
    render(<ComposedField label="Label" />)
    const text = screen.queryAllByText("Label")
    expect(text).toHaveLength(1)
  })

  it("should render a hint when given", () => {
    render(<ComposedField hint="hint" />)
    const text = screen.queryAllByText("hint")
    expect(text).toHaveLength(1)
  })

  it("should render an error when given", () => {
    const { getByTestId } = render(<ComposedField error="error" />)
    const text = screen.queryAllByText("error")
    expect(text).toHaveLength(1)
  })

  it("should render children when given", () => {
    render(<ComposedField><section>Foo</section></ComposedField>)
    const text = screen.queryAllByText("Foo")
    expect(text).toHaveLength(1)
  })
})
