import React, {Fragment, PureComponent} from "react";
import MovieTypes from "../../types/movies";
import ShowMoreMovies from "../../components/show-more-movies/show-more-movies";

const MOVIES_PER_PAGE = 8;

const withPagination = (Component) => {
  class WithPagination extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        lastPosition: MOVIES_PER_PAGE
      };

      this.handleShowMore = this.handleShowMore.bind(this);
    }

    componentDidUpdate(prevProps) {
      if (this.props.movies !== prevProps.movies) {
        this.setState({lastPosition: MOVIES_PER_PAGE});
      }
    }

    handleShowMore() {
      this.setState((state) => ({
        lastPosition: state.lastPosition + MOVIES_PER_PAGE,
      }));
    }

    render() {
      const {movies} = this.props;
      const {lastPosition} = this.state;

      if (movies.length === 0) {
        return null;
      }

      const paginateMovies = movies.slice(0, lastPosition);

      let showMore = null;

      if (movies.length > paginateMovies.length) {
        showMore = <ShowMoreMovies onShowMore={this.handleShowMore} />;
      }

      return (
        <Fragment>
          <Component movies={paginateMovies} />
          {showMore}
        </Fragment>
      );
    }
  }

  WithPagination.propTypes = {
    movies: MovieTypes.list
  };

  return WithPagination;
};

export default withPagination;
