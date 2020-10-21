import {extend} from "../utils";
import {ActionType} from "./action";
import genres from "../mocks/genres";
import movies from "../mocks/movies";
import {filterMoviesByGenreId, paginateMovies} from "../movies";

const initialState = {
  filterGenreId: 0,
  genres,
  moviesByGenre: paginateMovies(filterMoviesByGenreId(movies, 0), 0)
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_MOVIES_FILTER:
      const payload = action.payload;
      return extend(state, {
        filterGenreId: payload.genreId,
        moviesByGenre: payload.filteredMovies
      });
    case ActionType.SHOW_MORE_MOVIES:
      return extend(state, {
        moviesByGenre: action.payload.nextMovies
      });
  }

  return state;
};

export {reducer};
