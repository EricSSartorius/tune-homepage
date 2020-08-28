import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Icon from "./Icon"
import { below, Wrapper } from "../styles"
import LanguageSelector from "./LanguageSelector"
import { english, thai } from "../translation/_menu.yml"
import { useLanguage } from "../global/language"

const Footer = () => {
  const { lang } = useLanguage()
  const currentLanguage = lang === "th" ? thai : english

  const { logo } = useStaticQuery(
    graphql`
      query {
        logo: file(relativePath: { eq: "favicon.png" }) {
          childImageSharp {
            fixed(width: 100) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    `
  )

  const siteLinks = [
    {
      text: currentLanguage.menu.about,
      to: "/about/",
    },
    {
      text: currentLanguage.menu.services,
      to: "/services/",
    },
    {
      text: currentLanguage.menu.projects,
      to: "/projects/",
    },
    {
      text: currentLanguage.menu.contact,
      to: "/contact/",
    },
  ]

  return (
    <FooterWrapper>
      <Wrapper>
        <div className="footer-grid">
          <div className="footer-logo">
            <Img
              fixed={logo.childImageSharp.fixed}
              alt="Site logo"
              css={below.medium`margin-left: 5rem;`}
            />
            <h3 className="no-top-margin">
              Tune <span className="and">&</span>
              <br /> Flying home studio
            </h3>
          </div>
          <div className="footer-contact">
            <p className="no-top-margin">
              <a href="mailto:iam@flyinghomestudio.com">
                iam@flyinghomestudio.com
              </a>
            </p>
            <div>
              <Icon name="line" style={{ marginRight: "1rem" }} />
              + 088-694-4946
              <Icon name="phone" style={{ marginLeft: "1rem" }} />
            </div>
            <p className={lang}>
              {currentLanguage.address1}
              <br /> {currentLanguage.address2}
              <br /> {currentLanguage.address3}
            </p>
          </div>
          <nav className="footer-links">
            {siteLinks.map(({ text, to }) => (
              <p key={text} className={lang}>
                <Link to={to}>{text}</Link>
              </p>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Tune & Flying Home Studio</p>
          <div>
            <LanguageSelector />
            <p className="pure-func">
              Crafted by{" "}
              <a href="https://www.purefunc.dev/" target="_blank">
                <strong>Pure Func LLC</strong>
              </a>
            </p>
          </div>
        </div>
      </Wrapper>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  border-top: 1px solid var(--lineColor);
  .footer-grid {
    padding: var(--margins);
    /* display: flex;
    justify-content: space-between; */
    display: grid;
    align-items: flex-start;
    grid-template-columns: 25% 1fr 25%;
    .footer-logo {
      .and {
        font-size: var(--baseFontSize);
        font-weight: normal;
      }
    }
    .footer-contact {
      text-align: center;
    }
    .footer-links {
      justify-self: flex-end;
      /* display: grid;
      grid-template-columns: 1fr 50%; */
      p {
        margin: 1rem;
        a {
          font-weight: bold;
          font-size: var(--smallFontSize);
        }
      }
    }
  }
  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    p,
    p a {
      font-size: var(--smallestFontSize);
    }
  }
  ${below.medium`
    .footer-grid {
      grid-template-columns: 1fr;
      text-align: center;
      .footer-links {
        grid-row: 2;
        grid-template-columns: 1fr;
        justify-self: center;
        margin-bottom: 2rem;
        p {
          margin: 2rem 0;
          a {
          font-size: var(--largeFontSize);
        }}
      }
    }
    .footer-bottom {
      flex-direction: column;
      align-items: center;
      p {
        margin: 0;
      }
      .pure-func {
        margin: 1rem;
      }
    }
  `};
`

export default Footer
