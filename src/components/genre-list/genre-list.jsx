import React from "react";
import GenreTypes from "../../types/genres";
import GenreItem from "../genre-item/genre-item";
import {connect} from "react-redux";
import {changeGenreFilter} from "../../store/action";
import PropTypes from "prop-types";

const GenreList = ({genres, activeGenreId, changeGenre}) => {
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => <GenreItem key={genre.id} genre={genre} isActive={genre.id === activeGenreId} onGenreClick={changeGenre}/>)}
    </ul>
  );
};

GenreList.propTypes = {
  genres: GenreTypes.list,
  activeGenreId: PropTypes.string.isRequired,
  changeGenre: PropTypes.func.isRequired,
};

const mapStateToProps = ({GENRES, MOVIES}) => ({
  activeGenreId: MOVIES.filterGenreId,
  genres: GENRES.genres,
});

const mapDispatchToProps = (dispatch) => ({
  changeGenre(genreId) {
    dispatch(changeGenreFilter(genreId));
  },
});

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
