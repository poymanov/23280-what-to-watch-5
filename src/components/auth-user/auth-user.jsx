import React from "react";
import UserTypes from "../../types/user";
import {Link} from "react-router-dom";

const AuthUser = ({currentUser}) => {
  return (
    <div className="user-block">
      <div className="user-block__avatar">
        <Link to="/mylist">
          <img src={currentUser.avatarUrl} alt={currentUser.name} width="63" height="63"/>
        </Link>
      </div>
    </div>
  );
};

AuthUser.propTypes = {
  currentUser: UserTypes.currentUser.isRequired
};

export default AuthUser;
