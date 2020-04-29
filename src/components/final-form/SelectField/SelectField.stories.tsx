import React from "react"
import { SelectField } from "./SelectField"

export default {
  title: "SelectField"
}

export const WithLabel = () => <SelectField
  name='myFieldName'
  label='foo'
  options={{ "": "-", foo: "Foo", bar: "Bar" }}
/>

export const WithoutLabel = () => <SelectField
  name='myFieldName'
  options={{ foo: "Foo", bar: "Bar" }}
/>

export const WithError = () => <SelectField
  name='myFieldName'
  options={{ foo: "Foo", bar: "Bar" }}
  validate={() => "Some error occured"}
/>
