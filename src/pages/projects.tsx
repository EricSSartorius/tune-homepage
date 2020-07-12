import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { Grid } from "../styles"
import Hero from "../components/Hero"
import Layout from "../layouts"
import SEO from "../components/seo"
import { Wrapper } from "../styles"

const ProjectsPage = ({ data }) => {
  // TODO
  //* add a layout component to wrap the page
  //* add the hero component (no need for an image yet)
  //* use wrapper around all the projects
  //* map the projects and put them in a grid below
  const projects = data.allMarkdownRemark.edges
  console.log("PROJECTS", projects)

  return (
    <Layout>
      <SEO title="Projects" />
      <HeroImg fluid={data.heroImg.childImageSharp.fluid} />
      <Wrapper>
        <section>
          <ProjectGrid cols={[1, 1, 2]}>
            {projects.map(({ node }) => (
              <div key={node.frontmatter.title}>
                <Link to={node.frontmatter.slug}>
                  <Img
                    fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
                    alt={node.frontmatter.title}
                  />
                  <p>{node.frontmatter.title}</p>
                </Link>
              </div>
            ))}
          </ProjectGrid>
        </section>
      </Wrapper>
    </Layout>
  )
}

export default ProjectsPage

const ProjectGrid = styled(Grid)``

const HeroImg = styled(Img)`
  max-height: 30rem;
`

export const query = graphql`
  query {
    heroImg: file(relativePath: { eq: "hero/private-hero.jpg" }) {
      childImageSharp {
        fluid {
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
