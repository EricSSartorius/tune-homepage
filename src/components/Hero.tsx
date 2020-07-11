import React from "react"
import { Wrapper, Container, media, below } from "../styles"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

type Props = {
  title: string
  fluid: string
  position?: string
  height?: string
}

const Hero = ({ title, fluid, position = "", height = "auto" }: Props) => (
  <HeroBackgroundImage
    fluid={fluid}
    alt={title}
    Tag="div"
    position={position}
    height={height}
  >
    <div className={fluid ? "white-text" : ""}>
      <Wrapper>
        <HeroContents>
          <Container>
            <h1>{title}</h1>
          </Container>
        </HeroContents>
      </Wrapper>
    </div>
  </HeroBackgroundImage>
)

export default Hero

const HeroBackgroundImage = styled(BackgroundImage)`
  height: ${({ height }) => height};
  &:after,
  &:before {
    background-position: ${({ position }) => position + "!important"};
  }
`

export const HeroContents = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 15rem 0;
  h1 {
    margin: 0;
  }
`
