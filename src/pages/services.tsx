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

  const services = lang === "th" ? thaiServices : englishServices

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
              {services.map(({ title, items }) => (
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
                <em>*included: Structural engineer</em>
              </p>
              <p>
                <em>
                  {lang === "th"
                    ? "poo"
                    : `**not included: Permit Drawing Architect fee, Electrical
                  engineer, Sanitary engineer, Land Survey, Landscape Design`}
                </em>
              </p>
            </div>
          </Cols>
        </section>
      </Wrapper>
    </>
  )
}

export default ServicesPage

const englishServices = [
  {
    title: "Conceptual Design",
    items: ["Layout (basic schematic drawing)", "3 or 4 Conceptual Renderings"],
  },
  {
    title: "Design Development",
    items: [
      "Schematic drawing and lighting plan",
      "Elevations and Sections",
      "Updated Renderings",
    ],
  },
  {
    title:
      "Construction Drawing 1 - Permit Drawing (Architecture) and Tender Drawing",
    items: [
      "Tender Package including (Interior Plans, Elevations, Sections, Structural Section)",
      "Permit Drawing",
    ],
  },
  {
    title: "Construction Drawing 2 - Tender Drawing",
    items: [
      "Complete drawing including finishing (floor, ceiling), and lighting plan",
      "Complete drawing including finishing (wall), and lighting elevation",
      "Loose Furniture Recommendations",
    ],
  },
  {
    title: "Construction Period",
  },
  {
    title: "Project Handover",
    items: [
      "Assist the Client to oversee the quality of work done by the Contractor",
    ],
  },
]

const thaiServices = [
  {
    title: "Cpoo",
    items: ["Cpoo"],
  },
  {
    title: "Cpoo",
    items: ["Cpoo", "Cpoo"],
  },
  {
    title: "Cpoo",
    items: [
      "Tender Package including (Interior Plans, Elevations, Sections, Structural Section)",
      "Permit Drawing",
    ],
  },
  {
    title: "Construction Drawing 2 - Tender Drawing",
    items: [
      "Complete drawing including finishing (floor, ceiling), and lighting plan",
      "Complete drawing including finishing (wall), and lighting elevation",
      "Loose Furniture Recommendations",
    ],
  },
  {
    title: "Construction Period",
  },
  {
    title: "Project Handover",
    items: [
      "Assist the Client to oversee the quality of work done by the Contractor",
    ],
  },
]

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
