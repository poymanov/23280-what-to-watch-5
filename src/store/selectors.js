import {NameSpace} from "./reducers/root-reducer";
import {createSelector} from 'reselect';
import {AuthorizationStatus} from "../const";

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
  return state[NameSpace.MOVIES].userFavorites;
};

export const relatedMoviesSelector = (state) => {
  return state[NameSpace.MOVIES].currentMovieRelated;
};

export const promoMovieSelector = (state) => {
  return state[NameSpace.MOVIES].promo;
};

export const currentMovieSelector = (state) => {
  return state[NameSpace.MOVIES].currentMovie;
};

export const isUserAuthSelector = (state) => {
  return state[NameSpace.USER].authorizationStatus === AuthorizationStatus.AUTH;
};

export const authFormErrorSelector = (state) => {
  return state[NameSpace.USER].authFormError;
};
