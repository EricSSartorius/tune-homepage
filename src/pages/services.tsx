import React, { Fragment, FC } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { Wrapper, Cols } from "../styles"
import { useLanguage } from "../global/language"
import { english, thai } from "../translation/services.yml"

const ServicesPage: FC = ({ data }) => {
  const { lang } = useLanguage()

  const currentLanguage = lang === "th" ? thai : english

  return (
    <>
      <SEO title="Services" />
      <HeroImg fluid={data.heroImg.childImageSharp.fluid} />
      <Wrapper>
        <section>
          <Cols isReverse>
            <h1>{currentLanguage.title}</h1>
            <div>
              {currentLanguage.services.map(({ title, items }) => (
                <Fragment key={title}>
                  <h3>{title}</h3>
                  {items && (
                    <ul>
                      {items.map(item => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </Fragment>
              ))}
              <p className="margins">
                <em>{currentLanguage.included}</em>
              </p>
              <p>
                <em>{currentLanguage.notIncluded}</em>
              </p>
            </div>
          </Cols>
        </section>
      </Wrapper>
    </>
  )
}

export default ServicesPage

const HeroImg = styled(Img)`
  max-height: 30rem;
`

export const query = graphql`
  query {
    heroImg: file(relativePath: { eq: "hero/private-hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
