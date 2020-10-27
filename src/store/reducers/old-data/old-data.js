import {extend} from "../../../utils";
import {ActionType} from "../../action";
import movies from "../../../mocks/movies";
import {filterMoviesByGenreId, paginateMovies} from "../../../movies";

const initialState = {
  filterGenreId: `all`,
  moviesByGenre: paginateMovies(filterMoviesByGenreId(movies, `all`), 0),
  movies: [],
};

const oldData = (state = initialState, action) => {
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
    case ActionType.LOAD_MOVIES:
      return extend(state, {
        movies: action.payload
      });
  }

  return state;
};

export {oldData};
