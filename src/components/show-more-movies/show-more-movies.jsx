import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const ShowMoreMovies = ({nextItemId, currentGenreId, showMore}) => {
  function handleClick(evt) {
    evt.preventDefault();
    showMore(currentGenreId, nextItemId);
  }

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={(evt) => handleClick(evt)}>Show more</button>
    </div>
  );
};

ShowMoreMovies.propTypes = {
  nextItemId: PropTypes.number.isRequired,
  currentGenreId: PropTypes.number.isRequired,
  showMore: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentGenreId: state.filterGenreId,
});

const mapDispatchToProps = (dispatch) => ({
  showMore(genreId, nextItemId) {
    dispatch(ActionCreator.showMoreMovies(genreId, nextItemId));
  },
});

export {ShowMoreMovies};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreMovies);
