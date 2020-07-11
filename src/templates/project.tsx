import React from "react"
import { graphql, Link } from "gatsby"
import Hero from "../components/Hero"
import SEO from "../components/Seo"
import Layout from "../layouts"
import { Wrapper } from "../styles"

const ProjectTemplate = ({ data }) => {
  const { markdownRemark } = data

  return (
    <Layout>
      <SEO title={markdownRemark.frontmatter.title} />
      <Hero
        title={markdownRemark.frontmatter.title}
        fluid={markdownRemark.frontmatter.thumbnail.childImageSharp.fluid}
      />
      <Wrapper>
        <section>
          <div
            dangerouslySetInnerHTML={{
              __html: markdownRemark.html,
            }}
          />
          <div className="center-text top-padding">
            <Link to="/projects/">&#8592; All Projects</Link>
          </div>
        </section>
      </Wrapper>
    </Layout>
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
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`
