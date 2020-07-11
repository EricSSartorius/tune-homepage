import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Icon from "./Icon"
import { below, Wrapper } from "../styles"

const Footer = () => (
  <FooterWrapper>
    <Wrapper>
      <div className="footer-grid">
        <div>
          <h3 className="no-top-margin">Tune & his flying home studio</h3>
        </div>
        <div className="footer-contact">
          <p className="no-top-margin">
            <a href="mailto:iam@flyinghomestudio.com">
              iam@flyinghomestudio.com
            </a>
          </p>
          <div>
            <a href="tel:1-408-555-5555">
              <Icon name="line" style={{ marginRight: "1rem" }} />
              1-408-555-5555
              <Icon name="phone" style={{ marginLeft: "1rem" }} />
            </a>
          </div>
          <p>87 Chalermpong, Saimai Bangkok 10220 Thailand</p>
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
        <p>&copy; {new Date().getFullYear()} Tune and his Flying Home Studio</p>
      </div>
    </Wrapper>
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  border-top: 1px solid var(--lineColor);
  .footer-grid {
    padding: var(--margins);
    display: grid;
    align-items: flex-start;
    grid-template-columns: 15% 1fr 15%;
    .footer-contact {
      text-align: center;
    }
    .footer-links {
      justify-self: flex-end;
      display: grid;
      grid-template-columns: 1fr 50%;
      p {
        margin: 1rem;
        a {
          font-size: var(--smallFontSize);
        }
      }
    }
  }
  .footer-bottom {
    p {
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
        margin: 2rem 0;
      }
    }
    .footer-bottom {
      text-align: center;
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
