import React from "react"
import * as PropTypes from "prop-types"
import TagList from '../components/TagList'
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import SEO from '../components/SEO/SEO'
import Slider from '../components/Slider'
import IconMenu from '../components/IconMenu'
import Content, { HTMLContent } from "../components/Content"

const AboutPageTemplate = ({ title, content, contentComponent, tags, langKey, array, display, firstLink, secondLink, thirdLink, fourthLink }) => {
  const PageContent = contentComponent || Content
  return (
      <div className="container content">
       <h1 className="title animated">{title}</h1>
        <section className="section">
          <PageContent className="container content" content={content} />
          <div class="columns">
  <div class="column">
    <p class="bd-notification is-info">First column</p>
    <div class="columns is-mobile">
      <div class="column">
        <p class="bd-notification is-info">First nested column</p>
      </div>
      <div class="column">
        <p class="bd-notification is-info">Second nested column</p>
      </div>
    </div>
  </div>
  <div class="column">
    <p class="bd-notification is-danger">Second column</p>
    <div class="columns is-mobile">
      <div class="column is-half">
        <p class="bd-notification is-danger">50%</p>
      </div>
      <div class="column">
        <p class="bd-notification is-danger">Auto</p>
      </div>
      <div class="column">
        <p class="bd-notification is-danger">Auto</p>
      </div>
    </div>
  </div>
</div>

          <TagList tags={tags} langKey={langKey}/>
          <Slider array={array} display={display}/>
        </section>
      </div>
)
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  tags: PropTypes.array,
  langKey: PropTypes.string
}

class AboutPage extends React.Component {

  render() {
    var dataMarkdown = [];
    if (this.props.data !== null) {
      dataMarkdown = this.props.data.markdownRemark
    }
    const jsonData = this.props.data.allArticlesJson.edges[0].node.articles;
    const { frontmatter } = dataMarkdown;
    const image = frontmatter.image.childImageSharp.fluid.src;
    const langKey = frontmatter.lang;
    const tags = frontmatter.tags;
    return (
      <Layout className="container" data={this.props.data} jsonData={jsonData} location={this.props.location}>
        <SEO
          frontmatter={frontmatter}
          postImage={image}
        />
        <div>
            <AboutPageTemplate
            contentComponent={HTMLContent}
            title={dataMarkdown.frontmatter.title}
            content={dataMarkdown.html}
            tags={tags}
            langKey={langKey}
             />
        </div>
      </Layout>
    )
  }
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

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
    allArticlesJson(filter:{title:{eq:"home"}}){
   edges{
     node{
       articles {
         en
         sr
       }
     }
   }
 }
    markdownRemark(id: {eq: $id}) {
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
`
