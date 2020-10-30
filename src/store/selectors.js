import {NameSpace} from "./reducers/root-reducer";

export const mainMoviesSelector = (state) => {
  return state[NameSpace.MOVIES].main;
};

export const myListMoviesSelector = (state) => {
  return state[NameSpace.MOVIES].main;
};

export const relatedMoviesSelector = (state) => {
  return state[NameSpace.MOVIES].main;
};

export const promoMovieSelector = (state) => {
  return state[NameSpace.MOVIES].promo;
};

export const currentFilterIdSelector = (state) => {
  return state[NameSpace.MOVIES].filterGenreId;
};

