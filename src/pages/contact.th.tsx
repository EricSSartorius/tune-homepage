import React from "react"
import { graphql } from "gatsby"
import Contact from "../components/Contact"
import Layout from "../layouts"

const ContactPageTH = ({
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
  <Layout lang="th" location={location}>
    <Contact lang="th" data={data} />
  </Layout>
)

export default ContactPageTH

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
