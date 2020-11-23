import React, {Fragment, PureComponent} from "react";
import {TabsData, TabsList} from "../../etc/tabs.data";
import MovieOverview from "../movie-overview/movie-overview";
import MovieDetails from "../movie-details/movie-details";
import MovieReviews from "../movie-reviews/movie-reviews";
import MovieTypes from "../../types/movies";
import {Link} from "react-router-dom";

class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: TabsData.OVERVIEW,
    };

    this.handleClickTab = this.handleClickTab.bind(this);
    this.renderTab = this.renderTab.bind(this);
  }

  handleClickTab(evt, tab) {
    evt.preventDefault();
    this.setState({activeTab: tab});
  }

  renderTab() {
    const {activeTab} = this.state;
    const {movie} = this.props;

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

  render() {
    return (
      <Fragment>
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {TabsList.map((tab) => <li key={tab.alias} className={`movie-nav__item ` + (this.state.activeTab === tab.alias ? `movie-nav__item--active` : ``)}>
              <Link to="/" className="movie-nav__link" onClick={(evt) => this.handleClickTab(evt, tab.alias)}>{tab.title}</Link>
            </li>)}
          </ul>
        </nav>
        {this.renderTab()}
      </Fragment>
    );
  }
}

Tabs.propTypes = {
  movie: MovieTypes.item,
};

export default Tabs;
