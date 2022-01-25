import { ComponentProps } from "react"
import { Story, Meta } from "@storybook/react"
import Scaffold from "../Scaffold/Scaffold"
import ComplexRadioFields from "./ComplexRadioFields"

export default {
  title: "RadioFields/Complex data structure",
  component: ComplexRadioFields
} as Meta

type MyComplexDataStructure = {
  myLabel: string
  myValue: number,
  something: { nested: { foo: boolean } }
}

const StoryComponent: Story<ComponentProps<typeof ComplexRadioFields>> = (args) => <ComplexRadioFields {...args} />

export const WithLabel = StoryComponent.bind({})
WithLabel.args = {
  name: "myFieldName",
  label: "foo",
  optionLabelField: "myLabel",
  options: [
    { myLabel: "My Label 1", myValue: 1, something: { nested: { foo: true } } },
    { myLabel: "My Label 2", myValue: 2, something: { nested: { foo: false } }  }
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

export const WithMultipleFields = () => <>
  <ComplexRadioFields<MyComplexDataStructure>
    name='myFieldName'
    optionLabelField='myLabel'
    options={[
      { myLabel: "My Label 1", myValue: 1, something: { nested: { foo: true } }  },
      { myLabel: "My Label 2", myValue: 2, something: { nested: { foo: false } }  }
    ]}
  />
  <ComplexRadioFields<MyComplexDataStructure>
    name='myFieldName2'
    optionLabelField='myLabel'
    options={[
      { myLabel: "My Label 1", myValue: 1, something: { nested: { foo: true } }  },
      { myLabel: "My Label 2", myValue: 2, something: { nested: { foo: false } }  }
    ]}
  />
</>

export const SingleRadio = () => (
  <Scaffold
    fields={{
      field4: {
        type: "ComplexRadioFields",
        props: {
          label: "Single Radio",
          name: "field4",
          optionLabelField:"mySingleRadio",
          isRequired: true,
          options: [{ myLabel: "My Label 1", myValue: 1 }]
        }
      },
      submit: { type: "SubmitButton", props: { label: "Submit" } }
    }}
  />
)
