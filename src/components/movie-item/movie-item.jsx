import React from "react";
import MovieTypes from "../../types/movies";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import PreviewPlayer from "../preview-player/preview-player";

const MovieItem = ({movie, onMovieHover, onMovieLeave, isShowTrailer}) => {
  return (
    <article key={movie.id} className="small-movie-card catalog__movies-card" onMouseEnter={() => onMovieHover(movie.id)} onMouseLeave={() => onMovieLeave(movie.id)}>
      <Link to={`/films/` + movie.id} className="small-movie-card__link">
        <div className="small-movie-card__image">
          {isShowTrailer ? <PreviewPlayer movie={movie} /> : <img src={movie.previewImage} alt={movie.name} width="280" height="175" />}
        </div>
        <h3 className="small-movie-card__title">{movie.name}</h3>
      </Link>
    </article>
  );
};

MovieItem.propTypes = {
  movie: MovieTypes.item,
  onMovieHover: PropTypes.func.isRequired,
  onMovieLeave: PropTypes.func.isRequired,
  isShowTrailer: PropTypes.bool.isRequired,
};

export default MovieItem;
