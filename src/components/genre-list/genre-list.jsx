import React from "react";
import GenreTypes from "../../types/genres";
import GenreItem from "../genre-item/genre-item";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import PropTypes from "prop-types";

const GenreList = (props) => {
  const {genres, activeGenreId, changeGenre} = props;
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => <GenreItem key={genre.id} genre={genre} isActive={genre.id === activeGenreId} handleGenreClick={changeGenre}/>)}
    </ul>
  );
};

GenreList.propTypes = {
  genres: GenreTypes.list,
  activeGenreId: PropTypes.string.isRequired,
  changeGenre: PropTypes.func.isRequired,
};

const mapStateToProps = ({OLD, GENRES}) => ({
  activeGenreId: OLD.filterGenreId,
  genres: GENRES.genres,
});

const mapDispatchToProps = (dispatch) => ({
  changeGenre(genreId) {
    dispatch(ActionCreator.changeMoviesFilter(genreId));
  },
});

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
