import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import App from "./components/app/app";
import movies from "./mocks/movies";
import rootReducer from "./store/reducers/root-reducer";
import {paginateMovies} from "./movies";
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
        <App
          relatedMovies={paginateMovies(movies, 0)}
          userMovies={paginateMovies(movies, 0)}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
});
