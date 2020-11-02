export const ActionType = {
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_GENRES: `LOAD_GENRES`,
  LOAD_PROMO_MOVIE: `LOAD_PROMO_MOVIE`,
  LOAD_USER: `LOAD_USER`,
  LOAD_MOVIES_PAGINATION: `LOAD_MOVIES_PAGINATION`,
  CHANGE_GENRE_FILTER: `CHANGE_GENRE_FILTER`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SHOW_MORE_MOVIES: `SHOW_MORE_MOVIES`,
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

export const changeGenreFilter = (genreId) => ({
  type: ActionType.CHANGE_GENRE_FILTER,
  payload: genreId,
});

export const showMoreMovies = (genreId, nextItemId) => ({
  type: ActionType.SHOW_MORE_MOVIES,
  payload: {genreId, nextItemId}
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const loadUser = (user) => ({
  type: ActionType.LOAD_USER,
  payload: user,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});
