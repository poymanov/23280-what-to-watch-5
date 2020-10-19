import {filterMoviesByGenreId} from "../movies";
import movies from "../mocks/movies";

export const ActionType = {
  CHANGE_MOVIES_FILTER: `CHANGE_MOVIES_FILTER`,
};

export const ActionCreator = {
  changeMoviesFilter: (genreId) => {
    const filteredMovies = filterMoviesByGenreId(movies, genreId);
    return {
      type: ActionType.CHANGE_MOVIES_FILTER,
      payload: {genreId, filteredMovies},
    };
  },
};
