import {
  loadGenres, loadMovies, loadPromoMovie, loadCurrentMovie,
  requireAuthorization, redirectToRoute,
  loadUser, loadMovieReviews, loadUserFavorites, loadMovieRelated, loadAuthFormError
} from "./action";
import {AuthorizationStatus, AppRoute, APIRoute} from "../const";

export const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => {
      dispatch(loadMovies(data));
      return {data};
    })
    .then(({data}) => {
      dispatch(loadGenres(data));
      return {data};
    })
);

export const fetchPromoMovie = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS_PROMO)
    .then(({data}) => dispatch(loadPromoMovie(data)))
);

export const fetchCurrentMovie = (movieId) => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS + `/${movieId}`)
    .then(({data}) => dispatch(loadCurrentMovie(data)))
    .then(() => {
      api.get(APIRoute.FILMS)
        .then(({data}) => {
          dispatch(loadMovieRelated(data));
        });
    })
);

export const fetchMovieReviews = (movieId) => (dispatch, _getState, api) => (
  api.get(APIRoute.MOVIE_REVIEWS + `/${movieId}`)
    .then(({data}) => dispatch(loadMovieReviews(data)))
);

export const fetchUserFavorites = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => dispatch(loadUserFavorites(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));

      return {data};
    })
    .then(({data}) => dispatch(loadUser(data)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      return {data};
    })
    .then(({data}) => dispatch(loadUser(data)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
    .catch(({response}) => dispatch(loadAuthFormError(response.data.error)))
);

export const addReview = ({id, rating, comment}) => (dispatch, _getState, api) => (
  api.post(APIRoute.MOVIE_REVIEWS + `/${id}`, {rating, comment})
    .then(() => dispatch(redirectToRoute(AppRoute.FILMS + `/${id}`)))
);

export const addMovieToFavorite = (id) => (dispatch, _getState, api) => (
  api.post(APIRoute.FAVORITE + `/${id}/1`)
    .then(() => dispatch(redirectToRoute(AppRoute.FILMS + `/${id}`)))
);
