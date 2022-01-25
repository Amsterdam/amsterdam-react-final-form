import { ComponentProps } from "react"
import { Story, Meta } from "@storybook/react"

import ArrayField from "./ArrayField"
import { ScaffoldFields } from "../Scaffold/Scaffold"

export default {
  title: "ArrayField",
  component: ArrayField
} as Meta

const fields:ScaffoldFields = {
  description: {
    type: "TextField",
    props: {
      name: "description",
      label: "Description",
      validate: () => "Error"
    }
  },
  amount: {
    type: "NumberField",
    props: {
      name: "amount",
      label: "Amount"
    }
  },
  price: {
    type: "NumberField",
    props: {
      name: "price",
      label: "Price",
      hint: ""
    }
  }
}

const StoryComponent: Story<ComponentProps<typeof ArrayField>> = (args) => <ArrayField {...args} />

export const Array = StoryComponent.bind({})
Array.args = {
  columns: "1fr 1fr 1fr auto",
  name: "myArray",
  allowAdd: true,
  allowRemove: true,
  scaffoldFields: fields
}

export const WithMinItems = StoryComponent.bind({})
WithMinItems.args = {
  ...Array.args,
  minItems: 3
}

export const WithMaxItems = StoryComponent.bind({})
WithMaxItems.args = {
  ...Array.args,
  label: "Max 3 items",
  maxItems: 3
}

export const WithLabel = StoryComponent.bind({})
WithLabel.args = {
  ...Array.args,
  label: "My label"
}

export const WithHint = StoryComponent.bind({})
WithHint.args = {
  ...Array.args,
  label: "My label",
  hint: "Maecenas faucibus mollis interdum."
}
