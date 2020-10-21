import {filterMoviesByGenreId, paginateMovies} from "../movies";
import movies from "../mocks/movies";

export const ActionType = {
  CHANGE_MOVIES_FILTER: `CHANGE_MOVIES_FILTER`,
  SHOW_MORE_MOVIES: `SHOW_MORE_MOVIES`,
};

export const ActionCreator = {
  changeMoviesFilter: (genreId) => {
    const filteredMovies = paginateMovies(filterMoviesByGenreId(movies, genreId), 0);
    return {
      type: ActionType.CHANGE_MOVIES_FILTER,
      payload: {genreId, filteredMovies},
    };
  },
  showMoreMovies: (genreId, nextItemId) => {
    const nextMovies = paginateMovies(filterMoviesByGenreId(movies, genreId), nextItemId);
    return {
      type: ActionType.SHOW_MORE_MOVIES,
      payload: {nextMovies},
    };
  }
};
