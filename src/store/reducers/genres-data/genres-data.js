import {ActionType} from "../../action";
import {extend} from "../../../utils";
import {getByMovies} from "../../../genres";

const initialState = {
  genres: [],
};

const genresData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_GENRES:
      return extend(state, {
        genres: getByMovies(action.payload),
      });
  }

  return state;
};

export {genresData};
