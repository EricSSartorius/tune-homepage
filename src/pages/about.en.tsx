import React from "react"
import { graphql } from "gatsby"
import About from "../components/About"
import Layout from "../layouts"

const AboutPage = ({
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
  <Layout lang="en" location={location}>
    <About lang="en" data={data} />
  </Layout>
)

export default AboutPage

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
