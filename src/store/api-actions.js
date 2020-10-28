import {loadGenres, loadMovies, loadPromoMovie, changeGenreFilter} from "./action";

export const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
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
  api.get(`/films/promo`)
    .then(({data}) => dispatch(loadPromoMovie(data)))
);
