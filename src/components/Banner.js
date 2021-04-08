import React from "react"
import ReactWOW from 'react-wow'
import * as PropTypes from "prop-types"
import { FaAward } from 'react-icons/fa'
import PreviewImage from '../components/PreviewCompatibleImage'
import { FormattedMessage } from 'react-intl'
import img1 from "../img/1.jpg"
import img2 from "../img/2.jpg"
import img3 from "../img/3.jpg"


export default () => {
  const pictures = [img1, img2, img3];
  const bannerContainer = {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateRows: "1fr"
  };

  return (
    <div className="banner-container" style={bannerContainer}>
      {pictures.map(picture => (
        <div
          className="inner-banner text-center"
          style={{
            backgroundImage: `url(${picture})`,
            backgroundPosition: "top left, top center, top right"
          }}>
          <div className="container">
            <div className="box"></div>
          </div>
        </div>
      ))}
    </div>
  );
};


