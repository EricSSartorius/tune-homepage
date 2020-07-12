import React, { useRef, useEffect, useState } from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import { media, Flex, below } from "../styles"
import { useScrollPosition } from "../hooks"
import { useScrollFreeze } from "../hooks"
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
            Tune <span className="and">&</span> Flying Home Studio
          </Link>
        </div>
        <div className="nav-wrapper">
          <nav>
            <Link to="/projects/" style={{ marginRight: "4.5rem" }}>
              <Icon
                name="grid"
                color={
                  hasHeaderBg || isMenuOpen
                    ? "var(--textColor)"
                    : "var(--white)"
                }
              />
            </Link>

            <MenuIcon onClick={toggleMenu}>
              <Icon
                name="hamburger"
                color={
                  hasHeaderBg || isMenuOpen
                    ? "var(--textColor)"
                    : "var(--white)"
                }
              />
            </MenuIcon>

            {/* <Portal>
              <AnimatePresence>
                {isMenuOpen && (
                  <MenuModal
                    isMenuOpen={isMenuOpen}
                    closeMenu={closeMenu}
                    links={links}
                  />
                )}
              </AnimatePresence>
            </Portal> */}
          </nav>
        </div>
      </InnerHeader>
      <Menu links={links} closeMenu={closeMenu} isMenuOpen={isMenuOpen} />
    </HeaderWrapper>
  )
}

export default Header

// const MenuModal = ({ isMenuOpen, closeMenu, links }) => {
//   useScrollFreeze()
//   const pointerEvents = isMenuOpen ? `all` : `none`

//   return (
//     <>
//       <ModalWrapper>
//         <Transport
//           initial={{ bottom: "100%" }}
//           animate={{ bottom: "0%" }}
//           exit={{ bottom: "100%" }}
//           transition={{ duration: 0.3 }}
//           style={{ position: "relative" }}
//         >
//           <MenuWrapper style={{ pointerEvents }}>
//             <Flex>
//               LOGO
//               <button onClick={closeMenu}>
//                 <Icon name="close" />
//               </button>
//             </Flex>
//             <Menu links={links} closeMenu={closeMenu} />
//           </MenuWrapper>
//         </Transport>
//       </ModalWrapper>
//     </>
//   )
// }

const MenuIcon = styled.button``

const MenuWrapper = styled.div`
  padding: var(--basePadding);
  background: var(--white);
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  margin-right: 1rem;
  z-index: var(--highestLevel);
`

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  height: 100vh;
  overflow-y: scroll;
  pointer-events: none;
  z-index: var(--highestLevel);
`

const Transport = styled(motion.div)`
  width: 100%;
`

const HeaderWrapper = styled.header`
  ${({ isMenuOpen }) =>
    isMenuOpen
      ? css`
          background-color: var(--bgColor);
          height: 100%;
          .logo a {
            color: var(--textColor);
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
          }
        `}
  top: 0;
  left: 0;
  width: 100%;
  z-index: var(--headerLevel);
  position: fixed;
  transition: all ease-out 0.5s;
  .logo a {
    font-size: var(--heading-three);
    font-family: var(--headingFont);
    .and {
      font-size: var(--smallFontSize);
      margin: 0 0.5rem;
    }
  }
  &.active {
    background-color: var(--bgColor);
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
  /* height: 100%; */
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
