import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import movies from "./mocks/movies";
import genres from "./mocks/genres";

ReactDOM.render(
    <App
      promoMovie={movies[0]}
      genres={genres}
      movies={movies}
      relatedMovies={movies.slice(0, 4)}
      userMovies={movies.slice(0, 9)}
    />,
    document.querySelector(`#root`)
);
