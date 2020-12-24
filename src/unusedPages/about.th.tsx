import React from "react"
import { graphql } from "gatsby"
import About from "../components/About"
import Layout from "../layouts"

const AboutPageTH = ({
  // data,
  location,
}: {
  location: {
    pathname: string
  }
  // data: {
  //   heroImg: {
  //     childImageSharp: {
  //       fluid: string
  //     }
  //   }
  // }
}) => (
  <Layout lang="th" location={location}>
    {/* <About lang="th" data={data} pathname={location.pathname} /> */}
  </Layout>
)

export default AboutPageTH

// export const query = graphql`
//   query {
//     heroImg: file(relativePath: { eq: "hero/honeyful-hero.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 1440) {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//         fixed {
//           src
//         }
//       }
//     }
//   }
// `
