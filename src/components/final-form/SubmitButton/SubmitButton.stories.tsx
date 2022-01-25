import { ComponentProps } from "react"
import { Meta, Story } from "@storybook/react"
import SubmitButton from "./SubmitButton"
import TextField from "../TextField/TextField"

export default {
  title: "Button/Submit button",
  component: SubmitButton
} as Meta

const StoryComponent: Story<ComponentProps<typeof SubmitButton>> = (args) => (
  <>
    <TextField name="foo" label="Some field" />
    <SubmitButton {...args} />
  </>
)

export const Example = StoryComponent.bind({})
Example.args = {
  label: "Save"
}
