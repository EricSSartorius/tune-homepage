import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import Hero from "../components/Hero"
import SEO from "../components/seo"
import Layout from "../layouts"
import { Wrapper, Cols } from "../styles"

const ProjectTemplate = ({ data }) => {
  const { markdownRemark } = data

  return (
    <Layout>
      <SEO title={markdownRemark.frontmatter.title} />
      <Hero
        title={markdownRemark.frontmatter.title}
        fluid={markdownRemark.frontmatter.hero.childImageSharp.fluid}
      />
      <Wrapper>
        <section>
          <Cols>
            <ProjectHTML
              dangerouslySetInnerHTML={{
                __html: markdownRemark.html,
              }}
            />
          </Cols>
          <div className="center-text top-padding">
            <Link to="/projects/">&#8592; All Projects</Link>
          </div>
        </section>
      </Wrapper>
    </Layout>
  )
}

export default ProjectTemplate

const ProjectHTML = styled.div`
  p,
  p a {
    font-size: var(--hugeFontSize);
    margin: 4rem 0;
    font-family: var(--headingFont);
  }

  h3 {
    font-family: var(--bodyFont);
    font-weight: normal;
  }
  h4 {
    font-family: var(--bodyFont);

    font-weight: bold;
    font-size: var(--baseFontSize);
    margin: 2rem 0;
  }
`

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
        description
        hero {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`
