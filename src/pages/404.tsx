import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { Wrapper } from "../styles"
import Layout from "../layouts"

const NotFoundPage = ({
  data,
  location,
}: {
  location: object
  data: {
    heroImg: {
      childImageSharp: {
        fluid: string
      }
    }
  }
}) => (
  <Layout location={location} lang="en">
    <SEO title="404" description="Page not found" />
    <HeroImg fluid={data.heroImg.childImageSharp.fluid} />

    <Wrapper>
      <section className="container">
        <h1>404: Not Found</h1>
      </section>
    </Wrapper>
  </Layout>
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
