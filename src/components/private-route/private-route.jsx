import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppRoute} from "../../constants/const";
import {isUserAuthSelector} from "../../store/selectors";

const PrivateRoute = ({render, path, exact, isUserAuth, component: Component}) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        if (isUserAuth) {
          if (render) {
            return render(routeProps);
          } else {
            return <Component />;
          }
        } else {
          return <Redirect to={AppRoute.LOGIN} />;
        }
      }}
    />
  );
};

PrivateRoute.propTypes = {
  isUserAuth: PropTypes.bool.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func,
  component: PropTypes.object
};

const mapStateToProps = (state) => ({
  isUserAuth: isUserAuthSelector(state),
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
