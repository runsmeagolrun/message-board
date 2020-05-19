import React, { useEffect, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import AppNavbar from "./components/layout/AppNavbar";
import Messages from "./components/message/Messages";
import AddBtn from "./components/layout/AddBtn";
import AddMessageModal from "./components/message/AddMessageModal";
import EditMessageModal from "./components/message/EditMessageModal";
import CommentModal from "./components/message/CommentModal";

const App = () => {
  useEffect(() => {
    // Init Materialize CSS
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <Fragment>
        <AppNavbar />
        <AddBtn />
        <AddMessageModal />
        <EditMessageModal />
        <CommentModal />
        <Messages />
      </Fragment>
    </Provider>
  );
};

export default App;
