import { Meta } from "@storybook/react"
import { Close } from "@amsterdam/asc-assets"
import ResetButton from "./ResetButton"
import TextField from "../TextField/TextField"

export default {
  title: "Button/Reset button",
  component: TextField
} as Meta

export const WithIcon = () => (
  <>
    <TextField name="foo" label="Some field" />
    <ResetButton icon={<Close />} variant="tertiary" />
  </>
)

export const WithText = () => (
  <>
    <TextField name="foo" label="Some field" />
    <ResetButton label="Reset" variant="tertiary" />
  </>
)
