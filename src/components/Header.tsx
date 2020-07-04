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
        <h1 className="logo">
          <Link to="/" aria-label="Home page">
            Tune & Flying Home Studio
          </Link>
        </h1>
        <div className="nav-wrapper">
          <Nav links={links} />
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
  &.active {
    background-color: var(--white);
    height: 100px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`

const InnerHeader = styled.div`
  position: relative;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  padding: var(--basePadding);
  max-width: 1146px;
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
