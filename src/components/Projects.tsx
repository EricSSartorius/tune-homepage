import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { Grid } from "../styles"
import SEO from "../components/seo"
import { Wrapper } from "../styles"

const Projects = ({ data, lang }) => {
  const projects = data.allMarkdownRemark.edges

  return (
    <>
      <SEO
        title="Projects"
        description="A collection of past and current projects from both Tune & Flying Home Studio"
        lang={lang}
      />
      <HeroImg fluid={data.heroImg.childImageSharp.fluid} />
      <Wrapper>
        <section className="margins">
          <ProjectGrid cols={[1, 1, 2]}>
            {projects
              .filter(({ node }) => node.frontmatter.lang === lang)
              .map(({ node }) => (
                <div className="project" key={node.frontmatter.title}>
                  <Link to={node.frontmatter.slug}>
                    <div className="project-image">
                      <Img
                        fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
                        alt={node.frontmatter.title}
                      />
                    </div>
                    <h3 className="project-title">{node.frontmatter.title}</h3>
                  </Link>
                </div>
              ))}
          </ProjectGrid>
        </section>
      </Wrapper>
    </>
  )
}

export default Projects

const ProjectGrid = styled(Grid)`
  .project {
    position: relative;
    .project-image {
      line-height: 0;
      overflow: hidden;
      .gatsby-image-wrapper {
        transition: 0.5s ease all;
      }
    }
    .project-title {
      z-index: 1;
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      margin: 0;
      left: 0;
      opacity: 0;
      transition: opacity 0.5s ease;
      background: rgba(0, 0, 0, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--white);
    }
    &:hover {
      .project-title {
        opacity: 1;
      }
      .project-image .gatsby-image-wrapper {
        filter: blur(2px);
        transform: scale(1.1);
      }
    }
    @media (hover: none) {
      .project-title {
        opacity: 1;
      }
      .project-image .gatsby-image-wrapper {
        filter: blur(2px);
      }
    }
  }
`

const HeroImg = styled(Img)`
  max-height: 30rem;
`
