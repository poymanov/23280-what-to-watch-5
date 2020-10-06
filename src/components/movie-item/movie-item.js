import React from "react";
import MovieTypes from "../../types/movies";
import PropTypes from "prop-types";

const MovieItem = (props) => {
  const {movie, onMovieHover, onMovieLeave} = props;
  return (
    <article key={movie.id} className="small-movie-card catalog__movies-card" onMouseEnter={() => onMovieHover(movie.id)} onMouseLeave={() => onMovieLeave(movie.id)}>
      <div className="small-movie-card__image">
        <img src={movie.image} alt={movie.title} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href={movie.image}>{movie.title}</a>
      </h3>
    </article>
  );
};

MovieItem.propTypes = {
  movie: MovieTypes.item,
  onMovieHover: PropTypes.func.isRequired,
  onMovieLeave: PropTypes.func.isRequired,
};

export default MovieItem;
