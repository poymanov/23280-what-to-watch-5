import React, {Fragment, PureComponent} from "react";
import MovieTypes from "../../types/movies";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {fetchPromoMovie, addMovieToFavorite} from "../../store/api-actions";
import {isUserAuthSelector, promoMovieSelector} from "../../store/selectors";

class PromoMovie extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPromoMovie();
  }

  render() {
    const {promo, onPlayButtonClick, isUserAuth, addToFavorite} = this.props;

    if (!promo) {
      return null;
    }

    let addToListButton = null;

    if (isUserAuth) {
      addToListButton = <button className="btn btn--list movie-card__button" type="button" onClick={() => addToFavorite(promo.id)}>
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use href="#add"/>
        </svg>
        <span>My list</span>
      </button>;
    }

    return (
      <Fragment>
        <div className="movie-card__bg" style={{backgroundColor: promo.backgroundColor}}>
          <img src={promo.backgroundImage} alt={promo.name}/>
        </div>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={promo.posterImage} alt={promo.name + ` poster`} width="218" height="327"/>
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{promo.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promo.genre}</span>
                <span className="movie-card__year">{promo.released}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={() => onPlayButtonClick(1)}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use href="#play-s"/>
                  </svg>
                  <span>Play</span>
                </button>
                {addToListButton}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

PromoMovie.propTypes = {
  promo: MovieTypes.promo,
  onPlayButtonClick: PropTypes.func.isRequired,
  fetchPromoMovie: PropTypes.func.isRequired,
  isUserAuth: PropTypes.bool.isRequired,
  addToFavorite: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  promo: promoMovieSelector(state),
  isUserAuth: isUserAuthSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchPromoMovie() {
    dispatch(fetchPromoMovie());
  },
  addToFavorite(movieId) {
    dispatch(addMovieToFavorite(movieId));
  }
});

export {PromoMovie};
export default connect(mapStateToProps, mapDispatchToProps)(PromoMovie);
