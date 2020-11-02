import React from "react";
import {Route, Switch, Router as BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import MyList from "../my-list/my-list";
import Movie from "../movie/movie";
import AddReview from "../add-review/add-review";
import Player from "../player/player";
import withFullscreen from "../../hocs/with-fullscreen";
import withPlayerControls from "../../hocs/with-player-controls";
import {connect} from "react-redux";
import {promoMovieSelector} from "../../store/selectors";
import PrivateRoute from "../private-route/private-route";
import MovieTypes from "../../types/movies";
import browserHistory from "../../browser-history";

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
        <Route path="/login" exact>
          <SignIn />
        </Route>
        <Route path="/my-list" exact>
          <MyList />
        </Route>
        <Route path="/films/:id" exact render={({history, match}) => (
          <Movie id={match.params.id} onPlayButtonClick={(movieId) => history.push(`/player/` + movieId)} />
        )} />
        <PrivateRoute path="/films/:id/review" exact render={() => <AddReview />} />
        <Route path="/player/:id" exact render={({history}) => {
          const PlayerWrapped = withFullscreen(withPlayerControls(Player));

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
  movie: promoMovieSelector(state)
});

export {App};
export default connect(mapStateToProps)(App);
