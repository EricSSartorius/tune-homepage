import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Layout from "../layouts"

const ProjectsPage = ({
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
    <Projects data={data} lang="en" />
  </Layout>
)

export default ProjectsPage

export const query = graphql`
  query {
    heroImg: file(relativePath: { eq: "hero/private-hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
            lang
            isPersonalProject
            thumbnail {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
