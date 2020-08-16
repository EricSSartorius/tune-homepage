import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { Wrapper, Cols, below } from "../styles"
import { useLanguage } from "../global/language"

const ProjectTemplate = ({ data }) => {
  const { isThai, setIsThai } = useLanguage()
  const { markdownRemark } = data

  return (
    <>
      <SEO title={markdownRemark.frontmatter.title} />
      <HeroImg
        fluid={markdownRemark.frontmatter.hero.childImageSharp.fluid}
        alt={markdownRemark.frontmatter.title}
      />

      <Wrapper>
        <section>
          <Cols>
            <div css={below.medium`grid-row: 2;`}>
              <h1>{markdownRemark.frontmatter.title}</h1>
              <h4 className="no-top-margin">
                {markdownRemark.frontmatter.description}
              </h4>
              <ProjectHTML
                dangerouslySetInnerHTML={{
                  __html: markdownRemark.html,
                }}
              />
            </div>
            <aside>
              <Language>
                <span
                  onClick={() => setIsThai(false)}
                  className={`lang ${!isThai ? "active" : ""}`}
                >
                  EN
                </span>
                <span>|</span>
                <span
                  onClick={() => setIsThai(true)}
                  className={`lang ${isThai ? "active" : ""}`}
                >
                  TH
                </span>
              </Language>
            </aside>
          </Cols>
          <div className="center-text top-padding">
            <p>
              <Link to="/projects/">&#8592; All Projects</Link>
            </p>
          </div>
        </section>
      </Wrapper>
    </>
  )
}

export default ProjectTemplate

const ProjectHTML = styled.div`
  p,
  p a {
    font-size: var(--largeFontSize);
    margin: 4rem 0;
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

const HeroImg = styled(Img)`
  height: 30vh;
`

export const HeroContents = styled.div`
  display: flex;
  padding: 15rem 0;
  h1 {
    margin: 0;
  }
`

const Language = styled.p`
  text-align: right;
  span + span {
    margin-left: 2rem;
  }

  .lang {
    cursor: pointer;
    opacity: 0.7;
    transition: 0.3s ease all;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    font-weight: 700;
    opacity: 1;
  }
  ${below.medium`
    text-align: center;
    padding: 2rem 0 1rem;
  `};
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
            fluid(maxWidth: 1440, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
