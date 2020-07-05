import React from "react"
import { Link, graphql } from "gatsby"
import Hero from "../components/Hero"
import { Wrapper } from "../styles"
import Layout from "../layouts"
import SEO from "../components/Seo"
import Icon from "../components/Icon"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Hero title="hello" fluid={data.heroImg.childImageSharp.fluid} />
    <Wrapper>
      <section>
        <h6>Tune & Flying Home Studio</h6>
        <h2>
          Tune and his Flying Home Studio design both interior and exterior for
          modern, high quality, living and working spaces
        </h2>
      </section>
    </Wrapper>
    <Wrapper>
      <section>
        <h6>The Process</h6>
        <h2>
          We offer attention to detail every step of the way while making your
          dream become a reality
        </h2>
        <p>
          Services Breakdown <Icon name="arrow" />
        </p>
      </section>
    </Wrapper>

    <Wrapper>
      <section>
        <h6>Projects</h6>
        <h2>Current and past projects</h2>
      </section>
    </Wrapper>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    heroImg: file(relativePath: { eq: "hero/peace-hero.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
