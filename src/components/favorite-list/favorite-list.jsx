import React, {PureComponent} from "react";
import {connect} from "react-redux";
import MovieList from "../movie-list/movie-list";
import MovieTypes from "../../types/movies";
import {myListMoviesSelector} from "../../store/selectors";
import Header from "../header/header";
import {fetchUserFavorites} from "../../store/api-actions";
import PropTypes from "prop-types";
import Footer from "../footer/footer";

class FavoriteList extends PureComponent {
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

        <Footer />
      </div>
    );
  }
}

FavoriteList.propTypes = {
  movies: MovieTypes.list,
  fetchUserFavorites: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movies: myListMoviesSelector(state),
});

const mapDispatchToProps = {
  fetchUserFavorites
};

export {FavoriteList};
export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList);
