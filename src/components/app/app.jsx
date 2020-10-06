import React from "react";
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import Film from "../film/film";
import AddReview from "../add-review/add-review";
import Player from "../player/player";

const App = (props) => {
  const {promoMovie, genres, movies, relatedMovies, userMovies} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main
            promoMovie={promoMovie}
            genres={genres}
            movies={movies}
          />
        </Route>
        <Route path="/login" exact>
          <SignIn />
        </Route>
        <Route path="/my-list" exact>
          <MyList userMovies={userMovies} />
        </Route>
        <Route path="/films/:id" exact>
          <Film relatedMovies={relatedMovies} />
        </Route>
        <Route path="/films/:id/review" exact>
          <AddReview />
        </Route>
        <Route path="/player/:id" exact>
          <Player />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  promoMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired
  }).isRequired,
  genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired
      })
  ).isRequired,
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
      })
  ).isRequired,
  relatedMovies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
      })
  ).isRequired,
  userMovies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
      })
  ).isRequired,
};

export default App;
