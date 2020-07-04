import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

type LinkType = {
  to: string
  text: string
}

type Props = {
  links: LinkType[]
  closeMenu: () => void
}

const MobileNav = ({ links, closeMenu }: Props) => (
  <NavBar>
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
