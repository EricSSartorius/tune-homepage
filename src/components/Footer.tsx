import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Icon from "./Icon"
import { media, Wrapper, Flex } from "../styles"

const Footer = () => (
  <FooterWrapper>
    <Wrapper>
      <div className="footer-grid">
        <div>
          <h3 className="no-top-margin">Tune & his flying home studio</h3>
        </div>
        <div>
          <nav>
            <ul>
              {siteLinks.map(({ text, to }) => (
                <li key={text}>
                  <Link to={to}>{text}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div>
          <p className="no-top-margin">
            <a href="mailto:iam@flyinghomestudio.com">
              iam@flyinghomestudio.com
            </a>
          </p>
          <div>
            <a href="tel:1-408-555-5555">
              <Icon name="fist" />
              <Icon name="fist" />
              1-408-555-5555
            </a>
          </div>
          <p>87 Chalermpong, Saimai Bangkok 10220 Thailand</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="smallest">
          &copy; {new Date().getFullYear()} Tune and his Flying Home Studio
        </p>
      </div>
    </Wrapper>
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  .footer-grid {
    display: grid;
    align-items: flex-start;
    grid-template-columns: 15% 1fr 15%;
    nav {
      ul {
        display: flex;
        justify-content: space-evenly;
        li {
          margin: 0 1rem;
        }
      }
    }
  }
  .footer-bottom {
    text-align: center;
  }
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
