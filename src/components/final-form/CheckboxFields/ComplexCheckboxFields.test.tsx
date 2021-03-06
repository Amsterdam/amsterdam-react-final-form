import React from "react"
import { mount } from "enzyme"
import ComplexCheckboxFields from "./ComplexCheckboxFields"
import { wrapInForm } from "../__test__/wrapInForm"
import { FieldError } from "../../unbound/FieldError"

describe("ComplexCheckboxFields", () => {
  const onSubmit = jest.fn()

  const component = mount(wrapInForm(
    onSubmit,
    { myField: [
      { "myLabelField": "bar", nested: { value: "bar" } },
      { "myLabelField": "zoo", nested: { value: "zoo" } }
    ]},
    <ComplexCheckboxFields
      name="myField"
      optionLabelField="myLabelField"
      options={[
        { "myLabelField": "foo", nested: { value: "foo" } },
        { "myLabelField": "zoo", nested: { value: "zoo" } },
        { "myLabelField": "bar", nested: { value: "bar" } }
      ]}
    />
  ))

  beforeEach(() => {
    onSubmit.mockReset()
  })

  it("should set an initial value", () => {
    const input = component.find("input")
    expect(input.at(0).prop("checked")).toEqual(false)
    expect(input.at(1).prop("checked")).toEqual(true)
    expect(input.at(2).prop("checked")).toEqual(true)
  })

  it("should map the given `labelField` to its rendered labels", () => {
    const labels = component.find("label")
    expect(labels.at(0).text()).toEqual("foo")
    expect(labels.at(1).text()).toEqual("zoo")
    expect(labels.at(2).text()).toEqual("bar")
  })

  it("should propagate its changes to the wrapping form", () => {
    // Check 'foo'
    component
      .find("input")
      .at(0)
      .simulate("change", { target: { checked: true } })

    // Uncheck 'zoo'
    component
      .find("input")
      .at(1)
      .simulate("change", { target: { checked: false } })

    component
      .find("form")
      .simulate("submit")

    expect(onSubmit)
      .toHaveBeenCalledWith(
        { "myField": [
          { "myLabelField": "bar", nested: { value: "bar" } },
          { "myLabelField": "foo", nested: { value: "foo" } }
        ]},
        expect.anything(),
        expect.anything()
      )
  })

  describe("when a validation error is set", () => {
    const component = mount(wrapInForm(
      onSubmit,
      { myField: [
          { "myLabelField": "bar", nested: { value: "bar" } },
          { "myLabelField": "zoo", nested: { value: "zoo" } }
        ]},
      <ComplexCheckboxFields
        name="myField"
        optionLabelField="myLabelField"
        validate={() => "always errors"}
        options={[
          { "myLabelField": "foo", nested: { value: "foo" } },
          { "myLabelField": "zoo", nested: { value: "zoo" } },
          { "myLabelField": "bar", nested: { value: "bar" } }
        ]}
      />
    ))

    it("should NOT show a FieldError", () => {
      expect(component.find(FieldError).exists()).toEqual(false)
    })

    describe("when a user interacts with the component", () => {
      beforeEach(() => {
        component
          .find("input")
          .at(0)
          .simulate("focus")
          .simulate("change", { target: { checked: true } })
          .simulate("blur")
      })

      it("should show a FieldError", () => {
        expect(component.find(FieldError).text()).toEqual("always errors")
      })
    })
  })

  describe("when isRequired is set", () => {
    const component = mount(wrapInForm(
      onSubmit,
      { myField: [{ "myLabelField": "foo", nested: { value: "foo" } }]},
      <ComplexCheckboxFields
        name="myField"
        optionLabelField="myLabelField"
        isRequired={true}
        options={[
          { "myLabelField": "foo", nested: { value: "foo" } },
          { "myLabelField": "zoo", nested: { value: "zoo" } },
          { "myLabelField": "bar", nested: { value: "bar" } }
        ]}
      />
    ))

    it("should NOT show a FieldError", () => {
      expect(component.find(FieldError).exists()).toEqual(false)
    })

    describe("when a user interacts with the component", () => {
      beforeEach(() => {
        component
          .find("input")
          .at(0)
          .simulate("focus")
          .simulate("change", { target: { checked: false } })
          .simulate("blur")
      })

      it("should show a FieldError", () => {
        expect(component.find(FieldError).text()).toEqual("Dit veld is verplicht")
      })
    })
  })
})
