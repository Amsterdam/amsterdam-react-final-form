import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { wrapInForm } from "../__test__/wrapInForm"
import ScaffoldField from "./ScaffoldField"


const renderWithForm = (component: JSX.Element, initialValues: any = {}) =>
  render(wrapInForm(jest.fn(), initialValues, component))

describe("ScaffoldField", () => {
  it("should be able to render a BooleanField", () => {
    const { getByTestId } = renderWithForm(<ScaffoldField field={{ type: "Boolean", props: { name: "name" } }} />)
    const field = getByTestId("name")

    expect(field).toBeInTheDocument()
    expect(field).toHaveAttribute("name", "name")
  })

  it("should be able to render CheckboxFields", () => {
    const { getByTestId } = renderWithForm(<ScaffoldField field={{ type: "CheckboxFields", props: { name: "name", options: { foo: "foo" } } }} />)
    const field = getByTestId("name")

    expect(field).toBeInTheDocument()
    expect(field).toHaveAttribute("name", "name")
  })

  it("should be able to render a NumberField", () => {
    const { getByTestId } = renderWithForm(<ScaffoldField field={{ type: "NumberField", props: { name: "name" } }} />)
    const field = getByTestId("name")

    expect(field).toBeInTheDocument()
    expect(field).toHaveAttribute("name", "name")
  })

  it("should be able to render RadioFields", () => {
    const { getByTestId } = renderWithForm(<ScaffoldField field={{ type: "RadioFields", props: { name: "name", options: { foo: "foo" } } }} />)
    const field = getByTestId("foo")

    expect(field).toBeInTheDocument()
    expect(field).toHaveAttribute("name", "name")
  })

  it("should be able to render a SelectField", () => {
    const { getByTestId } = renderWithForm(<ScaffoldField field={{ type: "SelectField", props: { name: "name", options: { foo: "foo" } } }} />)
    const field = getByTestId("name")

    expect(field).toBeInTheDocument()
    expect(field).toHaveAttribute("name", "name")
  })

  it("should be able to render a TextAreaField", () => {
    const { getByTestId } = renderWithForm(<ScaffoldField field={{ type: "TextAreaField", props: { name: "name" } }} />)
    const field = getByTestId("name")

    expect(field).toBeInTheDocument()
    expect(field).toHaveAttribute("name", "name")
  })

  it("should be able to render a TextField", () => {
    const { getByTestId } = renderWithForm(<ScaffoldField field={{ type: "TextField", props: { name: "name" } }} />)
    const field = getByTestId("name")

    expect(field).toBeInTheDocument()
    expect(field).toHaveAttribute("name", "name")
  })

  it("should be able to set initial values", () => {
    const { getByTestId } = renderWithForm(<ScaffoldField field={{ type: "TextField", props: { name: "name" } }} />, { name: "foo" })
    const field = getByTestId("name")
    expect(field).toHaveValue("foo")
  })
})
