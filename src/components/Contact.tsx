import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Icon from "../components/Icon"
import { Wrapper, below, Cols } from "../styles"
import { english, thai } from "../translation/contact.yml"

const Contact = ({
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
        title="Contact"
        description="Get in touch with Tune & Flying Home Studio"
        lang={lang}
        pathname={pathname}
        image={data.heroImg.childImageSharp.fixed.src}
      />
      <HeroImg fluid={data.heroImg.childImageSharp.fluid} />
      <Wrapper>
        <section>
          <Cols isReverse>
            <div>
              <h1 className={lang}>{currentLanguage.workTogether}</h1>
            </div>
            <div>
              <h4 className={`small-title ${lang}`}>
                {currentLanguage.inquiries}
              </h4>
              <Email>
                <a
                  className="email-link"
                  href="mailto:iam@flyinghomestudio.com"
                >
                  iam@flyinghomestudio.com
                </a>
              </Email>
              <div>
                <p className="large">
                  <Icon name="phone" style={{ marginRight: "1rem" }} />+
                  088-694-4946
                </p>
                <p className="large">
                  <Icon name="line" style={{ marginRight: "1rem" }} />+
                  088-694-4946
                </p>
              </div>
              <p className={`large ${lang}`}>
                {currentLanguage.address1}
                <br /> {currentLanguage.address2}
                <br /> {currentLanguage.address3}
              </p>
            </div>
          </Cols>
        </section>
      </Wrapper>
    </>
  )
}

export default Contact

const HeroImg = styled(Img)`
  max-height: 30rem;
`

const Email = styled.p`
  .email-link {
    font-size: var(--heading-two);
  }
  ${below.medium`
    .email-link {
      font-size: var(--heading-five);
    }
  `};
`
