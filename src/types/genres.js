import PropTypes from "prop-types";

const genre = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}).isRequired;

const GenreTypes = {
  item: genre,
  list: PropTypes.arrayOf(genre).isRequired
};

export default GenreTypes;
