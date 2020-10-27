import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const ShowMoreMovies = ({nextItemId, currentGenreId, showMore}) => {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={() => showMore(currentGenreId, nextItemId)}>Show more</button>
    </div>
  );
};

ShowMoreMovies.propTypes = {
  nextItemId: PropTypes.number.isRequired,
  currentGenreId: PropTypes.string.isRequired,
  showMore: PropTypes.func.isRequired,
};

const mapStateToProps = ({OLD}) => ({
  currentGenreId: OLD.filterGenreId,
});

const mapDispatchToProps = (dispatch) => ({
  showMore(genreId, nextItemId) {
    dispatch(ActionCreator.showMoreMovies(genreId, nextItemId));
  },
});

export {ShowMoreMovies};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreMovies);
