import { ComponentProps } from "react"
import { Story, Meta } from "@storybook/react"
import BooleanField from "./BooleanField"

export default {
  title: "BooleanField",
  component: BooleanField
} as Meta

const StoryComponent: Story<ComponentProps<typeof BooleanField>> = (args) => <BooleanField {...args} />

export const WithLabel = StoryComponent.bind({})
WithLabel.args = {
  name: "myFieldName",
  label: "foo"
}

export const WithHint = StoryComponent.bind({})
WithHint.args = {
  ...WithLabel.args,
  hint: "Nullam quis risus eget urna mollis ornare vel eu leo."
}

export const WithError = StoryComponent.bind({})
WithError.args = {
  ...WithLabel.args,
  validate: () => "Some error occurred"
}

export const WithRequired = StoryComponent.bind({})
WithRequired.args = {
  ...WithLabel.args,
  isRequired: true
}
