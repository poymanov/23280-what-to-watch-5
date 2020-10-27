import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import Movie from "../movie/movie";
import AddReview from "../add-review/add-review";
import Player from "../player/player";
import MovieTypes from "../../types/movies";
import movies from "../../mocks/movies";
import withFullscreen from "../../hocs/with-fullscreen";
import withPlayerControls from "../../hocs/with-player-controls";

const App = (props) => {
  const {promoMovie, relatedMovies, userMovies} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={({history}) => (
          <Main
            promoMovie={promoMovie}
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
          <Movie
            movie={movies[0]}
            relatedMovies={relatedMovies}
            onPlayButtonClick={(movieId) => history.push(`/player/` + movieId)}
          />
        )} />
        <Route path="/films/:id/review" exact>
          <AddReview />
        </Route>
        <Route path="/player/:id" exact render={({history}) => {
          const PlayerWrapped = withFullscreen(withPlayerControls(Player));

          return <PlayerWrapped
            movie={movies[0]}
            onPlayerClose={() => history.goBack()}
          />;
        }} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  promoMovie: MovieTypes.promoItem,
  relatedMovies: MovieTypes.list,
  userMovies: MovieTypes.list,
};

export default App;
