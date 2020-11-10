import React from "react";
import MovieItem from "../movie-item/movie-item";
import MovieTypes from "../../types/movies";
import withActiveItem from "../../hocs/with-active-item/with-active-item";

const MovieItemWrapped = withActiveItem(MovieItem);

const MovieList = (props) => {
  const {movies} = props;

  return (
    <div className="catalog__movies-list">
      {movies.map((movie) => <MovieItemWrapped key={movie.id} movie={movie}/>)}
    </div>
  );
};

MovieList.propTypes = {
  movies: MovieTypes.list
};

export default MovieList;
