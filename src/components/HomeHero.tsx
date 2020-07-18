import React, { useState, useEffect } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import { wrap } from "@popmotion/popcorn"

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
}

const HomeHero = ({ images }) => {
  const [[page, direction], setPage] = useState([0, 0])

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page)

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }
  // const [currentImage, setCurrentImage] = useState(images[1])

  // const updateImage = () => {

  // }

  // useEffect(() => {
  //   setTimeout(() => updateImage, 100)

  // },[currentImageIndex])
  return (
    <Hero>
      <AnimatePresence>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 200 },
            opacity: { duration: 0.2 },
          }}
        >
          <Img fluid={images[imageIndex]} style={{ height: "100vh" }} />
        </motion.div>
      </AnimatePresence>
      <button onClick={() => paginate(1)}>?</button>
    </Hero>
  )
}

export default HomeHero

const Hero = styled.div`
  position: relative;
`
