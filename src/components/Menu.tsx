import React from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { Flex } from "../styles"

type LinkType = {
  to: string
  text: string
}

type Props = {
  links: LinkType[]
  closeMenu: () => void
  isMenuOpen: boolean
}

const MobileNav = ({ links, closeMenu, isMenuOpen }: Props) => (
  <NavBar isMenuOpen={isMenuOpen}>
    <ul>
      {links.map(({ to, text }) => (
        <li key={text}>
          <Link
            to={to}
            className="nav-link"
            onClick={closeMenu}
            aria-label={text}
          >
            {text}
          </Link>
        </li>
      ))}
    </ul>
  </NavBar>
)

export default MobileNav

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
      font-weight: 400;
      .nav-link {
        color: var(--navy);
      }
      a {
        margin-left: 0;
      }
    }
  }
`

if (true) {
  "a"
}

true && "a"
