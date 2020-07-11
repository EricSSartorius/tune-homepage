import React, { Fragment } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import Layout from "../layouts"
import SEO from "../components/seo"
import { Wrapper, Cols } from "../styles"

const ServicesPage: React.FC = ({ data }) => (
  <Layout>
    <SEO title="Services" />
    <HeroImg fluid={data.heroImg.childImageSharp.fluid} />
    <Wrapper>
      <section>
        <Cols isReverse>
          <h1>Breakdown of Architecture and Interior design services</h1>
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
          </div>
        </Cols>
      </section>
    </Wrapper>
  </Layout>
)

export default ServicesPage

const services = [
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

const HeroImg = styled(Img)`
  max-height: 30rem;
`

export const query = graphql`
  query {
    heroImg: file(relativePath: { eq: "hero/private-hero.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
