import React, { ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import styled from "styled-components"
import Portal from "./Portal"
import { useScrollFreeze } from "../hooks"
import Icon from "./Icon"

interface ModalAnimationProps {
  isActive: boolean
  maxWidth?: string
  children: ReactNode
  closeAction?: () => void
}

const ModalAnimation = ({
  isActive,
  children,
  closeAction,
}: ModalAnimationProps) => {
  return (
    <Portal>
      <AnimatePresence>
        {isActive && (
          <Modal
            children={children}
            closeAction={closeAction}
            isActive={isActive}
          />
        )}
      </AnimatePresence>
    </Portal>
  )
}

const Modal = ({
  isActive,
  children,
  maxWidth,
  closeAction,
}: ModalAnimationProps) => {
  useScrollFreeze()
  const pointerEvents = isActive ? `all` : `none`
  return (
    <>
      <ModalWrapper>
        <Transport
          exit={{ opacity: 0, y: -40 }}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {closeAction && (
            <CloseButton onClick={closeAction}>&#10005;</CloseButton>
          )}
          <ModalContent style={{ pointerEvents }}>{children}</ModalContent>
        </Transport>
      </ModalWrapper>
      <Background
        as={motion.div}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={closeAction || null}
      />
    </>
  )
}

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  overflow-y: scroll;
  pointer-events: none;
  z-index: var(--highestLevel);
  padding: 10%;
`

const ModalContent = styled.div``

const CloseButton = styled.button`
  pointer-events: all;
  z-index: 1;
  color: var(--white);
  position: absolute;
  top: 1.8rem;
  font-size: 2.4rem;
  right: 2rem;
`

const Background = styled.div`
  background-color: rgba(15, 15, 15, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: all;
  width: 100vw;
  height: 100vh;
  z-index: 99;
  cursor: pointer;
`

const Transport = styled(motion.div)`
  position: relative;
  width: 100%;
  min-width: 320px;
`

export default ModalAnimation
