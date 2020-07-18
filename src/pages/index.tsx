import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import Hero from "../components/Hero"
import { Wrapper, Grid, below, media } from "../styles"
import Layout from "../layouts"
import Carousel from "react-multi-carousel"
import SEO from "../components/seo"
import "react-multi-carousel/lib/styles.css"

const IndexPage = ({ data }) => {
  const { heroImg, allMarkdownRemark } = data
  const projects = allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        // title="Need to put something dope here perhaps"
        fluid={heroImg.childImageSharp.fluid}
        position="top -20px  center"
        height="100vh"
      />
      <Wrapper>
        <section>
          <RotateGrid>
            <h3
              className="rotate small-title"
              style={{ margin: "80px 0 0 -60px" }}
            >
              Tune & <br />
              Flying Home Studio
            </h3>
            <div className="content">
              <p className="huge">
                Tune and his Flying Home Studio design both interior and
                exterior for modern, high quality, living and working spaces
              </p>
            </div>
          </RotateGrid>
        </section>
      </Wrapper>
      <Wrapper>
        <section>
          <Grid cols={[1, 1, 2]}>
            <div>
              <h3 className="small-title">The Process</h3>
              <p className="huge">
                We offer attention to detail every step of the way while making
                your dream become a reality
              </p>
              <p>
                <Link to="/services/">Services Breakdown &#8594;</Link>
              </p>
            </div>
            <div>
              <HomeImg
                fluid={data.bhavanaHouse.childImageSharp.fluid}
                alt="Bhavana house"
              />
            </div>
          </Grid>
        </section>
      </Wrapper>
      <section>
        <Wrapper>
          <RotateGrid>
            <h3 className="small-title rotate" style={{ marginTop: "30px" }}>
              Projects
            </h3>
            <div className="content">
              <p className="huge">The dope places I made</p>
            </div>
          </RotateGrid>
        </Wrapper>

        <CarouselWrapper>
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            // autoPlay={deviceType !== "mobile" ? true : false}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            // customTransition="all .5"
            transitionDuration={900}
            containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={deviceType}
            // dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {projects
              .filter(project => project.node.frontmatter.thumbnail)
              .map(({ node }) => (
                <Slide key={node.frontmatter.slug}>
                  <Link to={node.frontmatter.slug}>
                    <Img
                      fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
                      alt={node.frontmatter.title}
                    />
                  </Link>
                  <p>{node.frontmatter.title}</p>
                </Slide>
              ))}
          </Carousel>
        </CarouselWrapper>
        <Wrapper>
          <div className="top-padding" style={{ textAlign: "right" }}>
            <Link to="/projects/">View All Projects &#8594;</Link>
          </div>
        </Wrapper>
      </section>
      {/* <BackgroundImage fluid={data.contactBanner.childImageSharp.fluid}> */}
      <Wrapper>
        <section className="center-text">
          <div>
            <h2>Have a project in mind?</h2>
            <h2 className="no-top-margin">
              Need help bringing it to the world?
            </h2>
            <h2 className="no-top-margin"> We’d love to hear from you.</h2>
          </div>

          <Contact className="margins">
            <a href="mailto:iam@flyinghomestudio.com">
              iam@flyinghomestudio.com
            </a>
          </Contact>
        </section>
      </Wrapper>
      {/* </BackgroundImage> */}
    </Layout>
  )
}

export default IndexPage

const RotateGrid = styled.div`
  /* display: grid;
  grid-template-columns: 100px 1fr 100px; */
  position: relative;
  .rotate {
    transform-origin: 50% 50%;
    align-self: center;
    /* white-space: nowrap; */
    transform: rotate(-90deg);
    position: absolute;
    margin: 0;
    left: 0;
  }
  .content {
    padding: 0 8rem;
  }
`

const HomeImg = styled(Img)`
  width: 100%;
  height: 100%;
  ${media.medium`
  transform: translate3d(var(--basePadding), 0, 0);
  `}
`

const CarouselWrapper = styled.div`
  li {
    padding: 10px;
    overflow: hidden;
    position: relative;
    /* height: 40rem; */
  }

  ${below.medium`
    li {
      padding: 0;
    }
  `};
`

const Slide = styled.div`
  position: relative;
  overflow: hidden;
  transition: 0.5s ease all;
  p {
    transition: 0.5s ease all;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 2rem;
    color: var(--white);
    z-index: 1000;
    font-family: var(--headingFont);
    font-size: var(--largeFontSize);
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
    margin: 0;
  }
  &:hover {
    transform: scale(1.1);
    p {
      transform: translate3d(10px, 0, 0);
    }
  }
`

const Contact = styled.p`
  a {
    font-size: var(--hugeFontSize);
    font-family: var(--headingFont);
    font-weight: bold;
    ${below.medium`
      font-size: var(--largeFontSize);
      color: var(--primaryColor);
    `};
  }
`

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
}

export const query = graphql`
  query {
    heroImg: file(relativePath: { eq: "hero/khao-hero.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            slug
            title
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
        }
      }
    }
    #
    bhavanaHouse: file(
      relativePath: { eq: "images/bhavana-house/bhavana-house-03.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    contactBanner: file(relativePath: { eq: "hero/yutaro-hero.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
