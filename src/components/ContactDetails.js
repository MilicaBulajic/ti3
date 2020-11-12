import React from 'react'
import { FaMapMarkerAlt, FaPhone, FaRegEnvelope } from 'react-icons/fa'
import PropTypes from 'prop-types'
import CardSlide from '../components/CardSlide'



const ContactDetails = ({ infos, address, image, phone, email }) =>(

      <div className="section box">
        <div className="container">
          <h3 className="title">
            {infos}
            </h3>
              <div className="columns is-vcentered">
                <div className="column">
                <CardSlide
                style={{ maxWidth: '20%'}}
                imageInfo={image}
                name={image.name}
                description={image.description}
                email={image.email}/>
                </div>
                <div className="column is-vertical-center">
    

            </div>
          </div>
          </div>
        </div>
    )


ContactDetails.propTypes = {
  infos: PropTypes.string,
  image: PropTypes.object,
  address: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
}

export default ContactDetails
