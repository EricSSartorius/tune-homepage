import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

import "../styles/styles.css"
import "react-multi-carousel/lib/styles.css"

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
