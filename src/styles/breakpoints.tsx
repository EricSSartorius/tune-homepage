import { css } from "styled-components"

export const sizes: any = {
  xSmall: 414,
  small: 600,
  medium: 880,
  tablet: 1024,
  large: 1280,
  xLarge: 1440,
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) => {
    const emSize = sizes[label] / 16
    return css`
      @media (min-width: ${emSize}em) {
        ${css(literals, ...placeholders)};
      }
    `
  }

  return acc
}, {} as Record<keyof typeof sizes, (l: TemplateStringsArray, ...p: any[]) => string>)

export const below = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) => {
    const emSize = sizes[label] / 16
    return css`
      @media (max-width: ${emSize}em) {
        ${css(literals, ...placeholders)};
      }
    `
  }

  return acc
}, {} as Record<keyof typeof sizes, (l: TemplateStringsArray, ...p: any[]) => string>)
