import React, {PureComponent} from "react";
import {connect} from "react-redux";
import UserTypes from "../../types/user";
import AuthUser from "../auth-user/auth-user";
import NotAuthUser from "../not-auth-user/not-auth-user";
import {Link} from "react-router-dom";
import {checkAuth} from "../../store/api-actions";
import PropTypes from "prop-types";

class Header extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.checkAuth();
  }

  render() {
    const {currentUser, children} = this.props;

    const userBlock = currentUser ? <AuthUser currentUser={currentUser}/> : <NotAuthUser/>;

    return (
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
        {children}
        {userBlock}
      </header>
    );
  }
}

Header.propTypes = {
  currentUser: UserTypes.currentUser,
  checkAuth: PropTypes.func.isRequired,
  children: PropTypes.node,
};

const mapStateToProps = (state) => ({
  currentUser: state.USER.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkAuth() {
    dispatch(checkAuth());
  },
});

export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
