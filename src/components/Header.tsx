import { Link } from "gatsby"
import styled from "styled-components"
import React from "react"
import { sizes } from "../styles/breakpoints"

type Props = {
  siteTitle: string
}

const links = [
  {
    link: "/projects/",
    title: "Projects",
  },
  {
    link: "/about/",
    title: "About",
  },
  {
    link: "/contact/",
    title: "Contact",
  },
]

const Header = ({ siteTitle }: Props) => (
  <>
    <HeaderWrapper>
      <InnerHeader>
        <h1 className="logo">
          <Link to="/">{siteTitle}</Link>
        </h1>
        <nav>
          <ul>
            {links.map(({ link, title }) => (
              <li key={title}>
                <Link to={link}>{title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </InnerHeader>
    </HeaderWrapper>
  </>
)

export default Header

const HeaderWrapper = styled.header`
  top: -1px;
  width: 100%;
  height: 110px;
  background: var(--white);
  z-index: var(--headerLevel);
  position: sticky;
`

const InnerHeader = styled.div`
  color: white;
  position: relative;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--basePadding);
  max-width: ${sizes.xLarge / 16}em;
  margin: auto;
  display: flex;
  height: 70px;
  a {
    color: var(--primaryColor);
  }
  nav ul {
    display: flex;
    li {
      margin-left: var(--smallBaseMargin);
    }
  }
  .logo {
    font-size: var(--baseFontSize);
    margin: 0;
  }
`
