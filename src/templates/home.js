import React from "react";
import * as PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO/SEO";
import Testimonials from "../components/Testimonials";
import Slider from "../components/Slider";
import Features from "../components/Features";
import Content, { HTMLContent } from "../components/Content";
import iconLinks from "../data/artworksMenu";
import select from "../components/utils";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import SubscribeForm from "../components/SubscribeForm";
import Instagram from "../components/Instagram.js";
import FollowUs from '../components/FollowUs'
import { navigate } from "gatsby";
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import logo from "../img/logo.png";
import { FaAudioDescription } from "react-icons/fa";

const HomePageTemplate = ({
  imageCardSL,
  image,
  heading,
  display,
  array,
  mainpitch,
  linkinsta,
  instagram,
  description,
  intro,
  main,
  alt,
  testimonials,
  title,
  content,
  contentComponent,
  masonry,
  firstLink,
  secondLink,
  thirdLink,
  fourthLink,
  tags,
  langKey,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
          backgroundPosition: `top left`,
          height: `520px`,
        }}
      >
        <div className="cover-text animated bounceInRight">
          <h2 className="is-size-5-mobile animated bounceInRight">{heading}</h2>
          <h1 className="is-size-5-mobile animated bounceInRight">{title}</h1>
          <button
            onClick={() => {
              navigate("about");
            }}
          >
            ABOUT
          </button>
          <button
            onClick={() => {
              navigate("services");
            }}
          >
            CHOSE YOUR PACKAGE
          </button>
        </div>
      </div>

      <section className="section full-width-text">
        <div className="columns">
          <div className="column is-8 is-offset-1">
            <h2 className="has-text-weight-semibold">{mainpitch.title}</h2>
            <h4>{mainpitch.heading}</h4>
            <p>{mainpitch.description}</p>
          </div>
          <div className="column is-2">
            <img src={logo} alt="fengshui" />
          </div>
        </div>
      </section>
      <section>
        <div className="column is-10 is-offset-1">
          <div className="columns">
            <div className="column is-12 has-text-centered"></div>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="column is-10 is-offset-1">
          <div className="tile is-ancestor">
            <div className="tile is-vertical">
              <div className="tile">
                <div className="tile is-parent is-vertical">
                  <article className="tile is-child">
                    <h3>{main.heading}</h3>
                    <PageContent className="content" content={content} />
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child">
                    <PreviewCompatibleImage imageInfo={main.image1} />
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
      <div className="columns">
      <div className="column is-4">
          <img src={img1}/>
    </div>
    <div className="column is-4">
          <img src={img2}/>
    </div>
    <div className="column is-4">
          <img src={img3}/>

    </div>
        </div>
      </section>
      <section className="wps">
        <div className="column is-10 is-offset-1">
          <h3>{mainpitch.subheading}</h3>
          <Testimonials testimonials={testimonials} image={image} />
        </div>
      </section>
      <section>
        <Instagram />
      </section>
    </div>
  );
};

HomePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  tags: PropTypes.array,
  blurbs: PropTypes.array,
  langKey: PropTypes.string,
  description: PropTypes.string,
};

class HomePage extends React.Component {
  render() {
    let data;
    let dataMarkdown = [];
    if (this.props.data !== null) {
      dataMarkdown = this.props.data.markdownRemark;
      data = this.props.data;
    }
    const jsonData = data.allArticlesJson.edges[0].node.articles;
    const langKey = dataMarkdown.frontmatter.lang;
    const { frontmatter } = data.markdownRemark;
    const { display } = frontmatter.slider;
    const { array } = frontmatter.slider;
    const sel = select(langKey);
    const image = frontmatter.image.childImageSharp.fluid.src;
    const tags = frontmatter.tags;

    return (
      <Layout
        className="content"
        data={this.props.data}
        jsonData={jsonData}
        location={this.props.location}
      >
        <SEO frontmatter={frontmatter} postImage={image} />
        <div>
          <HomePageTemplate
            imageCardSL={dataMarkdown.frontmatter.imageCardSL}
            image={dataMarkdown.frontmatter.image}
            heading={dataMarkdown.frontmatter.heading}
            display={display}
            array={array}
            mainpitch={dataMarkdown.frontmatter.mainpitch}
            main={dataMarkdown.frontmatter.main}
            testimonials={dataMarkdown.frontmatter.testimonials}
            contentComponent={HTMLContent}
            title={dataMarkdown.frontmatter.title}
            content={dataMarkdown.html}
            firstLink={iconLinks.painting[sel]}
            secondLink={iconLinks.sculpture[sel]}
            thirdLink={iconLinks.performance[sel]}
            fourthLink={iconLinks.interactivity[sel]}
            tags={tags}
            langKey={langKey}
            description={frontmatter.description}
          />
        </div>
      </Layout>
    );
  }
}

HomePage.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  data: PropTypes.object.isRequired,
};

export default HomePage;

export const pageQuery = graphql`
  query HomePageQuery($id: String!) {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    allArticlesJson(filter: { title: { eq: "home" } }) {
      edges {
        node {
          articles {
            en
            sr
          }
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        id
        title
        description
        tags
        lang
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
        heading
        mainpitch {
          heading
          subheading
          title
          description
          link
        }
        slider {
          display
          array {
            original
            thumbnail
            originalAlt
            originalTitle
            description
          }
        }
        imageCardSL {
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 128, quality: 84) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          name
          description
          website
        }
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 500, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        testimonials {
          author
          quote
          image {
              childImageSharp {
                fluid(maxWidth: 128, quality: 84) {
                  ...GatsbyImageSharpFluid
                
              }
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`;
