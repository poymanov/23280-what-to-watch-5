import React from "react";
import {Route, Switch, Router as BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import FavoriteList from "../favorite-list/favorite-list";
import Movie from "../movie/movie";
import AddReview from "../add-review/add-review";
import Player from "../player/player";
import withPlayerControls from "../../hocs/with-player-controls/with-player-controls";
import {connect} from "react-redux";
import {currentPlayerMovieSelector} from "../../store/selectors";
import PrivateRoute from "../private-route/private-route";
import GuestRoute from "../guest-route/guest-route";
import MovieTypes from "../../types/movies";
import browserHistory from "../../etc/browser-history";

const App = (props) => {
  const {movie} = props;

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path="/" exact render={({history}) => (
          <Main
            onPlayButtonClick={(movieId) => history.push(`/player/` + movieId)}
          />
        )} />
        <GuestRoute path="/login" exact render={() => <SignIn />}/>
        <PrivateRoute path="/mylist" exact render={() => <FavoriteList />} />
        <Route path="/films/:id" exact render={({history, match}) => (
          <Movie id={match.params.id} onPlayButtonClick={(movieId) => history.push(`/player/` + movieId)} />
        )} />
        <PrivateRoute path="/films/:id/review" exact render={({match}) => <AddReview id={match.params.id}/>} />
        <Route path="/player/:id" exact render={({history}) => {
          const PlayerWrapped = withPlayerControls(Player);

          return <PlayerWrapped
            movie={movie}
            onPlayerClose={() => history.goBack()}
          />;
        }} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  movie: MovieTypes.item,
};

const mapStateToProps = (state) => ({
  movie: currentPlayerMovieSelector(state)
});

export {App};
export default connect(mapStateToProps)(App);
