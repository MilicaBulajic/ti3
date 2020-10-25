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
        <div>
          <div>
              <div className="columns">
                <div className="column is-4">
        
                </div>
                </div>
                <div className="column is-4 social">
                  <a title="facebook" href="https://facebook.com">
                     <FaFacebook className="facebook-icon"  size="2em"/>
                  </a>
                  <a title="instagram" href="https://instagram.com">
                    <FaInstagram className="instagram-icon" size="2em"/>
                  </a>
                </div>
              </div>
            </div>
            <Copyright />
        <ScrollToTop/>
      </footer>
    )
  }
}

export default Footer
