import { ComponentProps } from "react"
import { Story, Meta } from "@storybook/react"
import Button from "./Button"

export default {
  title: "Button/Normal Button",
  component: Button
} as Meta

const StoryComponent: Story<ComponentProps<typeof Button>> = (args) => <Button {...args} />

export const Example = StoryComponent.bind({})
Example.args = {
  variant: "primary",
  label: "foo"
}
