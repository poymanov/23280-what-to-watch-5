import {NameSpace} from "./reducers/root-reducer";
import {createSelector} from 'reselect';

export const moviesSelector = (state) => {
  return state[NameSpace.MOVIES].list;
};

export const currentFilterIdSelector = (state) => {
  return state[NameSpace.MOVIES].filterGenreId;
};

export const moviesByGenreSelector = createSelector(
    moviesSelector, currentFilterIdSelector, (movies, genreId) => {
      return genreId === `All` ? movies : movies.filter((movie) => movie.genre === genreId);
    }
);

export const myListMoviesSelector = (state) => {
  return state[NameSpace.MOVIES].list;
};

export const relatedMoviesSelector = (state) => {
  return state[NameSpace.MOVIES].list;
};

export const promoMovieSelector = (state) => {
  return state[NameSpace.MOVIES].promo;
};

export const currentMovieSelector = (state) => {
  return state[NameSpace.MOVIES].currentMovie;
};
