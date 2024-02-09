import React from "react"
import { render, fireEvent, screen, waitFor, queryByTestId } from "@testing-library/react"
import { wrapInForm } from "../__test__/wrapInForm"
import ArrayField from "./ArrayField"


describe("ArrayField", () => {
  const component = (
    <ArrayField
      name="myArray"
      allowAdd={true}
      allowRemove={true}
      maxItems={5}
      scaffoldFields={{
        foo: { type: "TextField", props: { name: "foo" } },
        bar: { type: "TextField", props: { name: "bar" } }
      }}
    />
  )

  describe("when clicked on the add button", () => {
    it("should add scaffolded fields", () => {
      const { container, getByTestId } = render(wrapInForm(jest.fn(), {}, component))

      expect(container.querySelectorAll("input").length).toEqual(0)

      // select the button by its test ID and click on it.
      const addButton = getByTestId("button-add-myArray")
      fireEvent.click(addButton)

      expect(container.querySelectorAll("input").length).toEqual(2)

      fireEvent.click(addButton)

      expect(container.querySelectorAll("input").length).toEqual(4)
    })
  })

  describe("when clicked on a remove button", () => {
    it ("should remove scaffolded fields", () => {
      const { container } = render(wrapInForm(jest.fn(), { myArray: [ { foo: "foo", bar: "bar" }, { foo: "foo", bar: "bar" } ]}, component))

      expect(container.querySelectorAll("input").length).toEqual(4)

      fireEvent.click(container.querySelector("button")!)

      expect(container.querySelectorAll("input").length).toEqual(2)

      fireEvent.click(container.querySelector("button")!)

      expect(container.querySelectorAll("input").length).toEqual(0)
    })
  })

  describe("when submitted", () => {
    it("should submit an array", async () => {
      const onSubmit = jest.fn()
      const { getByTestId } = render(wrapInForm(onSubmit, {}, component))

      const addButton = getByTestId("button-add-myArray")
      fireEvent.click(addButton)
      fireEvent.click(addButton)

      // Find all input elements
      const inputElements = screen.getAllByRole("textbox")

      // Iterate through input elements and set values based on index
      inputElements.forEach((inputElement, index) => {
        fireEvent.change(inputElement, { target: { value: "change_" + index } })
      })

      fireEvent.submit(screen.getByTestId("form-test-id"))

      // Wait for the onSubmit function to be called
      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledWith(
          {
            myArray: [
              { foo: "change_0", bar: "change_1" },
              { foo: "change_2", bar: "change_3" }
            ]
          },
          expect.anything(),
          expect.anything()
        )
      })
    })
  })

  describe("ArrayField", () => {
    const maxNumberOfItems = 3
    const component = <ArrayField
      name="myArray"
      allowAdd={true}
      maxItems={maxNumberOfItems}
      scaffoldFields={{
        foo: { type: "TextField", props: { name: "foo" } },
        bar: { type: "TextField", props: { name: "bar" } }
      }}
    />
    it("should hide the add button when maxItems is reached", async () => {
      const { container, getByTestId } = render(wrapInForm(jest.fn(), {}, component))

      // select the button by its test ID and click on it {maxNumberOfItems} times.
      const addButton = getByTestId("button-add-myArray")
      for (let i = 0; i < maxNumberOfItems; i++) {
        await fireEvent.click(addButton)
      }

      expect(container.querySelectorAll("input").length).toEqual(maxNumberOfItems * 2)

      const invisibleButton = queryByTestId(container, "button-add-myArray")

      expect(invisibleButton).toBeNull()
    })
  })
})
