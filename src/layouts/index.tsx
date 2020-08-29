import React from "react"
import { LanguageProvider } from "../global/language"

import Header from "../components/Header"
import Footer from "../components/Footer"

import "../styles/vars.css"
import "../styles/reset.css"
import "../styles/global.css"
import "../styles/classes.css"

const Layout = ({ children }) => {
  return (
    <LanguageProvider>
      <Header />
      <main>{children}</main>
      <Footer />
    </LanguageProvider>
  )
}

export default Layout
