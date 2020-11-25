import React from "react";
import PropTypes from "prop-types";

const ShowMoreMovies = ({onShowMore}) => {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={() => onShowMore()}>Show more</button>
    </div>
  );
};

ShowMoreMovies.propTypes = {
  onShowMore: PropTypes.func.isRequired,
};

export default ShowMoreMovies;
