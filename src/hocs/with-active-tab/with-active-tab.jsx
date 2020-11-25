import React, {PureComponent} from "react";
import {TabsData} from "../../etc/tabs.data";
import MovieTypes from "../../types/movies";

const withActiveTab = (Component) => {
  class WithActiveTab extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: TabsData.OVERVIEW,
      };

      this.handleClickTab = this.handleClickTab.bind(this);
    }

    handleClickTab(tab) {
      this.setState({activeTab: tab});
    }

    render() {
      const {movie} = this.props;
      const {activeTab} = this.state;

      return (
        <Component movie={movie} onClickTab={this.handleClickTab} activeTab={activeTab} />
      );
    }
  }

  WithActiveTab.propTypes = {
    movie: MovieTypes.item
  };

  return WithActiveTab;
};

export default withActiveTab;
