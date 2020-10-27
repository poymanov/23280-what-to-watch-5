import {combineReducers} from "redux";
import {oldData} from "./old-data/old-data";
import {genresData} from "./genres-data/genres-data";
import {moviesData} from "./movies-data/movies-data";

export const NameSpace = {
  OLD: `OLD`,
  GENRES: `GENRES`,
  MOVIES: `MOVIES`
};

export default combineReducers({
  [NameSpace.OLD]: oldData,
  [NameSpace.GENRES]: genresData,
  [NameSpace.MOVIES]: moviesData,
});
