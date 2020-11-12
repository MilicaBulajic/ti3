import React from "react"
import * as PropTypes from "prop-types"
import TagList from '../components/TagList'
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import SEO from '../components/SEO/SEO'
import Slider from '../components/Slider'
import IconMenu from '../components/IconMenu'
import Content, { HTMLContent } from "../components/Content"
import about from "../../public/img/about.jpg"

const AboutPageTemplate = ({ title, content, contentComponent, tags, langKey, array, display, firstLink, secondLink, thirdLink, fourthLink }) => {
  const PageContent = contentComponent || Content
  return (

      <div className="container content">
            <div
    className="full-width-image-container margin-top-0"
    style={{
      backgroundImage: `url(${about})`,
      backgroundPosition: 'right'
    }}
  >
                    <h1
                  className="has-text-weight-bold is-size-1"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.45)',
                    fontFamily: 'Caveat,cursive',
                    color: '#4a4a4a',
                    padding: '1rem',
                  }}
                >
                  {title}
                </h1>
    </div>
 

            <div className="container section">
       <IconMenu
       firstLink={firstLink}
       secondLink={secondLink}
       thirdLink={thirdLink}
       fourthLink={fourthLink}
       />
       </div>

          <TagList tags={tags} langKey={langKey}/>
          <Slider array={array} display={display}/>
     
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
