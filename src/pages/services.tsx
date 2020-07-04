import React from "react"
import Layout from "../layouts"
import SEO from "../components/Seo"
import Hero from "../components/Hero"
import { Wrapper } from "../styles"

const ServicesPage: React.FC = () => (
  <Layout>
    <SEO title="Services" />
    <Hero title="Services" />
    <Wrapper>
      <section>
        {services.map(({ title, items }) => (
          <>
            <h3>{title}</h3>
            <ul>
              {items.map(item => (
                <li>{item}</li>
              ))}
            </ul>
          </>
        ))}
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
  { title: "Service 2", items: ["cool", "awesome", "dope"] },
]

// TODO: Add these below to the services array to get the page populated properly

/* Design Development - Schematic drawing and lighting plan -
Elevations and Sections - Updated Renderings Construction Drawing 1 -
Permit Drawing (Architecture) and Tender Drawing - Tender Package
including (Interior Plans, Elevations, Sections, Structural Section) -
Permit Drawing Construction Drawing 2 - Tender Drawing - Complete drawing
including finishing (floor, ceiling), and lighting plan - Complete drawing
including finishing (wall), and lighting elevation - Loose Furniture
Recommendations Construction Drawing 3 - Detail - Construction Drawing
including (Interior Plans, Elevations, Sections, Detail Drawing) - Loose
Furniture Recommendations - Built-in Furniture Drawings Construction
Period Project Handover - Assist the Client to oversee the quality of work
done by the Contractor. */
