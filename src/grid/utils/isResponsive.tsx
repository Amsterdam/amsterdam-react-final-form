import { OnlyResponsive, BreakPoint } from "../../components/layout/responsiveProps"
import { Dimensions } from "../../components/layout/FormGridCell"

const validKeys:BreakPoint[] = [
  "mobileS",
  "mobileM",
  "mobileL",
  "tabletS",
  "tabletM",
  "laptop" ,
  "laptopM",
  "laptopL",
  "desktop",
  "desktopL"
]

export const isResponsiveDimensions = (obj: any): obj is OnlyResponsive<Dimensions> => {
  if (typeof obj !== "object") {
    return false
  }

  const keys = Object.keys(obj)

  if (keys.length === 0) {
    return true
  }

  for(const key of keys) {
    if (!validKeys.includes(key as BreakPoint)) {
      return false
    }
  }

  return true
}
