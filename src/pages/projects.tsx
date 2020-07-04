import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { Grid } from "../styles"

const ProjectsPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            excerpt
            frontmatter {
              title
              slug
              # thumbnail {
              #   childImageSharp {
              #     fluid {
              #       ...GatsbyImageSharpFluid_withWebp
              #     }
              #   }
              # }
            }
          }
        }
      }
    }
  `)

  // TODO  map the projects and put them in a grid below
  const projects = allMarkdownRemark.edges
  console.log("PROJECTS", projects)

  return <div>PROJECTS PAGE</div>
}

export default ProjectsPage
