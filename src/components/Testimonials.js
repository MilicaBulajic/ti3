import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

const Testimonials = ({ testimonials, image }) => (
  <div className="columns is-multiline">
    {testimonials.map((testimonial) => (
      <article key={v4()} className="is-parent column is-4">
        <img imageInfo={image} />
        <div
          style={{ paddingTop: "10%", paddingBottom: "10%" }}
          className="message-body testimonials"
        >
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
      quote: PropTypes.string,
      author: PropTypes.string,
    })
  ),
};

export default Testimonials;
