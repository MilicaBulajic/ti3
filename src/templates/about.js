import React from "react";
import * as PropTypes from "prop-types";
import TagList from "../components/TagList";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO/SEO";
import Slider from "../components/Slider";
import IconMenu from "../components/IconMenu";
import Content, { HTMLContent } from "../components/Content";
import { withPrefix } from "gatsby";
import Video from "../components/Video";

const AboutPageTemplate = ({
  title,
  content,
  contentComponent,
  image,
  videoSourceURL,
  videoTitle,
  langKey,
  array,
  display,
  firstLink,
  secondLink,
  thirdLink,
  fourthLink,
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
          backgroundPosition: `center`,
          height: `550px`,
        }}
      >
        <h1
          className="has-text-weight-bold is-size-1"
          style={{
            fontFamily: "Caveat,cursive",
            color: "#4a4a4a",
            padding: "1rem",
          }}
        >
          {title}
        </h1>
      </div>

      <section className="about">
        <div className="column is-10 is-offset-1">
          <div className="tile is-ancestor">
            <div className="tile is-vertical">
              <div className="tile">
                <div className="tile is-parent is-vertical">
                  <article className="tile is-child">
                    <PageContent className="content" content={content} />
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child">
                    <Video
                      videoSrcURL="https://www.youtube.com/embed/FFM_Z0cctgk"
                      videoTitle="tst"
                    />
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  tags: PropTypes.array,
  langKey: PropTypes.string,
};

class AboutPage extends React.Component {
  render() {
    var dataMarkdown = [];
    if (this.props.data !== null) {
      dataMarkdown = this.props.data.markdownRemark;
    }
    const jsonData = this.props.data.allArticlesJson.edges[0].node.articles;
    const { frontmatter } = dataMarkdown;
    const image = frontmatter.image.childImageSharp.fluid.src;
    const langKey = frontmatter.lang;
    const tags = frontmatter.tags;
    return (
      <Layout
        className="container"
        data={this.props.data}
        jsonData={jsonData}
        location={this.props.location}
      >
        <SEO frontmatter={frontmatter} postImage={image} />
        <div>
          <AboutPageTemplate
            image={dataMarkdown.frontmatter.image}
            contentComponent={HTMLContent}
            title={dataMarkdown.frontmatter.title}
            content={dataMarkdown.html}
            tags={tags}
            langKey={langKey}
          />
        </div>
      </Layout>
    );
  }
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const pageQuery = graphql`
  query AboutPageQuery($id: String!) {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }
    allFile(filter: { extension: { eq: "pdf" } }) {
      edges {
        node {
          publicURL
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
      }
      fields {
        slug
      }
    }
  }
`;
