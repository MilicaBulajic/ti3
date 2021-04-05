import React from 'react'
import ReactWOW from 'react-wow'
import Img from 'gatsby-image'
import * as PropTypes from "prop-types"

const CardImageSlide = ({ imageInfo }) => {
  const { alt = '', childImageSharp, image } = imageInfo
  const imageStyle = { borderRadius: '50%' }

  if (!!image && !!image.childImageSharp) {
    return (
        <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
    )
  }

  if (!!childImageSharp) {
    return (
        <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />
    )
  }

  if (!!image && typeof image === 'string')
    return <img style={imageStyle} src={image} alt={alt} />
  return null
}

CardImageSlide.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  }).isRequired,
}

class CardSlide extends React.Component {

  render(){
    const props = this.props;
    const imageInfo = props.imageInfo;
    const name = props.imageInfo.name;
    const description = props.imageInfo.description;
    const email = props.imageInfo.email;

    return (
    <div className="section card-slide">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-128x128">
                <CardImageSlide imageInfo={imageInfo}/>
              </figure>
            </div>
              <div className="media-content">
                <ReactWOW animation='pulse'>
                  <p className="title is-4">{name}</p>
                </ReactWOW>
                <ReactWOW delay='1s' animation='pulse'>
                  <p className="title is-6">{description}</p>
                </ReactWOW>
                <br/>
                <a href ="mailto: milica.bulajic@gmail.com">{email}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  )}
}

export default CardSlide
