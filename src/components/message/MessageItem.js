import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";

import {
  deleteMessage,
  setCurrent,
  setComment,
} from "../../actions/messageActions";

// component to display messages
const MessageItem = ({
  messageItem,
  deleteMessage,
  setCurrent,
  currentUser,
  setComment,
  users,
}) => {
  const [userMessage, setUserMessage] = useState({});

  useEffect(() => {
    let user = users.filter((userItem) => userItem.id === messageItem.author);

    setUserMessage(user[0]);
    // eslint-disable-next-line
  }, []);

  const onDelete = () => {
    deleteMessage(messageItem.id);
    M.toast({ html: "Message Deleted" });
  };

  return (
    <div className='card'>
      <div className='card-content'>
        <div className='row'>
          <img
            src={userMessage.imageUrl}
            alt='user'
            className='circle user-image'
          />
          <span className='user-name'>{userMessage.name}</span>
        </div>
        <a href='#!' className='card-text message-area'>
          <p>{messageItem.message}</p>
        </a>
      </div>
      <div className='card-action'>
        {currentUser.id === messageItem.author && (
          <a
            href='#edit-message-modal'
            className='modal-trigger'
            onClick={() => setCurrent(messageItem)}
          >
            <i className='material-icons edit-button-color'>edit</i>
          </a>
        )}
        {currentUser.id === messageItem.author && (
          <a href='#!' onClick={onDelete}>
            <i className='material-icons edit-button-color'>delete</i>
          </a>
        )}
        {currentUser.id !== messageItem.author && (
          <a
            href='#comment-modal'
            className='modal-trigger card-text'
            onClick={() => setComment(messageItem)}
          >
            <i className='material-icons edit-button-color'>message</i>
          </a>
        )}
      </div>
    </div>
  );
};

MessageItem.propTypes = {
  messageItem: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  deleteMessage: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
  setComment: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  users: state.user.users,
});

export default connect(mapStateToProps, {
  deleteMessage,
  setCurrent,
  setComment,
})(MessageItem);
