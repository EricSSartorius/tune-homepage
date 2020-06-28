import React from "react"
import styled from "styled-components"

const Footer = () => (
  <FooterWrapper>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </FooterWrapper>
)

export default Footer

const FooterWrapper = styled.footer`
  background-color: pink;

  a {
    color: blue;
  }
`
