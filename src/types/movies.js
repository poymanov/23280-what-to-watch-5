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

const oldMovie = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  trailer: PropTypes.string.isRequired,
}).isRequired;

const MovieTypes = {
  item: movie,
  oldItem: oldMovie,
  promo: movie,
  list: PropTypes.shape({
    items: PropTypes.arrayOf(oldMovie).isRequired,
    pagination: PropTypes.shape({
      lastItemId: PropTypes.number.isRequired,
      hasNext: PropTypes.bool.isRequired,
    }).isRequired,
  }),
};

export default MovieTypes;
