import React, { useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { updateMessage } from "../../actions/messageActions";

// component to edit the message
const EditMessageModal = ({ current, updateMessage }) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (current) {
      setMessage(current.message);
    }
  }, [current]);

  const onSubmit = () => {
    if (message === "") {
      M.toast({ html: "Please enter a message" });
    }

    const updMessage = {
      id: current.id,
      message,
      parentId: current.parentId,
      author: current.author,
    };

    updateMessage(updMessage);
    M.toast({ html: "Message Updated" });

    setMessage("");
  };

  return (
    <div id='edit-message-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Edit Message</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
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
  width: "60%",
  height: "60%",
};

EditMessageModal.propTypes = {
  current: PropTypes.object,
  updateMessage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  current: state.message.current,
});

export default connect(mapStateToProps, { updateMessage })(EditMessageModal);
