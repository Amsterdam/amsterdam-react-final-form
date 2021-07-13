import React from "react"
import EmailField from "./EmailField"

export default {
  title: "EmailField"
}

export const WithLabel = () => <EmailField name='myFieldName' label='foo' />
export const WithExtraLabel = () => <EmailField name='myFieldName' label='foo' extraLabel={<strong>foo</strong>} />
export const WithHint = () => <EmailField name='myFieldName' label='foo' hint='Nullam quis risus eget urna mollis ornare vel eu leo.' />
export const WithoutLabel = () => <EmailField name='myFieldName' />
export const WithError = () => <EmailField name='myFieldName' label='foo' validate={() => "some error occurred"} />
export const WithRequired = () => <EmailField name='myFieldName' label='foo' isRequired={true} />
export const WithDisabled = () => <EmailField name='myFieldName' label='foo' disabled={true} />

