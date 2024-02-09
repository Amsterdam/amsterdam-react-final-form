import React, { useCallback } from 'react'
import { configure } from '@storybook/react'
import { GlobalStyle, ThemeProvider, themeColor } from '@amsterdam/asc-ui'
import { action } from '@storybook/addon-actions'
import { Form } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 20px;
`

const Pre = styled.pre`
  margin: 0;
  padding: 20px;
  background-color: ${themeColor('tint', 'level3')}
`

export const decorators = [
  (Story) => {

    // Mock a submit:
    const handleSubmit = useCallback((...args) => new Promise((resolve) => {
      action('submit')
      console.log("Mock submit...", args)
      setTimeout(() => {
        console.log("...submitted!")
        resolve()
      }, 1000)
    }), [])

    return (
      <ThemeProvider>
        <GlobalStyle />
        <Form
          onSubmit={handleSubmit}
          mutators={{ ...arrayMutators }}
          render={({ values, handleSubmit }) => (
            <>
              <Wrapper>
                <form onSubmit={handleSubmit}>
                 <Story />
                </form>
              </Wrapper>
              <Wrapper>
                <Pre>
                  // form values:
                </Pre>
                <Pre>
                  { JSON.stringify(values, null, 2) }
                </Pre>
              </Wrapper>
            </>
          )}
        />
      </ThemeProvider>
    )
  }
]
