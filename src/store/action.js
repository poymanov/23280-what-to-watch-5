import {filterMoviesByGenreId, paginateMovies} from "../movies";
import movies2 from "../mocks/movies";

export const ActionType = {
  CHANGE_MOVIES_FILTER: `CHANGE_MOVIES_FILTER`,
  SHOW_MORE_MOVIES: `SHOW_MORE_MOVIES`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_GENRES: `LOAD_GENRES`,
  LOAD_PROMO_MOVIE: `LOAD_PROMO_MOVIE`
};

export const ActionCreator = {
  changeMoviesFilter: (genreId) => {
    const filteredMovies = paginateMovies(filterMoviesByGenreId(movies2, genreId), 0);
    return {
      type: ActionType.CHANGE_MOVIES_FILTER,
      payload: {genreId, filteredMovies},
    };
  },
  showMoreMovies: (genreId, nextItemId) => {
    const nextMovies = paginateMovies(filterMoviesByGenreId(movies2, genreId), nextItemId);
    return {
      type: ActionType.SHOW_MORE_MOVIES,
      payload: {nextMovies},
    };
  }
};

export const loadMovies = (movies) => ({
  type: ActionType.LOAD_MOVIES,
  payload: movies,
});

export const loadGenres = (movies) => ({
  type: ActionType.LOAD_GENRES,
  payload: movies,
});

export const loadPromoMovie = (movie) => ({
  type: ActionType.LOAD_PROMO_MOVIE,
  payload: movie,
});
