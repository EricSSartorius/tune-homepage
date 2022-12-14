import React from "react"
import { graphql } from "gatsby"
import Services from "../components/Services"
import Layout from "../layouts"

const ServicesPage = ({
  data,
  location,
}: {
  location: {
    pathname: string
  }
  data: {
    heroImg: {
      childImageSharp: {
        fluid: string
      }
    }
  }
}) => (
  <Layout lang="th" location={location}>
    <Services lang="th" data={data} pathname={location.pathname} />
  </Layout>
)

export default ServicesPage

export const query = graphql`
  query {
    heroImg: file(relativePath: { eq: "hero/private-hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid_withWebp
        }
        fixed {
          src
        }
      }
    }
  }
`
