import React, { useRef, useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Nav from "./Nav"
import { media } from "../styles"
import { useScrollPosition } from "../hooks"

const links = [
  {
    text: "About",
    to: "/about/",
  },
  {
    text: "Services",
    to: "/services/",
  },
  {
    text: "Projects",
    to: "/projects/",
  },
  {
    text: "Contact",
    to: "/contact/",
  },
]

const Header = () => {
  const [hasHeaderBg, setHasHeaderBg] = useState(false)

  useScrollPosition(
    ({ currPos }) => {
      const isScrolled = currPos.y < -20
      if (isScrolled !== hasHeaderBg) setHasHeaderBg(isScrolled)
    },
    [hasHeaderBg]
  )

  return (
    <HeaderWrapper className={hasHeaderBg ? "active" : ""}>
      <InnerHeader>
        <div className="logo">
          <Link to="/" aria-label="Home page">
            Tune <span className="and">&</span> Flying Home Studio
          </Link>
        </div>
        <div className="nav-wrapper">
          <Nav links={links} hasScrolled={hasHeaderBg} />
        </div>
      </InnerHeader>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  top: 0;
  left: 0;
  width: 100%;
  z-index: var(--headerLevel);
  position: fixed;
  transition: all ease-out 0.5s;
  .logo a {
    color: var(--white);
    font-size: var(--heading-three);
    font-family: var(--headingFont);
    .and {
      font-size: var(--smallFontSize);
      margin: 0 0.5rem;
    }
  }
  &.active {
    background-color: var(--bgColor);
    height: 100px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    .logo a {
      color: var(--textColor);
    }
  }
`

const InnerHeader = styled.div`
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding: var(--basePadding);
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  height: 100%;
  .logo {
    font-size: var(--baseFontSize);
    flex-shrink: 1;
    margin: 0 0 0 -1rem;
    a {
      display: flex;
      align-items: center;
      background: none;
    }
  }
  ${media.medium`
    .logo {
      margin: 0 0 0 -1.5rem;
    }
  `};
`
