import React, {Fragment} from "react";
import {connect} from "react-redux";
import MovieList from "../movie-list/movie-list";
import MovieTypes from "../../types/movies";
import GenreList from "../genre-list/genre-list";
import Header from "../header/header";
import PropTypes from 'prop-types';

const Main = (props) => {
  const {promoMovie, movies, onPlayButtonClick} = props;

  return (
    <Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={promoMovie.preview} alt={promoMovie.title}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={promoMovie.poster} alt={promoMovie.title + ` poster`} width="218" height="327"/>
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{promoMovie.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promoMovie.genre}</span>
                <span className="movie-card__year">{promoMovie.year}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={() => onPlayButtonClick(1)}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use href="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use href="#add" />
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList/>
          <MovieList movies={movies} />
          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
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
};

Main.propTypes = {
  promoMovie: MovieTypes.promoItem,
  movies: MovieTypes.list,
  onPlayButtonClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  movies: state.moviesByGenre,
});

export {Main};
export default connect(mapStateToProps)(Main);
