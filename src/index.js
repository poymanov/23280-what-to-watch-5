import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app";
import movies from "./mocks/movies";
import {reducer} from "./store/reducer";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        promoMovie={movies[0]}
        relatedMovies={movies.slice(0, 4)}
        userMovies={movies.slice(0, 9)}
      />
    </Provider>,
    document.querySelector(`#root`)
);
