import Star from "../Star/Star";
import PropTypes from "prop-types";

function StarRating({ rating }) {
  return (
    <div className='star-rating' style={{ display: 'flex', alignItems: 'center' }}>
      {Array.from({ length: rating }, (_, i) => (
        <Star key={i} />
      ))}
      <p className='rating'>{rating}/10</p>
    </div>
  );
}

export default StarRating;

StarRating.propTypes = {
  rating: PropTypes.number,
};