import { ComponentProps } from "react"
import { Story, Meta } from "@storybook/react"
import CheckboxFields from "./CheckboxFields"

export default {
  title: "CheckboxFields",
  component: CheckboxFields
} as Meta

const StoryComponent: Story<ComponentProps<typeof CheckboxFields>> = (args) => <CheckboxFields {...args} />

export const WithLabel = StoryComponent.bind({})
WithLabel.args = {
  name: "myFieldName",
  label: "foo",
  options: { foo: "Foo", bar: "Bar" }
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
  validate: () => "Some error occurred"
}

const num = 50
const options = [...Array(num)]
  .map((_, index) => `item ${ index }`)
  .reduce((acc, item) => ({ ...acc, [item]: item }), {})

export const WithColumnCount = StoryComponent.bind({})
WithColumnCount.args = {
  ...WithLabel.args,
  options,
  columnCount: { mobileS: 1, laptop: Math.ceil(num / 10) }
}

export const WithRequired = StoryComponent.bind({})
WithRequired.args = {
  ...WithLabel.args,
  isRequired: true
}
