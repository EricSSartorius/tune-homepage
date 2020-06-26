import styled, { css } from 'styled-components'
import { media } from './breakpoints'
// Grids & Utilities
// 🔒 Not configurable
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Used anytime you need 2 columns inside of a layout
// Cards, Images, nearly anything
// * scalign: any justify-content property value = 'space-between'
export const Flex = styled.div`
  display: flex;
  margin: 0 auto;
  > *:last-child {
    margin-left: 20px;
  }
  justify-content: ${({ scalign }: { scalign?: string }) =>
    scalign || 'space-between'};
`

// Used anytime you need a grid of anything.
// Cards, Images, nearly anything
// * cols: [1,2,3], 1
export const Grid = styled.div`
  display: grid;
  grid-gap: 3rem;
  margin: 0 auto;
  ${({ cols = [] }) => {
    if (typeof cols === 'object') {
      return cols.map((_, index: number) => {
        // This nifty map goes over each col and adds style to a breakpoint
        const key = Object.keys(media)[index]
        return media[key]`
         grid-template-columns: repeat(${cols[index]}, 1fr);
      `
      })
    }
    return css`
      grid-template-columns: repeat(${cols}, 1fr);
    `
  }}
`

// Used anytime you need section padding.
export const Container = styled.div`
  padding: var(--topSectionPadding) 0 var(--bottomSectionPadding) 0;
`

export const Card = styled.div`
  padding: var(--cardPadding);
  border-radius: var(--cardRadius);
  background: var(--white);
`

// Used anytime we need padding and max width in a layout
// if bg has color, needs to be wrapped in a div with a background color
//  * width: "tight" or width in px
export const Wrapper = styled.div`
  padding: 0 var(--basePadding);
  margin: 0 auto;
  max-width: 1146px;
  ${media.large`
    max-width: ${({ width }: { width: string }) =>
      width === 'tight' ? '940px' : width};
  `}
`

// This is a standard layout only to be used as a main page layout
// Anytime you want the uneven two col layout.
export const Cols = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr;
  ${media.medium`
    grid-template-columns: ${({ isReverse }: { isReverse: boolean }) =>
      isReverse ? '360px 1fr' : '1fr 360px'};
  `}
`
