import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import MessageItem from "./MessageItem";
import Preloader from "../layout/Preloader";
import { getMessages } from "../../actions/messageActions";

// component to fetch all the messages to build message card
const Messages = ({ message: { messages, loading }, getMessages }) => {
  useEffect(() => {
    getMessages();

    //eslint-disable-next-line
  }, []);

  if (loading || messages === null) {
    return <Preloader />;
  }

  return (
    <div className='row'>
      {!loading && messages.length === 0 ? (
        <p className='center'>No messages to show....</p>
      ) : (
        messages.map((messageItem) => (
          <Fragment key={messageItem.id}>
            {messageItem.parentId === null && (
              <div className='col s12 m3'>
                <MessageItem messageItem={messageItem} />
              </div>
            )}
          </Fragment>
        ))
      )}
    </div>
  );
};

Messages.propTypes = {
  message: PropTypes.object.isRequired,
  getMessages: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  message: state.message,
});

export default connect(mapStateToProps, { getMessages })(Messages);
