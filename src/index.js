import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app";
import movies from "./mocks/movies";
import {reducer} from "./store/reducer";
import {filterMoviesByGenreId} from "./movies";


const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        promoMovie={filterMoviesByGenreId(movies, 0, 0).items[0]}
        relatedMovies={filterMoviesByGenreId(movies, 0, 0)}
        userMovies={filterMoviesByGenreId(movies, 0, 0)}
      />
    </Provider>,
    document.querySelector(`#root`)
);
