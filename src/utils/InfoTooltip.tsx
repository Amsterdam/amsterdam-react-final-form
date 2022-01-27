import React from "react"
import styled from "styled-components"
import { Icon, themeSpacing } from "@amsterdam/asc-ui"
import { Info } from "@amsterdam/asc-assets"

type Props = {
  text: string
}

const Wrap = styled.div`
  position: relative;
  display: inline-block;
  cursor: help;
  margin-left: ${ themeSpacing(2) } !important;
`

const StyledTooltipText = styled.span`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  z-index: 100;
  white-space: normal;
  width: 250px;
  background-color: rgba(0, 0, 0, 0.85);
  color: #fff;
  text-align: center;
  font-size: 14px;
  border-radius: 6px;
  padding: ${ themeSpacing(2) };
  bottom: 100%;
  left: 50%;
  margin-left: -125px !important;
  transition: opacity 0.3s;
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
  ${ Wrap }:hover & {
    visibility: visible;
    opacity: 1;
  }
`

const InfoTooltip: React.FC<Props> = ({ text }) => (
  <Wrap>
    <Icon size={18}>
      <Info />
    </Icon>
    <StyledTooltipText>{text}</StyledTooltipText>
  </Wrap>
)

export default InfoTooltip
