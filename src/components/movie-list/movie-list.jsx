import React, {PureComponent, Fragment} from "react";
import MovieItem from "../movie-item/movie-item";
import MovieTypes from "../../types/movies";
import ShowMoreMovies from "../show-more-movies/show-more-movies";

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
    let showMore = null;

    if (movies.pagination.hasNext) {
      showMore = <ShowMoreMovies nextItemId={movies.pagination.lastItemId} />;
    }

    return (
      <Fragment>
        <div className="catalog__movies-list">
          {movies.items.map((movie) => <MovieItem key={movie.id} movie={movie} onMovieHover={this.handleActiveMovie} onMovieLeave={this.handleDeactivateMovie} isShowTrailer={this.state.activeMovieId === movie.id} />)}
        </div>
        {showMore}
      </Fragment>
    );
  }
}

MovieList.propTypes = {
  movies: MovieTypes.list
};

export default MovieList;
