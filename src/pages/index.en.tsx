import React from "react"
import { graphql } from "gatsby"
import Home from "../components/Home"
import Layout from "../layouts"

const IndexPage = ({
  data,
  location,
  pathname,
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
  <Layout lang="en" location={location}>
    <Home data={data} lang="en" pathname={location.pathname} />
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
        fixed {
          src
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
    moonRiverHouse: file(
      relativePath: { eq: "images/moon-river-house/moon-river-house-04.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
