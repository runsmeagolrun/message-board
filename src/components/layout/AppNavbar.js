import React, { Fragment } from "react";

import UserList from "../user/UserList";

// navigation bar to show all the users
const AppNavbar = () => {
  return (
    <Fragment>
      <nav className='blue'>
        <div className='nav-wrapper'>
          <a href='#!' className='brand-logo app-name'>
            Message Board
          </a>
          <UserList />
        </div>
      </nav>
    </Fragment>
  );
};

export default AppNavbar;
