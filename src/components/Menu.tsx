import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useLanguage } from "../global/language"

type LinkType = {
  to: string
  text: string
}

type Props = {
  links: LinkType[]
  closeMenu: () => void
  isMenuOpen: boolean
}

const Menu = ({ links, closeMenu, isMenuOpen }: Props) => {
  const { isThai, setIsThai } = useLanguage()

  return (
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
        <Language>
          <span
            onClick={() => {
              setIsThai(false)
              closeMenu()
            }}
            className={`lang ${!isThai ? "active" : ""}`}
          >
            EN
          </span>
          <span>|</span>
          <span
            onClick={() => {
              setIsThai(true)
              closeMenu()
            }}
            className={`lang ${isThai ? "active" : ""}`}
          >
            TH
          </span>
        </Language>
      </ul>
    </NavBar>
  )
}

export default Menu

const Language = styled.li`
  span {
    margin: 1rem;
  }
  .active {
    font-weight: 700;
  }
  .lang {
    cursor: pointer;
  }
`

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
