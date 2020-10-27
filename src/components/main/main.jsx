import React, {Fragment} from "react";
import {connect} from "react-redux";
import MovieList from "../movie-list/movie-list";
import MovieTypes from "../../types/movies";
import GenreList from "../genre-list/genre-list";
import Header from "../header/header";
import PropTypes from 'prop-types';
import PromoMovie from "../promo-movie/promo-movie";

const Main = (props) => {
  const {movies, onPlayButtonClick} = props;

  return (
    <Fragment>
      <section className="movie-card">
        <h1 className="visually-hidden">WTW</h1>
        <Header />
        <PromoMovie onPlayButtonClick={onPlayButtonClick} />
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList/>
          <MovieList movies={movies} />
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
  movies: MovieTypes.list,
  onPlayButtonClick: PropTypes.func.isRequired
};

const mapStateToProps = ({OLD}) => ({
  movies: OLD.moviesByGenre,
});

export {Main};
export default connect(mapStateToProps)(Main);
