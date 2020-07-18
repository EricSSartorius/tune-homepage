import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../layouts"
import { Wrapper, Cols, Container } from "../styles"
import BackgroundImage from "gatsby-background-image"

const ProjectTemplate = ({ data }) => {
  const { markdownRemark } = data

  return (
    <Layout>
      <SEO title={markdownRemark.frontmatter.title} />

      <HeroBackgroundImage
        fluid={markdownRemark.frontmatter.hero.childImageSharp.fluid}
        alt={markdownRemark.frontmatter.title}
        Tag="div"
      >
        <div className={"white-text"}>
          <Wrapper>
            <HeroContents>
              <Container>
                <h1>{markdownRemark.frontmatter.title}</h1>
              </Container>
            </HeroContents>
          </Wrapper>
        </div>
      </HeroBackgroundImage>
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
            <p>
              <Link to="/projects/">&#8592; All Projects</Link>
            </p>
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
    font-size: var(--heading-three);
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

const HeroBackgroundImage = styled(BackgroundImage)``

export const HeroContents = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 15rem 0;
  h1 {
    margin: 0;
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
