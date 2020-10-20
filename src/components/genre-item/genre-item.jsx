import React from "react";
import GenreTypes from "../../types/genres";
import PropTypes from "prop-types";

const GenreItem = ({genre, isActive, handleGenreClick}) => {
  function clickGenre(evt, genreId) {
    evt.preventDefault();
    handleGenreClick(genreId);
  }

  return (
    <li key={genre.id} className={`catalog__genres-item ` + (isActive ? `catalog__genres-item--active` : ``)}>
      <a href="#" className="catalog__genres-link" onClick={(evt) => clickGenre(evt, genre.id)}>{genre.title}</a>
    </li>
  );
};

GenreItem.propTypes = {
  genre: GenreTypes.item,
  isActive: PropTypes.bool.isRequired,
  handleGenreClick: PropTypes.func.isRequired
};

export default GenreItem;
