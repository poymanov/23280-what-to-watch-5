import React from "react";
import GenreTypes from "../../types/genres";
import GenreItem from "../genre-item/genre-item";

const GenreList = (props) => {
  const {genres} = props;
  return (
    <ul className="catalog__genres-list">
      <li className="catalog__genres-item catalog__genres-item--active">
        <a href="#" className="catalog__genres-link">All genres</a>
      </li>
      {genres.map((genre) => <GenreItem key={genre.id} genre={genre} />)}
    </ul>
  );
};

GenreList.propTypes = {
  genres: GenreTypes.list,
};

export default GenreList;
