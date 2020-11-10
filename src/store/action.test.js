import {
  loadMovies,
  loadGenres,
  loadPromoMovie,
  loadCurrentMovie,
  loadMovieReviews,
  loadUserFavorites,
  flushCurrentMovie,
  changeGenreFilter,
  requireAuthorization,
  loadUser,
  redirectToRoute, ActionType, loadMovieRelated, loadAuthFormError, loadReviewFormError, flushReviewFormError
} from "./action";
import {AuthorizationStatus} from "../const";

const movie = {
  id: 1,
  title: `test`,
};

const movies = [movie];

const reviews = {
  id: 1,
  title: `test`,
};

const user = {
  id: 1,
  title: `test`,
};

const genreId = `all`;

const status = AuthorizationStatus.AUTH;

const redirectUrl = `https://test.ru`;

describe(`Action creators work correctly`, () => {
  it(`Action creator for load movies returns correct action`, () => {
    expect(loadMovies(movies)).toEqual({
      type: ActionType.LOAD_MOVIES,
      payload: movies,
    });
  });

  it(`Action creator for load genres returns correct action`, () => {
    expect(loadGenres(movies)).toEqual({
      type: ActionType.LOAD_GENRES,
      payload: movies,
    });
  });

  it(`Action creator for load promo movie returns correct action`, () => {
    expect(loadPromoMovie(movie)).toEqual({
      type: ActionType.LOAD_PROMO_MOVIE,
      payload: movie,
    });
  });

  it(`Action creator for load current movie returns correct action`, () => {
    expect(loadCurrentMovie(movie)).toEqual({
      type: ActionType.LOAD_CURRENT_MOVIE,
      payload: movie,
    });
  });

  it(`Action creator for load movie reviews returns correct action`, () => {
    expect(loadMovieReviews(movie)).toEqual({
      type: ActionType.LOAD_MOVIE_REVIEWS,
      payload: reviews,
    });
  });

  it(`Action creator for load movie related returns correct action`, () => {
    expect(loadMovieRelated(movies)).toEqual({
      type: ActionType.LOAD_MOVIE_RELATED,
      payload: movies,
    });
  });

  it(`Action creator for load review form error returns correct action`, () => {
    expect(loadReviewFormError(`error`)).toEqual({
      type: ActionType.LOAD_REVIEW_FORM_ERROR,
      payload: `error`,
    });
  });

  it(`Action creator for load user favorites returns correct action`, () => {
    expect(loadUserFavorites(movies)).toEqual({
      type: ActionType.LOAD_USER_FAVORITES,
      payload: movies,
    });
  });

  it(`Action creator for flush current movie returns correct action`, () => {
    expect(flushCurrentMovie()).toEqual({
      type: ActionType.FLUSH_CURRENT_MOVIE,
    });
  });

  it(`Action creator for flush review form error returns correct action`, () => {
    expect(flushReviewFormError()).toEqual({
      type: ActionType.FLUSH_REVIEW_FORM_ERROR,
    });
  });

  it(`Action creator for change genre filter returns correct action`, () => {
    expect(changeGenreFilter(genreId)).toEqual({
      type: ActionType.CHANGE_GENRE_FILTER,
      payload: genreId,
    });
  });

  it(`Action creator for require authorization returns correct action`, () => {
    expect(requireAuthorization(status)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    });
  });

  it(`Action creator for load user returns correct action`, () => {
    expect(loadUser(user)).toEqual({
      type: ActionType.LOAD_USER,
      payload: user,
    });
  });

  it(`Action creator for load auth form error returns correct action`, () => {
    expect(loadAuthFormError(`error`)).toEqual({
      type: ActionType.LOAD_AUTH_FORM_ERROR,
      payload: `error`,
    });
  });

  it(`Action creator for redirect to route returns correct action`, () => {
    expect(redirectToRoute(redirectUrl)).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: redirectUrl,
    });
  });
});
