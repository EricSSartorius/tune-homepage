import React, { useState } from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import { media, below } from "../styles"
import { useScrollPosition, useScrollFreeze } from "../hooks"
import {} from "../hooks"
import { motion, AnimatePresence } from "framer-motion"
import Portal from "./Portal"
import Icon from "./Icon"
import Menu from "./Menu"

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
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  useScrollPosition(
    ({ currPos }) => {
      const isScrolled = currPos.y < -20
      if (isScrolled !== hasHeaderBg) setHasHeaderBg(isScrolled)
    },
    [hasHeaderBg]
  )

  return (
    <HeaderWrapper
      className={hasHeaderBg ? "active" : ""}
      isMenuOpen={isMenuOpen}
    >
      <InnerHeader>
        <div className="logo">
          <Link to="/" aria-label="Home page">
            Tune <span className="and">&</span>{" "}
            <span className="flying">Flying Home Studio</span>
          </Link>
        </div>
        <div className="nav-wrapper">
          <nav>
            <Link to="/projects/" className="grid-link">
              <Icon
                name="grid"
                color={
                  hasHeaderBg || isMenuOpen
                    ? "var(--textColor)"
                    : "var(--white)"
                }
              />
            </Link>

            <MenuIcon
              onClick={toggleMenu}
              className={isMenuOpen ? "is-active" : ""}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </MenuIcon>

            <Portal>
              <AnimatePresence>
                {isMenuOpen && (
                  <MenuModal
                    isMenuOpen={isMenuOpen}
                    closeMenu={closeMenu}
                    links={links}
                  />
                )}
              </AnimatePresence>
            </Portal>
          </nav>
        </div>
      </InnerHeader>
    </HeaderWrapper>
  )
}

export default Header

const MenuModal = ({ isMenuOpen, closeMenu, links }) => {
  useScrollFreeze()
  const pointerEvents = isMenuOpen ? `all` : `none`

  return (
    <>
      <ModalWrapper>
        <Transport
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ position: "relative" }}
        >
          <MenuWrapper style={{ pointerEvents }}>
            <Menu links={links} closeMenu={closeMenu} isMenuOpen={isMenuOpen} />
          </MenuWrapper>
        </Transport>
      </ModalWrapper>
    </>
  )
}

const MenuIcon = styled.button`
  transition: opacity 0.2s ease;
  outline: none;
  &:hover {
    opacity: 0.7;
  }
  &.is-active .hamburger-inner,
  &.is-active .hamburger-inner::before,
  &.is-active .hamburger-inner::after {
    background-color: var(--textColor);
  }

  .hamburger-box {
    width: 34px;
    height: 24px;
    display: inline-block;
    position: relative;
  }

  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
  }
  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    width: 34px;
    height: 4px;
    background-color: var(--white);
    border-radius: 4px;
    position: absolute;
    transition: transform 0.15s ease;
  }
  .hamburger-inner::before,
  .hamburger-inner::after {
    content: "";
    display: block;
  }
  .hamburger-inner::before {
    top: -10px;
  }
  .hamburger-inner::after {
    bottom: -10px;
  }

  .hamburger-inner {
    transition-duration: 0.22s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    &::before {
      transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
    }
    &::after {
      transition: bottom 0.1s 0.25s ease-in,
        transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
  }

  &.is-active .hamburger-inner {
    transform: rotate(225deg);
    transition-delay: 0.12s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    &::before {
      top: 0;
      opacity: 0;
      transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
    }
    &::after {
      bottom: 0;
      transform: rotate(-90deg);
      transition: bottom 0.1s ease-out,
        transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
    }
  }
`

const MenuWrapper = styled.div`
  padding: var(--basePadding);
  background: var(--lightGray);
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  margin-right: 1rem;
  z-index: 9;
`

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  height: 100vh;
  overflow-y: scroll;
  pointer-events: none;
  z-index: 9;
`

const Transport = styled(motion.div)`
  width: 100%;
`

const HeaderWrapper = styled.header`
  &.active {
    background-color: var(--bgColor);
    .logo a {
      color: var(--textColor);
    }
    ${MenuIcon} {
      .hamburger-inner,
      .hamburger-inner::before,
      .hamburger-inner::after {
        background-color: var(--textColor);
      }
    }
  }
  ${({ isMenuOpen }) =>
    isMenuOpen
      ? css`
          .logo a {
            color: var(--textColor);
          }
          &.active {
            background: var(--lightGray);
          }
        `
      : css`
          .logo a {
            color: var(--white);
          }
          &.active {
            height: 100px;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
              0 3px 6px rgba(0, 0, 0, 0.23);
            ${below.medium`
                height: 80px;
              `};
            ${below.small`
                height: 100px;
              `};
          }
        `}
  top: 0;
  left: 0;
  width: 100%;
  z-index: var(--headerLevel);
  position: fixed;
  transition: all ease-out 0.5s;
  .logo a {
    transition: opacity 0.2s ease;
    font-size: var(--heading-three);
    font-family: var(--headingFont);
    .and {
      font-size: var(--smallFontSize);
      margin: 0 0.5rem;
    }
    &:hover {
      opacity: 0.7;
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
  .grid-link {
    margin-right: 4.5rem;
    transform: 0.3s ease;
    &:hover {
      opacity: 0.7;
    }
  }
  ${media.small`
    .logo {
      /* margin: 0 0 0 -1.5rem; */
    }

  `};
  ${below.small`
    align-items: flex-start;
    .grid-link {
      display: none;
    }
    .logo a {
      display: block;
      margin-top: -10px;
      .and {
        margin: 0;
      }
      .flying {
        display: block;
      }
    }
  `};
`
