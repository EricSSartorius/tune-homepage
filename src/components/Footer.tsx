import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Icon from "./Icon"
import { below, Wrapper } from "../styles"

const Footer = () => {
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
  return (
    <FooterWrapper>
      <Wrapper>
        <div className="footer-grid">
          <div className="footer-logo">
            <h3 className="no-top-margin">
              Tune <br />
              <span className="and">and his</span>
              <br /> flying home studio
            </h3>
            <Img
              fixed={logo.childImageSharp.fixed}
              alt="Site logo"
              style={{ marginLeft: "5rem" }}
            />
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
            <p>
              87 Chalermpong, Saimai
              <br /> Bangkok 10220
              <br /> Thailand
            </p>
          </div>
          <nav className="footer-links">
            {siteLinks.map(({ text, to }) => (
              <p key={text}>
                <Link to={to}>{text}</Link>
              </p>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Tune and his Flying Home Studio
          </p>
          <p className="pure-func">
            Created by{" "}
            <a href="https://www.purefunc.dev/" target="_blank">
              <strong>Pure Func LLC</strong>
            </a>
          </p>
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

const siteLinks = [
  {
    text: "About",
    to: "/about/",
  },
  {
    text: "Services",
    to: "/services/",
  },
  {
    text: "Projects",
    to: "/projects/",
  },
  {
    text: "Contact",
    to: "/contact/",
  },
]
