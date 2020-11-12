import React, {Fragment} from "react";
import MovieTypes from "../../types/movies";

const MovieOverview = (props) => {
  const {movie} = props;

  function ratingLabel(rating) {
    switch (true) {
      case (rating <= 3):
        return `Bad`;
      case (rating <= 5):
        return `Normal`;
      case (rating <= 8):
        return `Good`;
      case (rating < 10):
        return `Very good`;
      default:
        return `Awesome`;
    }
  }

  return (
    <Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{movie.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingLabel(movie.rating)}</span>
          <span className="movie-rating__count">{movie.scoresCount} ratings</span>
        </p>
      </div>
      <div className="movie-card__text">
        <p>{movie.description}</p>
        <p className="movie-card__director"><strong>Director: {movie.director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {movie.starring.join(`, `)}</strong></p>
      </div>
    </Fragment>
  );
};

MovieOverview.propTypes = {
  movie: MovieTypes.item,
};

export default MovieOverview;
