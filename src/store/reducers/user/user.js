import {AuthorizationStatus} from "../../../const";
import {extend} from "../../../utils";
import {ActionType} from "../../action";
import {buildUser} from "../../../user";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  currentUser: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.LOAD_USER:
      return extend(state, {
        currentUser: buildUser(action.payload),
      });
  }

  return state;
};

export {user};
