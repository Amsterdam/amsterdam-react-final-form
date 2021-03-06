import React from "react"
import TextField from "./TextField"

export default {
  title: "TextField"
}

export const WithLabel = () => <TextField name='myFieldName' label='foo' />
export const WithExtraLabel = () => <TextField name='myFieldName' label='foo' extraLabel={<strong>foo</strong>} />
export const WithHint = () => <TextField name='myFieldName' label='foo' hint='Nullam quis risus eget urna mollis ornare vel eu leo.' />
export const WithoutLabel = () => <TextField name='myFieldName' />
export const WithError = () => <TextField name='myFieldName' label='foo' validate={() => "some error occurred"} />
export const WithRequired = () => <TextField name='myFieldName' label='foo' isRequired={true} />
export const WithDisabled = () => <TextField name='myFieldName' label='foo' disabled={true} />
export const WithTypeIsTime = () => <TextField name='myFieldName' label='foo' type="time" />

