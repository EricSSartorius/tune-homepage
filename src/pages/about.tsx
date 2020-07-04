import React from "react"
import Layout from "../layouts"
import SEO from "../components/Seo"
import Hero from "../components/Hero"
import Icon from "../components/Icon"
import { Wrapper } from "../styles"

const AboutPage: React.FC = () => (
  <Layout>
    <SEO title="About" />
    <Hero title="About" />
    <Wrapper>
      <section>
        <p>about info here</p>
      </section>
    </Wrapper>
  </Layout>
)

export default AboutPage
