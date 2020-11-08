import React from 'react'
import { Link } from 'gatsby'
import select from '../components/utils'
import { FormattedMessage } from 'react-intl';
import menuTree from '../data/menuTree'
import { FaFacebook, FaTwitter, FaInstagram, FaVimeo, FaLinkedin } from 'react-icons/fa';
import Copyright from '../components/Copyright'
import ScrollToTop from '../components/ScrollToTop'
import logo from '../img/logo.svg'

const Footer = class extends React.Component {
  render() {
    const props = this.props;
    const sel = select(props.langKey);
    return (
      <footer>

                <div className="content has-text-centered">
                <a title="facebook" href="https://facebook.com/fengshui.home">
                     <FaFacebook className="facebook-icon"  size="2em"/>
                  </a>
                  <a title="instagram" href="https://instagram.com/fengshui.home">
                    <FaInstagram className="instagram-icon" size="2em"/>
                  </a>
                  <p>2020, Feng Shui & Modern design - All rights reserved.</p>
                  </div>
                

            <ScrollToTop/>
      </footer>
    )
  }
}

export default Footer
