import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import App from "./components/app/app";
import rootReducer from "./store/reducers/root-reducer";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {fetchMoviesList, fetchPromoMovie} from "./store/api-actions";

const api = createAPI();

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

Promise.all([
  store.dispatch(fetchMoviesList()),
  store.dispatch(fetchPromoMovie())
]).then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector(`#root`)
  );
});
