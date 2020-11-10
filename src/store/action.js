export const ActionType = {
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_GENRES: `LOAD_GENRES`,
  LOAD_PROMO_MOVIE: `LOAD_PROMO_MOVIE`,
  LOAD_USER: `LOAD_USER`,
  LOAD_AUTH_FORM_ERROR: `LOAD_AUTH_FORM_ERROR`,
  LOAD_MOVIES_PAGINATION: `LOAD_MOVIES_PAGINATION`,
  LOAD_CURRENT_MOVIE: `LOAD_CURRENT_MOVIE`,
  LOAD_MOVIE_REVIEWS: `LOAD_MOVIE_REVIEWS`,
  LOAD_USER_FAVORITES: `LOAD_USER_FAVORITES`,
  LOAD_MOVIE_RELATED: `LOAD_MOVIE_RELATED`,
  FLUSH_CURRENT_MOVIE: `FLUSH_CURRENT_MOVIE`,
  CHANGE_GENRE_FILTER: `CHANGE_GENRE_FILTER`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
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

export const loadCurrentMovie = (movie) => ({
  type: ActionType.LOAD_CURRENT_MOVIE,
  payload: movie,
});

export const loadMovieReviews = (reviews) => ({
  type: ActionType.LOAD_MOVIE_REVIEWS,
  payload: reviews,
});

export const loadMovieRelated = (movies) => ({
  type: ActionType.LOAD_MOVIE_RELATED,
  payload: movies,
});

export const loadUserFavorites = (movies) => ({
  type: ActionType.LOAD_USER_FAVORITES,
  payload: movies,
});

export const flushCurrentMovie = () => ({
  type: ActionType.FLUSH_CURRENT_MOVIE,
});

export const changeGenreFilter = (genreId) => ({
  type: ActionType.CHANGE_GENRE_FILTER,
  payload: genreId,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const loadUser = (user) => ({
  type: ActionType.LOAD_USER,
  payload: user,
});

export const loadAuthFormError = (error) => ({
  type: ActionType.LOAD_AUTH_FORM_ERROR,
  payload: error,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});
