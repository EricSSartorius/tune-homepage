import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import LanguageSelector from "./LanguageSelector"

type Props = {
  closeMenu: () => void
  isMenuOpen: boolean
  location: {
    pathname: string
  }
  lang: "en" | "th"
  links: {
    to: string
    text: string
  }[]
}

const Menu = ({ closeMenu, isMenuOpen, location, lang, links }: Props) => {
  return (
    <NavBar isMenuOpen={isMenuOpen}>
      <ul>
        {links.map(({ to, text }) => (
          <li key={text}>
            <Link
              to={to}
              className={`nav-link ${lang}`}
              onClick={closeMenu}
              aria-label={text}
            >
              {text}
            </Link>
          </li>
        ))}
        <LanguageSelector isInMenu location={location} lang={lang} />
      </ul>
    </NavBar>
  )
}

export default Menu

const NavBar = styled.nav`
  display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100%;
  ul {
    margin: 0;
    li {
      list-style: none;
      display: block;
      margin: 40px 0;
      .nav-link {
        font-size: var(--heading-three);
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
`
