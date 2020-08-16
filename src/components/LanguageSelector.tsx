import React from "react"
import { useLanguage } from "../global/language"
import styled, { css } from "styled-components"
import { below } from "../styles"

const LanguageSelector = ({ isInMenu = false }: { isInMenu?: boolean }) => {
  const { lang, setLang } = useLanguage()

  return (
    <Language isInMenu={isInMenu}>
      <span
        onClick={() => setLang("en")}
        className={`lang ${lang === "en" ? "active" : ""}`}
      >
        EN
      </span>
      <span>|</span>
      <span
        onClick={() => setLang("th")}
        className={`lang ${lang === "th" ? "active" : ""}`}
      >
        TH
      </span>
    </Language>
  )
}

export default LanguageSelector

const Language = styled.p`
  ${({ isInMenu }) =>
    isInMenu
      ? css`
          span {
            margin: 1rem;
          }
        `
      : css`
          text-align: right;
          span + span {
            margin-left: 2rem;
          }
          ${below.medium`
            text-align: center;
            padding: 2rem 0 1rem;
          `};
        `}
  .lang {
    cursor: pointer;
    opacity: 0.7;
    transition: 0.3s ease all;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    font-weight: 700;
    opacity: 1;
  }
`
