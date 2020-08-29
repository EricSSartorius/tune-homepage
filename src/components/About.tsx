import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { Wrapper, Cols } from "../styles"
import { english, thai } from "../translation/about.yml"

const About = ({
  data,
  lang,
}: {
  data: {
    heroImg: {
      childImageSharp: {
        fluid: string
      }
    }
  }
  lang: "en" | "th"
}) => {
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

export default About

const HeroImg = styled(Img)`
  max-height: 30rem;
`
