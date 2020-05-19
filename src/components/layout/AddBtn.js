import React from "react";

// button for adding new message
const AddBtn = () => {
  return (
    <div className='fixed-action-btn'>
      <a
        href='#add-message-modal'
        className='btn-floating btn-large blue darken-2 modal-trigger'
      >
        <i className='large material-icons'>add</i>
      </a>
    </div>
  );
};

export default AddBtn;
