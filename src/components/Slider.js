import React from 'react'
import PropTypes from 'prop-types'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";



const Slider = ( { array, display, testimonials } ) => {

  return (
    <section className="section">
        { display === 'slide'  ?
     <ImageGallery testimonials={testimonials} lazyLoad={true} showBullets={true} items={array} />
    :
     <div className='void'></div>
 }
   </section>
);
}


Slider.propTypes = {
  array: PropTypes.array,
  display: PropTypes.string,
}

export default Slider
