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
import {fetchMoviesList} from "./store/api-actions";

const api = createAPI();

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(fetchMoviesList());

ReactDOM.render(
    <Provider store={store}>
      <App
        promoMovie={movies[0]}
        relatedMovies={paginateMovies(movies, 0)}
        userMovies={paginateMovies(movies, 0)}
      />
    </Provider>,
    document.querySelector(`#root`)
);
