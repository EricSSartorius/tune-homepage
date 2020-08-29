import React from "react"
import { graphql } from "gatsby"
import Contact from "../components/Contact"
import Layout from "../layouts"

const ContactPage = ({
  data,
  location,
}: {
  location: object
  data: {
    heroImg: {
      childImageSharp: {
        fluid: string
      }
    }
  }
}) => (
  <Layout lang="en" location={location}>
    <Contact lang="en" data={data} />
  </Layout>
)

export default ContactPage

export const query = graphql`
  query {
    heroImg: file(relativePath: { eq: "hero/yutaro-hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
