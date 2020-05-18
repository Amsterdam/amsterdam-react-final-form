import React, { useCallback } from "react"
import { Label as AscLabel, RadioGroup, Radio } from "@datapunt/asc-ui"
import ComposedField, { ComposedFieldProps } from "./ComposedField"

export type Props = Omit<React.HTMLAttributes<HTMLInputElement>, "onChange"> & ComposedFieldProps & {
  name: string
  horizontal?: boolean,
  options: Record<string, string>,
  value: string,
  onChange?: (string:string) => void
}

const UnboundRadioFields:React.FC<Props> = ({ name, horizontal, label, hint, error, options, value, onChange, ...restProps }) => {
  const handleChange = useCallback((e) => {
    if (onChange) {
      onChange(e.target.value)
    }
  }, [onChange])

  return (
    <ComposedField label={label} hint={hint} error={error}>
      <RadioGroup name={name} horizontal={horizontal}>
        { Object
          .entries(options)
          .map(([key, label]) => (
            <AscLabel key={key} htmlFor={key} label={label}>
              <Radio {...restProps} onChange={handleChange} error={!!error} id={key} name={name} value={key} checked={ value === key } />
            </AscLabel>
          )) }
      </RadioGroup>
    </ComposedField>
  )
}

export default React.memo(UnboundRadioFields)
