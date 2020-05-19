import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Preloader from "../layout/Preloader";
import { getUsers, setUser } from "../../actions/userActions";

// component to fetch and display all the users
const UserList = ({
  user: { users, loading, currentUser },
  getUsers,
  setUser,
}) => {
  useEffect(() => {
    getUsers();

    //eslint-disable-next-line
  }, []);

  if (loading || users === null) {
    return <Preloader />;
  }

  return (
    <Fragment>
      <ul id='nav-mobile' className='right hide-on-med-and-down'>
        {!loading && users.length === 0 ? (
          <li>No users to show....</li>
        ) : (
          users.map((userItem) => (
            <li
              className={currentUser.id === userItem.id ? "active" : ""}
              key={userItem.id}
              onClick={() => setUser(userItem)}
            >
              <a href='#!'>{userItem.name}</a>
            </li>
          ))
        )}
      </ul>
    </Fragment>
  );
};

UserList.propTypes = {
  user: PropTypes.object.isRequired,
  getUsers: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getUsers, setUser })(UserList);
