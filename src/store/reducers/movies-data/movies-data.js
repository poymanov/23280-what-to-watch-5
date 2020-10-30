import {ActionType} from "../../action";
import {extend} from "../../../utils";
import {buildMovie, buildMovies, filterMoviesByGenreId, paginateMovies} from "../../../movies";

const initialState = {
  promo: null,
  list: [],
  filterGenreId: `All`,
  main: null,
};

const moviesData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_PROMO_MOVIE:
      return extend(state, {
        promo: buildMovie(action.payload),
      });
    case ActionType.LOAD_MOVIES:
      return extend(state, {
        list: buildMovies(action.payload),
      });
    case ActionType.CHANGE_GENRE_FILTER:
      const genreId = action.payload;
      return extend(state, {
        filterGenreId: genreId,
        main: paginateMovies(filterMoviesByGenreId(state.list, genreId), 0)
      });
    case ActionType.SHOW_MORE_MOVIES:
      const payload = action.payload;
      const nextMovies = paginateMovies(filterMoviesByGenreId(state.list, payload.genreId), payload.nextItemId);

      return extend(state, {
        main: nextMovies
      });
  }

  return state;
};

export {moviesData};

