import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { Wrapper, Cols } from "../styles"

const AboutPage: React.FC = ({ data }) => (
  <>
    <SEO title="About" />
    <HeroImg fluid={data.heroImg.childImageSharp.fluid} />
    <Wrapper>
      <section>
        <Cols isReverse>
          <h1>About</h1>
          <div style={{ marginTop: "var(--baseMargin)" }}>
            <p>Coming Soon</p>
          </div>
        </Cols>
      </section>
    </Wrapper>
  </>
)

export default AboutPage

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
