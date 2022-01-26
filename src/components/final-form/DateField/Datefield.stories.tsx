import { ComponentProps } from "react"
import { Story, Meta } from "@storybook/react"
import DateField from "./DateField"

export default {
  title: "DateField",
  component: DateField
} as Meta

const today = () => {
  const date = new Date()
  const day = `0${ date.getDate() }`.slice(-2)
  const month = `${ date.getMonth() + 1 }`.slice(-2)
  const year = date.getFullYear()

  return `${ year }-${ month }-${ day }`
}

const StoryComponent: Story<ComponentProps<typeof DateField>> = (args) => <DateField {...args} />

export const WithLabel = StoryComponent.bind({})
WithLabel.args = {
  name: "myFieldName",
  label: "foo"
}

export const WithMinimumToday = StoryComponent.bind({})
WithMinimumToday.args = {
  ...WithLabel.args,
  min: today()
}

export const WithMaximumToday = StoryComponent.bind({})
WithMaximumToday.args = {
  ...WithLabel.args,
  max: today()
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
