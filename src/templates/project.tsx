import React from "react"
import { graphql, Link } from "gatsby"
import Hero from "../components/Hero"
import Icon from "../components/Icon"
import SEO from "../components/Seo"
import { Wrapper } from "../styles"

const ProjectTemplate = ({ data }) => {
  const { markdownRemark } = data

  return (
    <>
      <SEO title={markdownRemark.frontmatter.title} />
      <Hero title={markdownRemark.frontmatter.title} />
      <Wrapper>
        <section>
          <div
            dangerouslySetInnerHTML={{
              __html: markdownRemark.html,
            }}
          />
          <Link to="/projects/">
            <Icon name="arrow" /> All Projects
          </Link>
        </section>
      </Wrapper>
    </>
  )
}

export default ProjectTemplate

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
        description
      }
    }
  }
`
