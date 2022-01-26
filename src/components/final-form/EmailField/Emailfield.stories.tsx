import { ComponentProps } from "react"
import { Story, Meta } from "@storybook/react"
import EmailField from "./EmailField"

export default {
  title: "EmailField",
  component: EmailField
} as Meta

const StoryComponent: Story<ComponentProps<typeof EmailField>> = (args) => <EmailField {...args} />

export const WithLabel = StoryComponent.bind({})
WithLabel.args = {
  name: "myFieldName",
  label: "foo"
}

export const WithExtraLabel = StoryComponent.bind({})
WithExtraLabel.args = {
  ...WithLabel.args,
  extraLabel: <strong>foo</strong>
}

export const WithHint = StoryComponent.bind({})
WithHint.args = {
  ...WithLabel.args,
  hint: "Nullam quis risus eget urna mollis ornare vel eu leo."
}

export const WithoutLabel = StoryComponent.bind({})
WithoutLabel.args = {
  ...WithLabel.args,
  label: undefined
}

export const WithError = StoryComponent.bind({})
WithError.args = {
  ...WithLabel.args,
  validate: () => "some error occurred"
}

export const WithRequired = StoryComponent.bind({})
WithRequired.args = {
  ...WithLabel.args,
  required: true
}

export const WithDisabled = StoryComponent.bind({})
WithDisabled.args = {
  ...WithLabel.args,
  required: true,
  disabled: true
}
