import React from "react"
import { Wrapper, Container, media, below } from "../styles"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

type Props = {
  title: string
  fluid?: string
}

const HeroWrapper = ({ title, fluid = "" }: Props) => {
  const Hero = (
    <div className={fluid ? "white-text" : "gradient-bg"}>
      <Wrapper>
        <HeroContents>
          <Container>
            <h1>{title}</h1>
          </Container>
        </HeroContents>
      </Wrapper>
    </div>
  )

  if (fluid)
    return (
      <HeroBackgroundImage
        fluid={fluid}
        alt={title}
        Tag="div"
        backgroundColor="var(--navy)"
      >
        {Hero}
      </HeroBackgroundImage>
    )
  return Hero
}

export default HeroWrapper

const HeroBackgroundImage = styled(BackgroundImage)`
  ${below.medium`
    &:before,
    &:after {
      background-position: right -250px center !important;
    }
`}
`

export const HeroContents = styled.div`
  display: flex;
  position: relative;
  padding: 15rem 0;
  h1 {
    margin: 0;
  }
  &:after {
    position: absolute;
    height: 10px;
    top: 0;
    left: 0;
    content: "";
    width: var(--pathWidth);
    background: var(--gold);
  }
  &:before {
    position: absolute;
    height: calc(100% - 60px);
    bottom: 0;
    left: 0;
    content: "";
    width: var(--pathWidth);
    background: var(--gold);
  }
  ${media.medium`
    &:after {
      height: 40px;
    }
    &:before {
      height: calc(100% - 110px);
    }
  `}
`
