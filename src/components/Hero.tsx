import React from "react"
import { Wrapper, Container, media, below } from "../styles"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

type Props = {
  title: string
  fluid: string
}

const HeroWrapper = ({ title, fluid }: Props) => (
  <HeroBackgroundImage fluid={fluid} alt={title} Tag="div">
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

export default HeroWrapper

const HeroBackgroundImage = styled(BackgroundImage)``

export const HeroContents = styled.div`
  display: flex;
  padding: 15rem 0;
  h1 {
    margin: 0;
  }
`
