import styled, { css } from "styled-components"
import { below } from "../styles"

export const Button = styled.button`
  background: var(--primaryColor);
  color: var(--white);
  display: inline-block;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
  text-transform: uppercase;
  font-size: var(--largeFontSize);
  font-family: var(--headingFont);
  padding: 1.9rem 4.7rem;
  transition: 0.3s ease all;
  line-height: 1;
  &:hover {
    background: var(--darkGold);
    color: var(--white);
  }
  &:disabled {
    background: var(--grey);
    cursor: auto;
  }
  & + & {
    margin-left: 20px;
  }
  ${({ size }: { size?: string }) =>
    size === "small" &&
    css`
      padding: 1.5rem 3.5rem;
      font-size: var(--baseFontSize);
    `};
  ${below.xSmall`
    display: block;
    padding: 1.3rem 2.3rem 1.2rem;
    & + & {
      margin: 20px 0 0 0;
    }
  `}
`

// Button used to skip to content for accessibility
export const SkipLink = styled(Button)`
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
  color: white;
  border: 2px solid var(--red);
  background: var(--red);
  &:active,
  &:focus,
  &:hover {
    top: 120px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    width: auto;
    height: auto;
    overflow: visible;
  }
`
