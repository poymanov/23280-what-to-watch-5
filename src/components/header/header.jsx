import React from "react";
import {connect} from "react-redux";
import UserTypes from "../../types/user";
import AuthUser from "../auth-user/auth-user";
import NotAuthUser from "../not-auth-user/not-auth-user";
import {Link} from "react-router-dom";

const Header = (props) => {
  const {currentUser} = props;

  const userBlock = currentUser ? <AuthUser currentUser={currentUser} /> : <NotAuthUser />;

  return (
    <header className="page-header movie-card__head">
      <div className="logo">
        <Link to="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      {userBlock}
    </header>
  );
};

Header.propTypes = {
  currentUser: UserTypes.currentUser
};

const mapStateToProps = (state) => ({
  currentUser: state.USER.currentUser,
});

export {Header};
export default connect(mapStateToProps)(Header);
