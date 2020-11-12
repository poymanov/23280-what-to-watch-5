import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppRoute} from "../../constants/const";
import {isUserAuthSelector} from "../../store/selectors";

const PrivateRoute = (props) => {
  const {render, path, exact, isUserAuth} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          isUserAuth ? render(routeProps) : <Redirect to={AppRoute.LOGIN} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  isUserAuth: PropTypes.bool.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isUserAuth: isUserAuthSelector(state),
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
