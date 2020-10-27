import {loadGenres, loadMovies, loadPromoMovie} from "./action";

export const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => {
      dispatch(loadMovies(data));
      dispatch(loadGenres(data));
    })
);

export const fetchPromoMovie = () => (dispatch, _getState, api) => (
  api.get(`/films/1`)
    .then(({data}) => dispatch(loadPromoMovie(data)))
);
