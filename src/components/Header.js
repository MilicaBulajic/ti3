import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.png'
import SelectLanguage from './SelectLanguage';
import { FormattedMessage } from 'react-intl';
import menuTree from '../data/menuTree'
import RootMenuMobile from '../components/RootMenuMobile'
import {
  BrowserView,
  MobileView,
  isMobile
} from "react-device-detect";
import select from '../components/utils'

const Header = class extends React.Component {

  componentDidMount() {

   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
   if ($navbarBurgers.length > 0) {

     // Add a click event on each of them
     $navbarBurgers.forEach( el => {
       el.addEventListener('click', () => {

         // Get the target from the "data-target" attribute
         const target = el.dataset.target;
         const $target = document.getElementById(target);
         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
         el.classList.toggle('is-active');
         $target.classList.toggle('is-active');

       });
     });
   }

   // Get all "navbar-link" elements
  const navbarLink = Array.prototype.slice.call(document.querySelectorAll('.navbar-link'), 0);
   // Check if there are any navbar links
  if (navbarLink.length > 0) {

    // Add a click event on each of them
    navbarLink.forEach( el => {
      el.addEventListener('click', () => {
        el.nextElementSibling.classList.toggle('is-hidden-mobile');
      });
    });
  }

  if (isMobile) {

   let navMenu = document.getElementById("navMenu");
   navMenu.style.backgroundColor = "white"

 }
}

 render() {

   const props = this.props;
   const sel = select(props.langKey);

   return (

<header>
    <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="fengshui" />
          </Link>
          {/* Hamburger menu */}
          <div className="navbar-burger burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navMenu" className="navbar-menu">
        <div className="navbar-start has-text-centered">
          <Link className="navbar-item" to={"/" + props.langKey}>
            <FormattedMessage id="home" />
          </Link>
          <BrowserView viewClassName=''>

          </BrowserView>

          <Link className="navbar-item" to={"/" + props.langKey + "/" + menuTree.about[sel] +"/"}>
            <FormattedMessage id="about" />
          </Link>
          <Link className="navbar-item" to={"/" + props.langKey + "/" + menuTree.services[sel] +"/"}>
            <FormattedMessage id="services" />
          </Link>
          <Link className="navbar-item" to={"/" + props.langKey + "/" + menuTree.blog[sel] +"/"}>
            <FormattedMessage id="blog" />
          </Link>
          <Link className="navbar-item" to={"/" + props.langKey + "/" + menuTree.contact[sel] +"/"}>
            <FormattedMessage id="contact" />
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-item  has-text-centered">
            <SelectLanguage langs={props.langs} />
          </div>
        </div>
        </div>
      </div>
    </nav>
</header>
)}
}

export default Header;
