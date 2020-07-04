import React from "react"
import Layout from "../layouts"
import SEO from "../components/Seo"
import Hero from "../components/Hero"
import Icon from "../components/Icon"
import { Wrapper } from "../styles"

const ContactPage: React.FC = () => (
  <Layout>
    <SEO title="Contact" />
    <Hero title="Contact" />
    <Wrapper>
      <section>
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
