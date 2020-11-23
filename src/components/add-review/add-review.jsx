import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import ReviewForm from "../review-form/review-form";
import Header from "../header/header";
import PropTypes from "prop-types";
import MovieTypes from "../../types/movies";
import {currentMovieSelector} from "../../store/selectors";
import {fetchCurrentMovie} from "../../store/api-actions";
import {flushCurrentMovie} from "../../store/action";
import {connect} from "react-redux";

class AddReview extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCurrentMovie(this.props.id);
  }

  componentWillUnmount() {
    this.props.flushCurrentMovie();
  }

  render() {
    const {movie, id} = this.props;

    if (!movie) {
      return null;
    }

    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg" style={{backgroundColor: movie.backgroundColor}}>
            <img src={movie.backgroundImage} alt={movie.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header>
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`/films/` + movie.id} className="breadcrumbs__link">{movie.name}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <Link to={`/films/` + movie.id + `/review`} className="breadcrumbs__link">Add review</Link>
                </li>
              </ul>
            </nav>
          </Header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={movie.posterImage} alt={movie.name} width="218" height="327"/>
          </div>
        </div>

        <div className="add-review">
          <ReviewForm id={id}/>
        </div>

      </section>
    );
  }
}

AddReview.propTypes = {
  id: PropTypes.string.isRequired,
  movie: MovieTypes.item,
  fetchCurrentMovie: PropTypes.func.isRequired,
  flushCurrentMovie: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movie: currentMovieSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentMovie(movieId) {
    dispatch(fetchCurrentMovie(movieId));
  },
  flushCurrentMovie() {
    dispatch(flushCurrentMovie());
  },
});

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
