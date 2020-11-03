import {ActionType} from "../../action";
import {extend} from "../../../utils";
import {buildMovie, buildMovies, filterMoviesByGenreId, paginateMovies, buildReviews} from "../../../movies";

const initialState = {
  promo: null,
  list: [],
  filterGenreId: `All`,
  main: null,
  currentMovie: null,
  currentMovieReviews: [],
};

const moviesData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_PROMO_MOVIE:
      return extend(state, {
        promo: buildMovie(action.payload),
      });
    case ActionType.LOAD_CURRENT_MOVIE:
      return extend(state, {
        currentMovie: buildMovie(action.payload),
      });
    case ActionType.FLUSH_CURRENT_MOVIE:
      return extend(state, {
        currentMovie: null,
      });
    case ActionType.LOAD_MOVIES:
      return extend(state, {
        list: buildMovies(action.payload),
      });
    case ActionType.LOAD_MOVIE_REVIEWS:
      return extend(state, {
        currentMovieReviews: buildReviews(action.payload),
      });
    case ActionType.CHANGE_GENRE_FILTER:
      const filterGenreId = action.payload;
      return extend(state, {
        filterGenreId,
        main: paginateMovies(filterMoviesByGenreId(state.list, filterGenreId), 0)
      });
    case ActionType.SHOW_MORE_MOVIES:
      const {genreId, nextItemId} = action.payload;
      const nextMovies = paginateMovies(filterMoviesByGenreId(state.list, genreId), nextItemId);

      return extend(state, {
        main: nextMovies
      });
  }

  return state;
};

export {moviesData};

