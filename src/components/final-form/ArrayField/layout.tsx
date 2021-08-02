import styled from "styled-components"
import { Button, themeSpacing } from "@amsterdam/asc-ui"

export const RowButtonWrap = styled.div`
  
  margin: ${ themeSpacing(1) };
   
  -ms-grid-column: 999;
  
  grid-row-start: 2;
  -ms-grid-row: 2;  
`

export const AddButtonWrap = styled.div`
  margin-top: ${ themeSpacing(1) };
`

export const StyledButton = styled(Button)`
  min-width: 48px;  
`
