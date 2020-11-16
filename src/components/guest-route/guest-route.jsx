import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppRoute} from "../../constants/const";
import {isUserAuthSelector} from "../../store/selectors";
import {checkAuth} from "../../store/api-actions";

class GuestRoute extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.checkAuth();
  }

  render() {
    const {render, path, exact, isUserAuth} = this.props;

    return (
      <Route
        path={path}
        exact={exact}
        render={(routeProps) => {
          return (
            isUserAuth ? <Redirect to={AppRoute.ROOT}/> : render(routeProps)
          );
        }}
      />
    );
  }
}


GuestRoute.propTypes = {
  isUserAuth: PropTypes.bool.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  checkAuth: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isUserAuth: isUserAuthSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  checkAuth() {
    dispatch(checkAuth());
  },
});

export {GuestRoute};
export default connect(mapStateToProps, mapDispatchToProps)(GuestRoute);
