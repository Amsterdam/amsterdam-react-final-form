import styled, { css, SimpleInterpolation } from "styled-components"
import { Responsive, responsiveProps }  from "./responsiveProps"
import { themeSpacing } from "@amsterdam/asc-ui"

export type Dimensions = {
  row?: number,
  rowSpan?: number
  column?: number
  columnSpan?: number
}

export type FormGridCellProps = {
  position?: Responsive<Dimensions>
  align?: Responsive<"left" | "right" | "center">
  rowOffset?: number
}

const NUM_ROWS_PER_FIELD = 2

// NOTE:
//
// We have to implement our own version of -ms-grid.
// Styled-components does not automatically prefix it, as the specs do not completely overlap.
// https://github.com/thysultan/stylis.js/issues/51
//
// We can achieve our goals using both specs though.

const generateDimensionsCss = (position:Dimensions, rowOffset:number) => {
  const parts:SimpleInterpolation[] = []

  if (position === undefined) {
    return parts
  }

  if (position.row !== undefined) {
    parts.push(css`
      grid-row-start: ${ (position.row * NUM_ROWS_PER_FIELD) + 1 + rowOffset };
      -ms-grid-row: ${ (position.row * NUM_ROWS_PER_FIELD) + 1 + rowOffset };
    `)
  }

  if (position.rowSpan && rowOffset) {
    parts.push(css`
      grid-row-end: span ${ (position.rowSpan * NUM_ROWS_PER_FIELD) - 1 };
      -ms-grid-row-span: ${ (position.rowSpan * NUM_ROWS_PER_FIELD) - 1 };
    `)
  }

  if (position.column !== undefined)  {
    parts.push(css`
      grid-column-start: ${ position.column + 1 };
      -ms-grid-column: ${ position.column + 1 };
    `)
  }

  if (position.columnSpan !== undefined) {
    parts.push(css`
      grid-column-end: span ${ position.columnSpan };
      -ms-grid-column-span: ${ position.columnSpan };
    `)
  }

  return parts
}

const FormGridCell = styled.div<FormGridCellProps>`

  margin: ${ themeSpacing(1) } ${ themeSpacing(2) };
  ${ ({ rowOffset }) => rowOffset !== undefined && css`
    display: flex;
    flex-direction: column;
    margin-bottom: ${ themeSpacing(5) };`
  }

  align-self: ${ ({ rowOffset }) => rowOffset === undefined ? "end" : "initial" };
  -ms-grid-row-align: ${ ({ rowOffset }) => rowOffset === undefined ? "end" : "initial" };

  ${ (props: FormGridCellProps) => responsiveProps(props, {
    "align": unit => css`text-align: ${ unit };`,
    "position": unit => generateDimensionsCss(unit, props.rowOffset ?? 0)
  } ) }
`
FormGridCell.displayName = "FormGridCell"

export default FormGridCell
