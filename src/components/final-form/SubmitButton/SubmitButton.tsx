import React, { useEffect, useState } from "react"
import { useFormState } from "react-final-form"
import { Spinner } from "@amsterdam/asc-ui"

import UnboundButton, { Props as UnboundButtonProps } from "../../unbound/UnboundButton"

const SubmitButton:React.FC<UnboundButtonProps> = ({ onClick, label, ...otherProps }) => {
  const [disabled, setDisabled] = useState(true)
  const { submitting, valid } = useFormState()

  /*
   ** In dynamic forms it takes some milliseconds to load all form items.
   ** Therefore the form can be valid for a little bit of time.
   ** This is causing a quick blink because of the disabled property.
   ** To prevent this a timeout/delay of 150 ms is set to load aall form items.
   */
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDisabled(!valid)
    }, 150)

    return () => clearTimeout(timeoutId)
  }, [valid])

  return (
    <UnboundButton
      type="submit"
      icon={ submitting ? <Spinner /> : undefined }
      variant="secondary"
      disabled={ submitting || disabled }
      data-e2e-id="submit"
      { ...otherProps }
    >
      { label }
    </UnboundButton>
  )
}

export default SubmitButton
