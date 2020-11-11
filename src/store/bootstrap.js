import {createAPI} from "../services/api";
import {requireAuthorization} from "./action";
import {AuthorizationStatus} from "../constants/const";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "../store/reducers/root-reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {redirect} from "./middlewares/redirect";

export const initStore = () => {
  const api = createAPI(
      () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
  );

  const store = createStore(
      rootReducer,
      composeWithDevTools(
          applyMiddleware(thunk.withExtraArgument(api)),
          applyMiddleware(redirect)
      )
  );

  return store;
};
