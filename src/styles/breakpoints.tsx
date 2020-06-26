import { css } from "styled-components"

export const sizes: any = {
  xSmall: 414,
  small: 600,
  medium: 880,
  tablet: 1024,
  large: 1280,
  xLarge: 1440,
}

export const above = Object.keys(sizes).reduce(
  (accumulator: any, label: any) => {
    const emSize = sizes[label] / 16
    accumulator[label] = (...args: any[]) => css`
      @media (min-width: ${emSize}em) {
        ${css(...args)};
      }
    `
    return accumulator
  },
  {}
)

export const below = Object.keys(sizes).reduce(
  (accumulator: any, label: any) => {
    const emSize = sizes[label] / 16
    accumulator[label] = (...args: any[]) => css`
      @media (max-width: ${emSize}em) {
        ${css(...args)};
      }
    `
    return accumulator
  },
  {}
)
