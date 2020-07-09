import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { Grid } from "../styles"
import Hero from "../components/Hero"
import Layout from "../layouts"
import SEO from "../components/Seo"
import { Wrapper } from "../styles"

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

  // TODO
  //* add a layout component to wrap the page
  //* add the hero component (no need for an image yet)
  //* use wrapper around all the projects
  //* map the projects and put them in a grid below
  const projects = allMarkdownRemark.edges
  console.log("PROJECTS", projects)

  return (
    <Layout>
      <SEO title="Projects" />
      {/* <HeroImg /> */}
      <Wrapper>
        <section>
          <Grid cols={[1, 1, 2]}>
            {projects.map(({ node }) => (
              <p>
                <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
              </p>
            ))}
          </Grid>
        </section>
      </Wrapper>
    </Layout>
  )
}

export default ProjectsPage
