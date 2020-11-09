import React, {PureComponent} from "react";
import MovieTypes from "../../types/movies";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeMovieId: -1,
      };

      this.handleActiveMovie = this.handleActiveMovie.bind(this);
      this.handleDeactivateMovie = this.handleDeactivateMovie.bind(this);
    }

    handleActiveMovie(id) {
      this.setState({activeMovieId: id});
    }

    handleDeactivateMovie() {
      this.setState({activeMovieId: -1});
    }

    render() {
      const {movie} = this.props;

      return (
        <Component movie={movie}
          onMovieHover={this.handleActiveMovie}
          onMovieLeave={this.handleDeactivateMovie}
          isShowTrailer={this.state.activeMovieId === movie.id}
        />
      );
    }
  }

  WithActiveItem.propTypes = {
    movie: MovieTypes.item
  };

  return WithActiveItem;
};

export default withActiveItem;
