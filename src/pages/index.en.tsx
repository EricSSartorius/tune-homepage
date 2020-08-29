import React from "react"
import { graphql } from "gatsby"
import Home from "../components/Home"
import Layout from "../layouts"

const IndexPage = ({
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
    <Home data={data} lang="en" />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    heroImg: file(relativePath: { eq: "hero/khao-hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            slug
            title
            lang
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
    #
    bhavanaHouse: file(
      relativePath: { eq: "images/bhavana-house/bhavana-house-03.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
