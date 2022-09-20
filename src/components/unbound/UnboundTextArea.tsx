import React from "react"
import { TextArea } from "@amsterdam/asc-ui"
import styled from "styled-components"
import ComposedField, { ComposedFieldProps } from "./ComposedField"

export type Props = ComposedFieldProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>

const StyledTextArea = styled(TextArea)`
  min-height: 100px;
`

/**
 * Renders a TEXTAREA field that is not bound to final-form.
 */

const UnboundTextArea:React.FC<Props> = ({
  label, extraLabel, extraLabelAlign, hint, error, position, align, tooltip, ...otherProps
}) =>
  <ComposedField
    id={otherProps.id ?? otherProps.name}
    extraLabel={extraLabel}
    extraLabelAlign={extraLabelAlign}
    label={label}
    hint={hint}
    error={error}
    position={position}
    align={align}
    tooltip={tooltip}
  >
    <StyledTextArea
      id={otherProps.id ?? otherProps.name}
      data-e2e-id={otherProps.id ?? otherProps.name}
      error={!!error}
      {...otherProps}
    />
  </ComposedField>

export default UnboundTextArea

