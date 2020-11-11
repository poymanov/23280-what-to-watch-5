import React from "react";
import MovieTypes from "../../types/movies";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import PreviewPlayer from "../preview-player/preview-player";

const MovieItem = (props) => {
  const {movie, onMovieHover, onMovieLeave, isShowTrailer} = props;
  return (
    <article key={movie.id} className="small-movie-card catalog__movies-card" onMouseEnter={() => onMovieHover(movie.id)} onMouseLeave={() => onMovieLeave(movie.id)}>
      <div className="small-movie-card__image">
        <Link to={`/films/` + movie.id}>
          {isShowTrailer ? <PreviewPlayer movie={movie} /> : <img src={movie.previewImage} alt={movie.name} width="280" height="175" />}
        </Link>
      </div>
      <h3 className="small-movie-card__title">
        <Link to={`/films/` + movie.id} className="small-movie-card__link">{movie.name}</Link>
      </h3>
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
