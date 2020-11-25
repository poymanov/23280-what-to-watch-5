import React from "react";
import GenreTypes from "../../types/genres";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const GenreItem = ({genre, isActive, onGenreClick}) => {
  return (
    <li key={genre.id} className={`catalog__genres-item ` + (isActive ? `catalog__genres-item--active` : ``)}>
      <Link to={`/`} className="catalog__genres-link" onClick={() => onGenreClick(genre.id)}>{genre.title}</Link>
    </li>
  );
};

GenreItem.propTypes = {
  genre: GenreTypes.item,
  isActive: PropTypes.bool.isRequired,
  onGenreClick: PropTypes.func.isRequired
};

export default GenreItem;
