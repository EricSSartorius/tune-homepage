import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import Layout from "../layouts"
import SEO from "../components/seo"
import { Wrapper, Cols } from "../styles"

const AboutPage: React.FC = ({ data }) => (
  <Layout>
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
  </Layout>
)

export default AboutPage

const HeroImg = styled(Img)`
  max-height: 30rem;
`

export const query = graphql`
  query {
    heroImg: file(relativePath: { eq: "hero/honeyful-hero.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
