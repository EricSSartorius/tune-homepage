import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import Layout from "../layouts"
import SEO from "../components/Seo"
import Icon from "../components/Icon"
import { Wrapper } from "../styles"

const ContactPage: React.FC = ({ data }) => (
  <Layout>
    <SEO title="Contact" />
    <HeroImg fluid={data.heroImg.childImageSharp.fluid} />
    <Wrapper>
      <section>
        <h1>Contact</h1>
        <div>
          <p>
            <a href="mailto:iam@flyinghomestudio.com">
              iam@flyinghomestudio.com
            </a>
          </p>
          <div>
            <a href="tel:1-408-555-5555">
              <Icon name="fist" />
              <Icon name="fist" />
              1-408-555-5555
            </a>
          </div>
          <p>87 Chalermpong, Saimai Bangkok 10220 Thailand</p>
        </div>
      </section>
    </Wrapper>
  </Layout>
)

export default ContactPage

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
