import React from "react"
import { Input } from "@amsterdam/asc-ui"

import ComposedField, { ComposedFieldProps } from "./ComposedField"

export type Props = ComposedFieldProps & React.InputHTMLAttributes<HTMLInputElement>

/**
 * Renders a INPUT field that is not bound to final-form.
 */

const UnboundDateField:React.FC<Props> = ({
    label, extraLabel, extraLabelAlign, hint, error, position,
    align, tooltip, ...otherProps
  }) =>
  <ComposedField
    id={otherProps.id ?? otherProps.name}
    label={label}
    extraLabel={extraLabel}
    extraLabelAlign={extraLabelAlign}
    hint={hint}
    error={error}
    position={position}
    align={align}
    tooltip={tooltip}
  >
    <Input
      error={!!error}
      id={otherProps.id ?? otherProps.name}
      data-e2e-id={otherProps.id ?? otherProps.name}
      {...otherProps}
    />
  </ComposedField>

export default UnboundDateField
