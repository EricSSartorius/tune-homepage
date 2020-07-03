import React from "react"
import styled from "styled-components"

type Props = {
  siteTitle: string
}

const Footer = ({ siteTitle }: Props) => (
  <FooterWrapper>
    © {new Date().getFullYear()}, {siteTitle}
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
