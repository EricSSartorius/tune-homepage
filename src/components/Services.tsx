import React, { Fragment } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { Wrapper, Cols } from "../styles"
import { english, thai } from "../translation/services.yml"

const Services = ({
  data,
  lang,
  pathname,
}: {
  data: {
    heroImg: {
      childImageSharp: {
        fluid: string
        fixed: {
          src: string
        }
      }
    }
  }
  lang: "en" | "th"
  pathname: string
}) => {
  const currentLanguage = lang === "th" ? thai : english
  return (
    <>
      <SEO
        title={currentLanguage.seo.title}
        description={currentLanguage.seo.description}
        lang={lang}
        pathname={pathname}
        image={data.heroImg.childImageSharp.fixed.src}
      />
      <HeroImg fluid={data.heroImg.childImageSharp.fluid} />
      <Wrapper>
        <section>
          <Cols isReverse>
            <h1 className={lang}>{currentLanguage.title}</h1>
            <div>
              {currentLanguage.services.map(({ title, items }) => (
                <Fragment key={title}>
                  <h3 className={lang}>{title}</h3>
                  {items && (
                    <ul>
                      {items.map(item => (
                        <li key={item} className={lang}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </Fragment>
              ))}
              <p className="margins">
                <em className={lang}>{currentLanguage.included}</em>
              </p>
              <p>
                <em className={lang}>{currentLanguage.notIncluded}</em>
              </p>
            </div>
          </Cols>
        </section>
      </Wrapper>
    </>
  )
}

export default Services

const HeroImg = styled(Img)`
  max-height: 30rem;
`
