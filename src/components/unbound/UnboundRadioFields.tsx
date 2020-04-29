import React from 'react'
import {Label} from "./Label";
import {Label as AscLabel, RadioGroup, Radio} from "@datapunt/asc-ui";
import {FieldError} from "./FieldError";

export type Props = {
  name: string
  horizontal?: boolean,
  label?: string
  error?: string
  options: Record<string, string>,
  value: string,
} & React.HTMLAttributes<HTMLInputElement>

const UnboundRadioFields:React.FC<Props> = ({ name, horizontal, label, error, options, value, ...restProps }) => (
  <>
    { label !== undefined && <Label label={label} />}
    <RadioGroup name={name} horizontal={horizontal}>
      { Object
        .entries(options)
        .map(([key, label]) => (
          <AscLabel key={key} htmlFor={key} label={label}>
            <Radio {...restProps} id={key} name={name} value={key} checked={ value === key } />
          </AscLabel>
        )) }
    </RadioGroup>
    { error && <FieldError>{ error }</FieldError> }
  </>
)

export default React.memo(UnboundRadioFields)
