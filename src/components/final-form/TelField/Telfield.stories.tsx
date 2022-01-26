import { ComponentProps } from "react"
import { Story, Meta } from "@storybook/react"
import TelField from "./TelField"

export default {
  title: "TelField",
  component: TelField
} as Meta

const StoryComponent: Story<ComponentProps<typeof TelField>> = (args) => <TelField {...args} />

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

export const WithExtraLabel = StoryComponent.bind({})
WithExtraLabel.args = {
  ...WithLabel.args,
  extraLabel: <strong>foo</strong>
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
