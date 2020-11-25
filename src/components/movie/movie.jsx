import React, {Fragment, PureComponent} from "react";
import MovieList from "../movie-list/movie-list";
import MovieTypes from "../../types/movies";
import Header from "../header/header";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import Tabs from "../tabs/tabs";
import {connect} from "react-redux";
import {relatedMoviesSelector, currentMovieSelector, isUserAuthSelector} from "../../store/selectors";
import {fetchCurrentMovie, addMovieToFavorite, removeMovieFromFavorite} from "../../store/api-actions";
import {flushCurrentMovie} from "../../store/action";
import Footer from "../footer/footer";
import withActiveTab from "../../hocs/with-active-tab/with-active-tab";

const TabsWrapped = withActiveTab(Tabs);

class Movie extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCurrentMovie(this.props.id);
  }

  componentDidUpdate(prevProps) {
    if ((this.props.id && !prevProps.id) || (this.props.id && prevProps.id && prevProps.id !== this.props.id)) {
      this.props.fetchCurrentMovie(this.props.id);
    }
  }

  componentWillUnmount() {
    this.props.flushCurrentMovie();
  }

  render() {
    const {relatedMovies, onPlayButtonClick, movie, isUserAuth, addToFavorite, removeFromFavorite} = this.props;

    if (!movie) {
      return null;
    }

    let addReviewLink = null;
    let listButton = null;

    if (isUserAuth) {
      addReviewLink = <Link to={`/films/${movie.id}/review`} className="btn movie-card__button">Add review</Link>;

      if (movie.isFavorite) {
        listButton = <button className="btn btn--list movie-card__button" type="button" onClick={() => removeFromFavorite(movie.id)}>
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use href="#in-list"/>
          </svg>
          <span>My list</span>
        </button>;
      } else {
        listButton = <button className="btn btn--list movie-card__button" type="button" onClick={() => addToFavorite(movie.id)}>
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use href="#add"/>
          </svg>
          <span>My list</span>
        </button>;
      }
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
                  {listButton}
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
                <TabsWrapped movie={movie}/>
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <MovieList movies={relatedMovies}/>
          </section>

          <Footer />
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
  removeFromFavorite: PropTypes.func.isRequired,
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
    dispatch(fetchCurrentMovie(movieId));
  },
  removeFromFavorite(movieId) {
    dispatch(removeMovieFromFavorite(movieId));
    dispatch(fetchCurrentMovie(movieId));
  }
});

export {Movie};
export default connect(mapStateToProps, mapDispatchToProps)(Movie);
