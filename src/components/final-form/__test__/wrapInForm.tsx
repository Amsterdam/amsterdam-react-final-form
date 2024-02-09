import { Form } from "react-final-form"
import arrayMutators from "final-form-arrays"
import React from "react"
import { ThemeProvider } from "@amsterdam/asc-ui"

export const wrapInForm = (
  onSubmit:jest.Mock,
  initialValues: any,
  components: JSX.Element
) => (
  <ThemeProvider>
    <Form
      onSubmit={onSubmit}
      mutators={ { ...arrayMutators } }
      initialValues={initialValues}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} data-testid="form-test-id">
          { components }
        </form>
      )}
    />
  </ThemeProvider>
)
