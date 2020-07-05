import React, { useState, useRef } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Flex, below } from "../styles"
import { useScrollFreeze } from "../hooks"
import { motion, AnimatePresence } from "framer-motion"
import Portal from "./Portal"
import Icon from "./Icon"
import Menu from "./Menu"

type LinkType = {
  to: string
  text: string
}

type Props = {
  links: LinkType[]
  hasScrolled: boolean
}

const MobileMenu = ({ links, hasScrolled = false }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav>
      <Link to="/projects/">
        <Icon
          name="grid"
          style={{ marginRight: "2rem" }}
          color={hasScrolled ? "var(--textColor)" : "var(--white)"}
        />
      </Link>

      <MenuIcon onClick={toggleMenu}>
        <Icon
          name="hamburger"
          color={hasScrolled ? "var(--textColor)" : "var(--white)"}
        />
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
  )
}

export default MobileMenu

type MenuModalProps = {
  isMenuOpen: boolean
  closeMenu: () => void
  links: LinkType[]
}

const MenuModal = ({ isMenuOpen, closeMenu, links }: MenuModalProps) => {
  useScrollFreeze()
  const pointerEvents = isMenuOpen ? `all` : `none`

  return (
    <>
      <ModalWrapper>
        <Transport
          initial={{ right: "100%" }}
          animate={{ right: "0%" }}
          exit={{ right: "100%" }}
          transition={{ duration: 0.3 }}
          style={{ position: "relative" }}
        >
          <MenuWrapper style={{ pointerEvents }}>
            <Flex>
              LOGO
              <button onClick={closeMenu}>
                <Icon name="close" />
              </button>
            </Flex>
            <Menu links={links} closeMenu={closeMenu} />
          </MenuWrapper>
        </Transport>
      </ModalWrapper>
    </>
  )
}

const MenuIcon = styled.button`
  margin-top: 5px;
`

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
