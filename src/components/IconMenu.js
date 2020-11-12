import React from 'react';
import PropTypes from 'prop-types';
import { FaCircle, FaPaintBrush, FaGavel, FaBolt, FaHandPointer } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';

const IconMenu = class extends React.Component {

  componentDidMount() {
    // Get all "icon" elements
   const sectionMenu = Array.prototype.slice.call(document.querySelectorAll('.icon'), 0);

  }
  render() {
    const firstLink = this.props.firstLink;
    const secondLink = this.props.secondLink;
    const thirdLink = this.props.thirdLink;
    const fourthLink = this.props.fourthLink;
  return(
    <div className="section">
      <div className="box">
      <div className="content">
        <h4 className="subtitle has-text-centered">
        Full Consultation packages
        </h4>
      </div>
    <div className="columns is-2 is-mobile is-multiline is-centered">
      <a className="column" href={firstLink}>
      <div className="section packages">
        <h4 className="title has-text-centered">
        Full Home Consultation Package
        </h4>
        <p>includes: Directions and Bagua areas, Flying Star worksheet, intentional Bagua Map, Remedies Report, Personal trigram</p>
      </div>
      </a>
      <a className="column" href={secondLink}>

  
    
        <div className="section packages">
          <h4 className="title has-text-centered">
          Full Home Consultation Package + Mood Board/ design suggestions
          </h4>
          <p>includes: Directions and Bagua areas, Flying Star worksheet, intentional Bagua Map, Remedies Report, Personal trigram and a mood board with suggestions of how to create modern home design with Feng Shui which you can relate to the given remedies</p>
        </div>
      </a>
      </div>
     </div>
     </div>
  )
  }
};

IconMenu.propTypes = {
  firstLink: PropTypes.string,
  secondLink: PropTypes.string,
  thirdLink: PropTypes.string,
  fourthLink: PropTypes.string,
}

export default IconMenu;
