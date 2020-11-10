import React, {PureComponent} from "react";
import {connect} from "react-redux";
import MovieList from "../movie-list/movie-list";
import MovieTypes from "../../types/movies";
import {myListMoviesSelector} from "../../store/selectors";
import Header from "../header/header";
import {fetchUserFavorites} from "../../store/api-actions";
import PropTypes from "prop-types";

class MyList extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUserFavorites();
  }

  render() {
    const {movies} = this.props;
    return (
      <div className="user-page">
        <Header><h1 className="page-title user-page__title">My list</h1></Header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <MovieList movies={movies}/>
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
    );
  }
}

MyList.propTypes = {
  movies: MovieTypes.list,
  fetchUserFavorites: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movies: myListMoviesSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserFavorites() {
    dispatch(fetchUserFavorites());
  },
});

export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
