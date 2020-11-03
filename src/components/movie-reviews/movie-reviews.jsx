import React, {PureComponent} from "react";
import MovieTypes from "../../types/movies";
import {connect} from "react-redux";
import {fetchMovieReviews} from "../../store/api-actions";
import PropTypes from "prop-types";
import MovieReview from "../movie-review/movie-review";

class MovieReviews extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMovieReviews(this.props.movie.id);
  }

  render() {
    const {reviews} = this.props;

    if (!reviews) {
      return null;
    }

    return (
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {reviews.map((review) => <MovieReview key={review.id} review={review} />)}
        </div>
      </div>
    );
  }
}

MovieReviews.propTypes = {
  movie: MovieTypes.item,
  fetchMovieReviews: PropTypes.func.isRequired,
  reviews: MovieTypes.reviewsList
};

const mapStateToProps = ({MOVIES}) => ({
  reviews: MOVIES.currentMovieReviews,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovieReviews(movieId) {
    dispatch(fetchMovieReviews(movieId));
  },
});

export {MovieReviews};
export default connect(mapStateToProps, mapDispatchToProps)(MovieReviews);

