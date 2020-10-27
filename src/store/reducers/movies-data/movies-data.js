import {ActionType} from "../../action";
import {extend} from "../../../utils";
import {buildMovie} from "../../../movies";

const initialState = {
  promo: null,
};

const moviesData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_PROMO_MOVIE:
      return extend(state, {
        promo: buildMovie(action.payload),
      });
  }

  return state;
};

export {moviesData};

