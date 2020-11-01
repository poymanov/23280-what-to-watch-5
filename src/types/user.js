import PropTypes from "prop-types";

const user = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired
});

const UserTypes = {
  currentUser: user,
};

export default UserTypes;
