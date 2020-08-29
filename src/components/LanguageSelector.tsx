import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import { below } from "../styles"

const LanguageSelector = ({
  isInMenu = false,
  location,
  lang,
}: {
  isInMenu?: boolean
  location: {
    pathname: string
  }
  lang: "en" | "th"
}) => {
  console.log("lang", lang)
  return (
    <Language isInMenu={isInMenu}>
      {lang === "en" ? (
        <span className="active lang">EN</span>
      ) : (
        <Link to={location.pathname.replace("/th", "")} className="lang">
          EN
        </Link>
      )}

      <span>|</span>
      {lang === "th" ? (
        <span className="active lang">TH</span>
      ) : (
        <Link to={`/th${location.pathname}`} className="lang">
          TH
        </Link>
      )}
    </Language>
  )
}

export default LanguageSelector

const Language = styled.p`
  ${({ isInMenu }) =>
    isInMenu
      ? css`
          span,
          a {
            margin: 1rem;
          }
        `
      : css`
          text-align: right;
          span,
          a + span,
          a {
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
