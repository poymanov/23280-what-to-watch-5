import React from "react";
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import Film from "../film/film";
import AddReview from "../add-review/add-review";
import Player from "../player/player";
import MovieTypes from "../../types/movies";

const App = (props) => {
  const {promoMovie, genres, movies, relatedMovies, userMovies} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={({history}) => (
          <Main
            promoMovie={promoMovie}
            genres={genres}
            movies={movies}
            onPlayButtonClick={(movieId) => history.push(`/player/` + movieId)}
          />
        )} />
        <Route path="/login" exact>
          <SignIn />
        </Route>
        <Route path="/my-list" exact>
          <MyList userMovies={userMovies} />
        </Route>
        <Route path="/films/:id" exact render={({history}) => (
          <Film
            relatedMovies={relatedMovies}
            onPlayButtonClick={(movieId) => history.push(`/player/` + movieId)}
          />
        )} />
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
  promoMovie: MovieTypes.promoItem,
  genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired
      })
  ).isRequired,
  movies: MovieTypes.list,
  relatedMovies: MovieTypes.list,
  userMovies: MovieTypes.list,
};

export default App;
