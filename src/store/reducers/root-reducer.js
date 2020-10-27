import {combineReducers} from "redux";
import {oldData} from "./old-data/old-data";
import {genresData} from "./genres-data/genres-data";

export const NameSpace = {
  OLD: `OLD`,
  GENRES: `GENRES`
};

export default combineReducers({
  [NameSpace.OLD]: oldData,
  [NameSpace.GENRES]: genresData,
});
