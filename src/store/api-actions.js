import {
  loadGenres, loadMovies, loadPromoMovie,
  changeGenreFilter, requireAuthorization, redirectToRoute,
  loadUser
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
    .then(() => {
      dispatch(changeGenreFilter(`All`));
    })
);

export const fetchPromoMovie = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS_PROMO)
    .then(({data}) => dispatch(loadPromoMovie(data)))
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
);
