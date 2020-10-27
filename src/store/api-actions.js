import {loadGenres, loadMovies} from "./action";

export const fetchMoviesList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => {
      dispatch(loadMovies(data));
      dispatch(loadGenres(data));
    })
);
