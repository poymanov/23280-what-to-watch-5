import React from "react";
import PropTypes from "prop-types";

const ShowMoreMovies = ({handleShowMore}) => {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={() => handleShowMore()}>Show more</button>
    </div>
  );
};

ShowMoreMovies.propTypes = {
  handleShowMore: PropTypes.func.isRequired,
};

export default ShowMoreMovies;
