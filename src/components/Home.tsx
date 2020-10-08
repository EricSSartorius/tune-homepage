import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { Waypoint } from "react-waypoint"
import { motion } from "framer-motion"
import { Wrapper, Grid, below, media } from "../styles"
import Carousel from "react-multi-carousel"
import SEO from "../components/seo"
import { english, thai } from "../translation/homepage.yml"

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const contactVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 100,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const Home = ({ data, lang }) => {
  const [rightImgShowing, setRightImgShowing] = useState(false)
  const [leftImgShowing, setLeftImgShowing] = useState(false)
  const [isContactShowing, setIsContactShowing] = useState(false)
  const { heroImg, allMarkdownRemark } = data
  const projects = allMarkdownRemark.edges

  const currentLanguage = lang === "th" ? thai : english

  return (
    <>
      <SEO lang={lang} title="Home" />
      <Img fluid={heroImg.childImageSharp.fluid} style={{ height: "100vh" }} />

      <Wrapper>
        <section>
          <motion.div
            animate={{
              opacity: leftImgShowing ? 1 : 0,
            }}
            transition={{ type: "spring", damping: 300 }}
          >
            <Waypoint
              bottomOffset="35%"
              onEnter={() => {
                if (!leftImgShowing) setLeftImgShowing(true)
              }}
            />
            <RotateGrid>
              <h3 className="rotate small-title" id="mission-title">
                Tune & <br />
                Flying Home Studio
              </h3>
              <div className="content">
                <p className={`huge ${lang}`}>{currentLanguage.mission}</p>
              </div>
            </RotateGrid>
          </motion.div>
        </section>
      </Wrapper>
      <Wrapper>
        <section>
          <Grid cols={[1, 1, 2]}>
            <motion.div
              animate={{
                opacity: rightImgShowing ? 1 : 0,
                x: rightImgShowing ? 0 : "-50%",
              }}
              transition={{ type: "spring", damping: 300 }}
            >
              <Waypoint
                bottomOffset="25%"
                onEnter={() => {
                  if (!rightImgShowing) setRightImgShowing(true)
                }}
              />
              <h3 className={`small-title ${lang}`}>
                {currentLanguage.process.title}
              </h3>
              <p className={`huge ${lang}`}>{currentLanguage.process.text}</p>
              <p>
                <Link
                  to={`${lang === "th" ? "/th" : ""}/services/`}
                  className={lang}
                >
                  {currentLanguage.servicesBreakdown} &#8594;
                </Link>
              </p>
            </motion.div>
            <motion.div
              animate={{
                opacity: rightImgShowing ? 1 : 0,
                x: rightImgShowing ? "15%" : "50%",
              }}
              transition={{ type: "spring", damping: 300 }}
            >
              <Waypoint
                bottomOffset="25%"
                onEnter={() => {
                  if (!rightImgShowing) setRightImgShowing(true)
                }}
              />
              <HomeImg
                fluid={data.moonRiverHouse.childImageSharp.fluid}
                alt="Moon River and Floating House"
              />
            </motion.div>
          </Grid>
        </section>
      </Wrapper>
      <section>
        <Wrapper>
          <RotateGrid>
            <h3
              className={`small-title rotate ${lang}`}
              style={{ marginTop: "30px" }}
            >
              {currentLanguage.projects}
            </h3>
            <div className="content">
              <p className={`huge ${lang}`}>{currentLanguage.galleryTitle}</p>
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
            centerMode={true}
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
              .filter(
                ({ node }) =>
                  node.frontmatter.thumbnail && node.frontmatter.lang === lang
              )
              .map(({ node }) => (
                <Slide key={node.frontmatter.slug}>
                  <Link to={node.frontmatter.slug}>
                    <div className="slide-img">
                      <Img
                        fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
                        alt={node.frontmatter.title}
                      />
                    </div>
                  </Link>
                  <p>{node.frontmatter.title}</p>
                </Slide>
              ))}
          </Carousel>
        </CarouselWrapper>
        <Wrapper>
          <LinkContainer style={{ textAlign: "right" }}>
            <p>
              <Link
                to={`${lang === "th" ? "/th" : ""}/projects/`}
                className={lang}
              >
                {currentLanguage.viewProjects} &#8594;
              </Link>
            </p>
          </LinkContainer>
        </Wrapper>
      </section>
      <Wrapper>
        <section className="center-text">
          <Waypoint
            bottomOffset="25%"
            onEnter={() => {
              if (!isContactShowing) setIsContactShowing(true)
            }}
          />
          <motion.div
            variants={variants}
            initial="closed"
            animate={isContactShowing ? "open" : "closed"}
            transition={{ damping: 300 }}
          >
            <motion.h2
              className={`no-to-margin ${lang}`}
              variants={contactVariants}
            >
              {currentLanguage.contact.text1}
            </motion.h2>
            <motion.h2
              className={`no-to-margin ${lang}`}
              variants={contactVariants}
            >
              {currentLanguage.contact.text2}
            </motion.h2>
            <motion.h2
              className={`no-to-margin ${lang}`}
              variants={contactVariants}
            >
              {currentLanguage.contact.text3}
            </motion.h2>

            <Contact
              className="margins"
              key="contact"
              variants={contactVariants}
            >
              <a href="mailto:iam@flyinghomestudio.com">
                iam@flyinghomestudio.com
              </a>
            </Contact>
          </motion.div>
        </section>
      </Wrapper>
    </>
  )
}

export default Home

const RotateGrid = styled.div`
  position: relative;
  ${media.small`
    .rotate {
      transform-origin: 50% 50%;
      align-self: center;
      transform: rotate(-90deg);
      position: absolute;
      margin: 0;
      left: 0;
    }
    #mission-title {
       margin: 80px 0 0 -60px;
    }
    .content {
      padding: 0 8rem;
    }
  `};
`

const LinkContainer = styled.div`
  ${below.medium`
    margin-top: 1rem;
  `}
`

const HomeImg = styled(Img)`
  width: 100%;
  height: 100%;
  ${media.medium`
  transform: translate3d(var(--basePadding), 0, 0);
  `}
`

const CarouselWrapper = styled.div`
  .react-multiple-carousel__arrow {
    z-index: 8;
  }
  li {
    overflow: hidden;
    position: relative;
  }
  ${below.medium`
    li {
      padding: 0;
    }
  `};
  ${media.medium`
    li {
      padding: 30px;

    }
    .react-multi-carousel-item {
      transition: 0.5s ease all;
      &.react-multi-carousel-item--active {
        transform: scale(1.1);
      }
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
  &.th {
    font-family: var(--thaiFont);
  }
  .gatsby-image-wrapper {
    transition: 0.5s ease all;
  }
  &:hover {
    .gatsby-image-wrapper {
      transform: scale(1.1);
    }
  }
`

const Contact = styled(motion.p)`
  a {
    font-size: var(--hugeFontSize);
    font-family: var(--headingFont);
    &.th {
      font-family: var(--thaiFont);
    }
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
