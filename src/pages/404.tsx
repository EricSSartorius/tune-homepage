import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { Wrapper } from "../styles"

const NotFoundPage: React.FC = ({ data }) => (
  <>
    <SEO title="404" />
    <HeroImg fluid={data.heroImg.childImageSharp.fluid} />

    <Wrapper>
      <section className="container">
        <h1>404: Not Found</h1>
      </section>
    </Wrapper>
  </>
)

export default NotFoundPage

const HeroImg = styled(Img)`
  max-height: 30rem;
`

export const query = graphql`
  query {
    heroImg: file(relativePath: { eq: "hero/honeyful-hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
