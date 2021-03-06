import React from "react"
import { mount } from "enzyme"
import RadioFields from "./RadioFields"
import { wrapInForm } from "../__test__/wrapInForm"
import { FieldError } from "../../unbound/FieldError"

describe("RadioFields", () => {
  const onSubmit = jest.fn()

  const component = mount(wrapInForm(
    onSubmit,
    { myField: "bar" },
    <RadioFields name='myField' options={{ "foo": "Foo", "bar": "Bar" }} />
  ))

  beforeEach(() => {
    onSubmit.mockReset()
  })

  it("should set an initial value", () => {
    expect(component.find("input[checked=true]").prop("value")).toEqual("bar")
  })

  it("should propagate its changes to the wrapping form", () => {
    component
      .find("input[value='foo']")
      .simulate("change", { target: { value: "foo" } })

    component
      .find("form")
      .simulate("submit")

    expect(onSubmit)
      .toHaveBeenCalledWith(
        { "myField": "foo" },
        expect.anything(),
        expect.anything()
      )
  })

  describe("when a validation error is set", () => {
    const component = mount(wrapInForm(
      onSubmit,
      { myField: "bar" },
      <RadioFields name='myField' options={{ "foo": "Foo", "bar": "Bar" }} validate={() => "always errors"} />
    ))

    it("should NOT show a FieldError", () => {
      expect(component.find(FieldError).exists()).toEqual(false)
    })

    describe("when a user interacts with the component", () => {
      beforeEach(() => {
        component
          .find("input[value='foo']")
          .simulate("focus")
          .simulate("change", { target: { value: "foo" } })
          .simulate("blur")
      })

      it("should show a FieldError", () => {
        expect(component.find(FieldError).text()).toEqual("always errors")
      })
    })
  })
})
