import React from "react"
import { useFormState } from "react-final-form"
import { Spinner } from "@amsterdam/asc-ui"
import isEmpty from "lodash.isempty"

import UnboundButton, { Props as UnboundButtonProps } from "../../unbound/UnboundButton"

const SubmitButton:React.FC<UnboundButtonProps> = ({ onClick, label, ...otherProps }) => {
  const { submitting, invalid, touched } = useFormState()

  /*
   ** In dynamic forms it takes some milliseconds to load all form items.
   ** Therefore the form can be valid for a little bit of time.
   ** This is causing a quick blink because of the disabled property.
   ** To prevent this use isEmpty(touched) to check if there are form elements.
   */

  return (
    <UnboundButton
      type="submit"
      icon={ submitting ? <Spinner /> : undefined }
      variant="secondary"
      disabled={ submitting || invalid || isEmpty(touched)}
      data-testid="submit"
      { ...otherProps }
    >
      { label }
    </UnboundButton>
  )
}

export default SubmitButton
