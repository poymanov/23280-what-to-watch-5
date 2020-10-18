import {extend} from "../utils";
import {ActionType} from "./action";
import genres from "../mocks/genres";
import movies from "../mocks/movies";

const initialState = {
  filterGenreId: 0,
  genres,
  moviesByGenre: movies
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_MOVIES_FILTER:
      const payload = action.payload;
      return extend(state, {
        filterGenreId: payload.genreId,
        moviesByGenre: payload.filteredMovies
      });
  }

  return state;
};

export {reducer};
