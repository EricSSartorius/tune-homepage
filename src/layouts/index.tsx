import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ContextProvider } from "../global/state"

import Header from "../components/Header"
import Footer from "../components/Footer"

import "../styles/vars.css"
import "../styles/reset.css"
import "../styles/global.css"
import "../styles/classes.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ContextProvider>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </ContextProvider>
  )
}

export default Layout
