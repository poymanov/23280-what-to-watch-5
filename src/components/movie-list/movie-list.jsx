import React, {PureComponent} from "react";
import MovieItem from "../movie-item/movie-item";
import MovieTypes from "../../types/movies";

class MovieList extends PureComponent {
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
    const {movies} = this.props;
    return (
      <div className="catalog__movies-list">
        {movies.map((movie) => <MovieItem key={movie.id} movie={movie} onMovieHover={this.handleActiveMovie} onMovieLeave={this.handleDeactivateMovie} isShowTrailer={this.state.activeMovieId === movie.id} />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: MovieTypes.list
};

export default MovieList;
