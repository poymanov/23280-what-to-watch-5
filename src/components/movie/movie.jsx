import React, {Fragment, PureComponent} from "react";
import MovieList from "../movie-list/movie-list";
import MovieTypes from "../../types/movies";
import Header from "../header/header";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import Tabs from "../tabs/tabs";
import {connect} from "react-redux";
import {relatedMoviesSelector, currentMovieSelector, isUserAuthSelector} from "../../store/selectors";
import {fetchCurrentMovie, addMovieToFavorite} from "../../store/api-actions";
import {flushCurrentMovie} from "../../store/action";

class Movie extends PureComponent {
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
    const {relatedMovies, onPlayButtonClick, movie, isUserAuth, addToFavorite} = this.props;

    if (!movie) {
      return null;
    }

    let addReviewLink = null;
    let addToListButton = null;

    if (isUserAuth) {
      addReviewLink = <Link to={`/films/${movie.id}/review`} className="btn movie-card__button">Add review</Link>;

      addToListButton = <button className="btn btn--list movie-card__button" type="button" onClick={() => addToFavorite(movie.id)}>
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use href="#add"/>
        </svg>
        <span>My list</span>
      </button>;
    }

    return (
      <Fragment>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg" style={{backgroundColor: movie.backgroundColor}}>
              <img src={movie.backgroundImage} alt={movie.name}/>
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <Header/>

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{movie.name}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{movie.genre}</span>
                  <span className="movie-card__year">{movie.released}</span>
                </p>

                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button" onClick={() => onPlayButtonClick(movie.id)}>
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use href="#play-s"/>
                    </svg>
                    <span>Play</span>
                  </button>
                  {addToListButton}
                  {addReviewLink}
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={movie.posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327"/>
              </div>

              <div className="movie-card__desc">
                <Tabs movie={movie}/>
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <MovieList movies={relatedMovies}/>
          </section>

          <footer className="page-footer">
            <div className="logo">
              <a href="/" className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </Fragment>
    );
  }
}

Movie.propTypes = {
  movie: MovieTypes.item,
  id: PropTypes.string.isRequired,
  relatedMovies: MovieTypes.list,
  onPlayButtonClick: PropTypes.func.isRequired,
  fetchCurrentMovie: PropTypes.func.isRequired,
  flushCurrentMovie: PropTypes.func.isRequired,
  addToFavorite: PropTypes.func.isRequired,
  isUserAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  relatedMovies: relatedMoviesSelector(state),
  movie: currentMovieSelector(state),
  isUserAuth: isUserAuthSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentMovie(movieId) {
    dispatch(fetchCurrentMovie(movieId));
  },
  flushCurrentMovie() {
    dispatch(flushCurrentMovie());
  },
  addToFavorite(movieId) {
    dispatch(addMovieToFavorite(movieId));
  }
});

export {Movie};
export default connect(mapStateToProps, mapDispatchToProps)(Movie);
