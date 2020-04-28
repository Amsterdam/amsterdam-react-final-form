import React, {PropsWithChildren, useCallback} from "react"
import { Select } from "@datapunt/asc-ui"
import { useField } from "react-final-form"
import { FieldValidator } from "final-form"
import {Label} from "../Label/Label";
import {FieldError} from "../FieldError/FieldError";

export type Props = {
  label?: string
  name: string
  validate?: FieldValidator<string>,
  options: Record<string, string>
} & React.HTMLAttributes<HTMLSelectElement>

const SelectField:React.FC<Props> = ({
  label,
  name,
  validate,
  options,
  ...restProps
}) => {

  const {input, meta } = useField(name, {
    type: "select",
    validate
  })

  const hasError = meta.touched && meta.error

  return <>
    <Label label={label}>
      <Select
        error={hasError}
        {...input}
        {...restProps}
      >
        { Object.entries(options)
          .map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))
        }
      </Select>
    </Label>
    { hasError && <FieldError>{ meta.error }</FieldError> }
  </>
}

export default SelectField
