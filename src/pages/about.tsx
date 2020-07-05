import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import Layout from "../layouts"
import SEO from "../components/Seo"
import { Wrapper } from "../styles"

const AboutPage: React.FC = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <HeroImg fluid={data.heroImg.childImageSharp.fluid} />
    <Wrapper>
      <section>
        <h1>About</h1>
        <p>about info here</p>
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
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
