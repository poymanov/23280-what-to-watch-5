import PropTypes from "prop-types";

const movie = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  videoLink: PropTypes.string.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  scoresCount: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  runTime: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
}).isRequired;

const MovieTypes = {
  item: movie,
  promo: movie,
  list: PropTypes.arrayOf(movie).isRequired,
  listWithPagination: PropTypes.shape({
    items: PropTypes.arrayOf(movie).isRequired,
    pagination: PropTypes.shape({
      lastItemId: PropTypes.number.isRequired,
      hasNext: PropTypes.bool.isRequired,
    }).isRequired,
  }),
};

export default MovieTypes;
