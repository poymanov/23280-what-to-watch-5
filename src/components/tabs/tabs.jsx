import React, {Fragment} from "react";
import {TabsData, TabsList} from "../../etc/tabs.data";
import MovieOverview from "../movie-overview/movie-overview";
import MovieDetails from "../movie-details/movie-details";
import MovieReviews from "../movie-reviews/movie-reviews";
import MovieTypes from "../../types/movies";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const Tabs = ({movie, onClickTab, activeTab}) => {
  function renderTab() {
    switch (activeTab) {
      case TabsData.OVERVIEW:
        return <MovieOverview movie={movie} />;
      case TabsData.DETAILS:
        return <MovieDetails movie={movie} />;
      case TabsData.REVIEWS:
        return <MovieReviews movie={movie} />;
    }

    return null;
  }

  function handleClickTab(evt, tab) {
    evt.preventDefault();
    onClickTab(tab);
  }

  return (
    <Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {TabsList.map((tab) => <li key={tab.alias} className={`movie-nav__item ` + (activeTab === tab.alias ? `movie-nav__item--active` : ``)}>
            <Link to="/" className="movie-nav__link" onClick={(evt) => handleClickTab(evt, tab.alias)}>{tab.title}</Link>
          </li>)}
        </ul>
      </nav>
      {renderTab()}
    </Fragment>
  );
};

Tabs.propTypes = {
  movie: MovieTypes.item,
  onClickTab: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired
};

export default Tabs;
