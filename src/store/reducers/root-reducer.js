import {combineReducers} from "redux";
import {genresData} from "./genres-data/genres-data";
import {moviesData} from "./movies-data/movies-data";

export const NameSpace = {
  GENRES: `GENRES`,
  MOVIES: `MOVIES`,
};

export default combineReducers({
  [NameSpace.GENRES]: genresData,
  [NameSpace.MOVIES]: moviesData,
});
