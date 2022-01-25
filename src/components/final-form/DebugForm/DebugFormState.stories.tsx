import { ComponentProps } from "react"
import { Story, Meta } from "@storybook/react"
import Scaffold from "../Scaffold/Scaffold"
import DebugFormState from "./DebugFormState"
import DebugFormValues from "./DebugFormValues"

export default {
  title: "Debug",
  component: DebugFormState
} as Meta

const ScaffoldSomeFields:React.FC = () => (
  <Scaffold
    columns="1fr 4fr"
    fields={{
      title: { type: "TextField", props: { label: "Title", name: "title", position: { column: 0, row: 0 } } },
      field1: { type: "TextField", props: { label: "Field 1", name: "field1", hint: "some hint", position: { column: 0, row: 1 } } },
      field2: { type: "TextField", props: { label: "Field 2", name: "field2", position: { column: 0, row: 2 } } },
      submit: { type: "SubmitButton", props: { label: "Submit", position: { column: 0, row: 3 } } }
    }}
  />
)

const StoryComponentState: Story<ComponentProps<typeof DebugFormState>> = (args) => (
  <>
    <ScaffoldSomeFields />
    <DebugFormState {...args} />
  </>
)

export const ExampleFormState = StoryComponentState.bind({})

const StoryComponentValues: Story<ComponentProps<typeof DebugFormState>> = (args) => (
  <>
    <ScaffoldSomeFields />
    <DebugFormValues {...args} />
  </>
)

export const ExampleFormValues = StoryComponentValues.bind({})
