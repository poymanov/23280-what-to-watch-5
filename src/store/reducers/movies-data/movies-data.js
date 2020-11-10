import {ActionType} from "../../action";
import {extend} from "../../../utils";
import {buildMovie, buildMovies, buildReviews} from "../../../movies";

const initialState = {
  promo: null,
  list: [],
  filterGenreId: `All`,
  currentMovie: null,
  currentMovieReviews: [],
  userFavorites: [],
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
    case ActionType.LOAD_USER_FAVORITES:
      return extend(state, {
        userFavorites: buildMovies(action.payload),
      });
    case ActionType.LOAD_MOVIE_REVIEWS:
      return extend(state, {
        currentMovieReviews: buildReviews(action.payload),
      });
    case ActionType.CHANGE_GENRE_FILTER:
      return extend(state, {filterGenreId: action.payload});
  }

  return state;
};

export {moviesData};

