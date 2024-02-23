import React from "react"
import { render, screen } from "@testing-library/react"
import { wrapInForm } from "../__test__/wrapInForm"
import Scaffold from "./Scaffold"

const renderComponent = (component: JSX.Element, initialValues: any = {}) => {
  const { rerender } = render(wrapInForm(jest.fn(), initialValues, component))
  return { rerender }
}

describe("ScaffoldField", () => {
  it("should be able to render multiple fields", () => {
    renderComponent(
      <Scaffold
        fields={{
          foo: { type: "TextField", props: { name: "foo" } },
          bar: { type: "TextField", props: { name: "bar" } }
        }}
      />
    )

    const fooTextField = screen.getByTestId("foo")
    const barTextField = screen.getByTestId("bar")

    expect(fooTextField).toBeInTheDocument()
    expect(barTextField).toBeInTheDocument()
  })

  it("should be able to modify its scaffolded fields", () => {
    const renderEach = jest.fn((props, renderer) => <section data-testid="scaffold-section">{renderer(props)}</section>)

    renderComponent(
      <Scaffold
        fields={{
          foo: { type: "TextField", props: { name: "foo" } },
          bar: { type: "TextField", props: { name: "bar" } }
        }}
        renderEach={renderEach}
      />
    )

    // TextField should now be wrapped with a 'section':
    const sections = screen.getAllByTestId("scaffold-section")
    expect(sections[0].querySelector("input")).toBeInTheDocument()
    expect(sections[1].querySelector("input")).toBeInTheDocument()

    expect(renderEach).toHaveBeenCalledTimes(2)
    expect(renderEach).toHaveBeenNthCalledWith(1, { type: "TextField", props: { name: "foo" } }, expect.anything(), 0)
    expect(renderEach).toHaveBeenNthCalledWith(2, { type: "TextField", props: { name: "bar" } }, expect.anything(), 1)
  })
})
