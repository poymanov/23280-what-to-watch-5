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
    const {render, path, exact, isUserAuth, component: Component} = this.props;

    return (
      <Route
        path={path}
        exact={exact}
        render={(routeProps) => {
          if (isUserAuth) {
            return <Redirect to={AppRoute.ROOT}/>;
          } else {
            if (render) {
              return render(routeProps);
            } else {
              return <Component />;
            }
          }
        }}
      />
    );
  }
}


GuestRoute.propTypes = {
  isUserAuth: PropTypes.bool.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func,
  checkAuth: PropTypes.func.isRequired,
  component: PropTypes.object
};

const mapStateToProps = (state) => ({
  isUserAuth: isUserAuthSelector(state),
});

const mapDispatchToProps = {
  checkAuth
};

export {GuestRoute};
export default connect(mapStateToProps, mapDispatchToProps)(GuestRoute);
