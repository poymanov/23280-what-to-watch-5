import PropTypes from "prop-types";

const movie = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  trailer: PropTypes.string.isRequired,
}).isRequired;

const promoMovie = PropTypes.shape({
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired
}).isRequired;

const MovieTypes = {
  item: movie,
  promoItem: promoMovie,
  list: PropTypes.arrayOf(movie).isRequired
};

export default MovieTypes;
