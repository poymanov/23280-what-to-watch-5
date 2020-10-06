import React from "react";
import GenreTypes from "../../types/genres";

const GenreItem = (props) => {
  const {genre} = props;

  return (
    <li key={genre.id} className="catalog__genres-item">
      <a href="#" className="catalog__genres-link">{genre.title}</a>
    </li>
  );
};

GenreItem.propTypes = {
  genre: GenreTypes.item,
};

export default GenreItem;
