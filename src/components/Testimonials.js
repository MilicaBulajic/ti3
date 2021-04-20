import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Img from "gatsby-image";

const Testimonials = ({ testimonials, image }) => (
  <div className="columns is-multiline">
    {testimonials.map((testimonial) => (
      <article key={v4()} className="is-parent column is-4">
        <div
          style={{ paddingTop: "10%", paddingBottom: "10%" }}
          className="message-body testimonials"
        >
          <img
            style={{ maxWidth: "20%" }}
            src={image}
          />
          {testimonial.quote}
          <br />
          <cite> – {testimonial.author}</cite>
        </div>
      </article>
    ))}
  </div>
);

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
      quote: PropTypes.string,
      author: PropTypes.string,
    })
  ),
};

export default Testimonials;
