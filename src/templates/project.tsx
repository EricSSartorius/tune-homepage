import React, { useState } from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import Carousel from "react-multi-carousel"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { Wrapper, Cols, below, media } from "../styles"
import LanguageSelector from "../components/LanguageSelector"
import Modal from "../components/Modal"

import "react-multi-carousel/lib/styles.css"

const ProjectTemplate = ({ data, location }) => {
  const { markdownRemark } = data
  const [isImageModalShowing, setIsImageModalShowing] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)

  return (
    <>
      <SEO title={markdownRemark.frontmatter.title} />
      <HeroImg
        fluid={markdownRemark.frontmatter.hero.childImageSharp.fluid}
        alt={markdownRemark.frontmatter.title}
      />

      <Wrapper>
        <section>
          <Cols>
            <div css={below.medium`grid-row: 2;`}>
              <h1 className={location.pathname.includes("/th") ? "th" : ""}>
                {markdownRemark.frontmatter.title}
              </h1>
              <h4
                className={`no-top-margin ${
                  location.pathname.includes("/th") ? "th" : ""
                }`}
              >
                {markdownRemark.frontmatter.description}
              </h4>
              <ProjectHTML
                isThai={location.pathname.includes("/th")}
                dangerouslySetInnerHTML={{
                  __html: markdownRemark.html,
                }}
              />
            </div>
            <aside>
              <LanguageSelector />
            </aside>
          </Cols>

          {markdownRemark.frontmatter.images && (
            <CarouselWrapper>
              <Carousel
                swipeable={false}
                draggable={false}
                // showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={false}
                // autoPlay={deviceType !== "mobile" ? true : false}
                // autoPlaySpeed={5000}
                centerMode={true}
                keyBoardControl={true}
                // customTransition="all .5"
                // transitionDuration={900}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={deviceType}
                // dotListClass="dot-list"
                itemClass="carousel-item-padding-40-px"
              >
                {markdownRemark.frontmatter.images.map((image, i) => (
                  <>
                    <Slide
                      key={"image" + i}
                      onClick={() => {
                        setImageIndex(i)
                        setIsImageModalShowing(true)
                      }}
                    >
                      <div className="slide-img">
                        <Img fluid={image.childImageSharp.fluid} />
                      </div>
                    </Slide>
                  </>
                ))}
              </Carousel>
            </CarouselWrapper>
          )}
          <div className="center-text top-padding">
            <p>
              <Link to="/projects/">&#8592; All Projects</Link>
            </p>
          </div>
        </section>
        {markdownRemark.frontmatter.images && (
          <Modal
            isActive={isImageModalShowing}
            closeAction={() => setIsImageModalShowing(false)}
          >
            <Img
              fluid={
                markdownRemark.frontmatter.images[imageIndex].childImageSharp
                  .fluid
              }
            />
          </Modal>
        )}
      </Wrapper>
    </>
  )
}

export default ProjectTemplate

const ProjectHTML = styled.div`
  p,
  p a {
    font-size: var(--largeFontSize);
    margin: 4rem 0;
  }
`

const HeroImg = styled(Img)`
  height: 60vh;
`

export const HeroContents = styled.div`
  display: flex;
  padding: 15rem 0;
  h1 {
    margin: 0;
  }
`

const Slide = styled.div`
  cursor: pointer;
`

const CarouselWrapper = styled.div`
  .react-multiple-carousel__arrow {
    z-index: 8;
  }
  li {
    overflow: hidden;
    position: relative;
  }
  .react-multi-carousel-dot button {
    height: 1.8rem;
    width: 1.8rem;
    border-color: var(--textColor);
  }

  .react-multi-carousel-dot--active button {
    background: var(--textColor);
  }

  ${below.medium`
    li {
      padding: 0;
    }
  `};
  ${media.medium`
    li {
      padding: 10px;
    }
  `};
`

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
        description
        hero {
          childImageSharp {
            fluid(maxWidth: 1440, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        images {
          childImageSharp {
            fluid(maxWidth: 1440, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
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
