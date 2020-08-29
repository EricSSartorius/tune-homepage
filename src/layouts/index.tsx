import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

import "../styles/vars.css"
import "../styles/reset.css"
import "../styles/global.css"
import "../styles/classes.css"

const Layout = ({ children, location, lang }) => {
  return (
    <>
      <Header location={location} lang={lang} />
      <main>{children}</main>
      <Footer location={location} lang={lang} />
    </>
  )
}

export default Layout
