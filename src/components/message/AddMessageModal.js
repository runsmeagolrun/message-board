import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { addMessage } from "../../actions/messageActions";

// component to add new message to json-server
const AddMessageModal = ({ addMessage, currentUser }) => {
  const [message, setMessage] = useState("");

  const onSubmit = () => {
    if (message === "") {
      M.toast({ html: "Please enter a message" });
    }
    const newMessage = {
      message,
      parentId: null,
      author: currentUser.id,
    };

    addMessage(newMessage);

    M.toast({ html: "Message added to board" });

    setMessage("");
  };

  return (
    <div id='add-message-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Create Message</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Message
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close blue waves-effect waves-light btn'
        >
          Submit
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "50%",
  height: "50%",
};

AddMessageModal.propTypes = {
  addMessage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, { addMessage })(AddMessageModal);
