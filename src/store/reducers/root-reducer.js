import {combineReducers} from "redux";
import {genresData} from "./genres-data/genres-data";
import {moviesData} from "./movies-data/movies-data";
import {user} from "./user/user";

export const NameSpace = {
  GENRES: `GENRES`,
  MOVIES: `MOVIES`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.GENRES]: genresData,
  [NameSpace.MOVIES]: moviesData,
  [NameSpace.USER]: user
});
