import React, { FC } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { Wrapper, Cols } from "../styles"
import { useLanguage } from "../global/language"
import { english, thai } from "../translation/about.yml"

const AboutPage: FC = ({ data }) => {
  const { lang } = useLanguage()

  const currentLanguage = lang === "th" ? thai : english

  return (
    <>
      <SEO
        title="About"
        description="About Tune & Flying Home Studio"
        lang={lang}
      />
      <HeroImg fluid={data.heroImg.childImageSharp.fluid} />
      <Wrapper>
        <section>
          <Cols isReverse>
            <h1 className={lang}>{currentLanguage.title}</h1>
            <div style={{ marginTop: "var(--baseMargin)" }}>
              <p>Coming Soon</p>
            </div>
          </Cols>
        </section>
      </Wrapper>
    </>
  )
}

export default AboutPage

const HeroImg = styled(Img)`
  max-height: 30rem;
`

export const query = graphql`
  query {
    heroImg: file(relativePath: { eq: "hero/honeyful-hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
