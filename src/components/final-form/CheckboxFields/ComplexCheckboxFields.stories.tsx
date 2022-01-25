import { ComponentProps } from "react"
import { Story, Meta } from "@storybook/react"
import ComplexCheckboxFields from "./ComplexCheckboxFields"

export default {
  title: "CheckboxFields/Complex data structure",
  component: ComplexCheckboxFields
} as Meta

// type MyComplexDataStructure = {
//   myLabel: string
//   myValue: number,
//   something: { nested: { foo: boolean } }
// }
// <ComplexCheckboxFields<MyComplexDataStructure>

const StoryComponent: Story<ComponentProps<typeof ComplexCheckboxFields>> = (args) => <ComplexCheckboxFields {...args} />
//<ComplexCheckboxFields<MyComplexDataStructure>

export const WithLabel = StoryComponent.bind({})
WithLabel.args = {
  name: "myFieldName",
  label: "foo",
  optionLabelField: "myLabel",
  options:[
    { myLabel: "My Label 1", myValue: 1, something: { nested: { foo: true } } },
    { myLabel: "My Label 2", myValue: 2, something: { nested: { foo: false } } }
  ]
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

export const WithRequired = StoryComponent.bind({})
WithRequired.args = {
  ...WithLabel.args,
  isRequired: true
}
