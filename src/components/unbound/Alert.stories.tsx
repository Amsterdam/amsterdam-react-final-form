import { ComponentProps } from "react"
import { Story, Meta } from "@storybook/react"

import Alert from "./Alert"

export default {
  title: "Unbound/Alert",
  component: Alert
} as Meta


const StoryComponent: Story<ComponentProps<typeof Alert>> = (args) => (
  <Alert {...args} >
    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
  </Alert>
)

export const ErrorExample = StoryComponent.bind({})
ErrorExample.args = {
  variant: "error"
}

export const ErrorExampleWithTitle = StoryComponent.bind({})
ErrorExampleWithTitle.args = {
  ...ErrorExample.args,
  title: "Vestibulum id ligula!"
}

export const SuccessExample = StoryComponent.bind({})
SuccessExample.args = {
  ...ErrorExample.args,
  variant: "success"
}

export const SuccessExampleWithTitle = StoryComponent.bind({})
SuccessExampleWithTitle.args = {
  ...ErrorExample.args,
  variant: "success",
  title: "Vestibulum id ligula!"
}
