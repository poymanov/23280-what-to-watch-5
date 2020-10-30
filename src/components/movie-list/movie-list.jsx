import React, {Fragment} from "react";
import MovieItem from "../movie-item/movie-item";
import MovieTypes from "../../types/movies";
import ShowMoreMovies from "../show-more-movies/show-more-movies";
import withActiveItem from "../../hocs/with-active-item";

const MovieItemWrapped = withActiveItem(MovieItem);

const MovieList = ({movies}) => {
  let showMore = null;

  if (movies.pagination.hasNext) {
    showMore = <ShowMoreMovies nextItemId={movies.pagination.lastItemId} />;
  }

  return (
    <Fragment>
      <div className="catalog__movies-list">
        {movies.items.map((movie) => <MovieItemWrapped key={movie.id} movie={movie} />)}
      </div>
      {showMore}
    </Fragment>
  );
};

MovieList.propTypes = {
  movies: MovieTypes.listWithPagination
};

export default MovieList;
