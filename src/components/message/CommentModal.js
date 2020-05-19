import React, { useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { addMessage } from "../../actions/messageActions";

// component to add comment to message
const CommentModal = ({
  comment,
  messages,
  users,
  currentUser,
  addMessage,
}) => {
  const [commentMessage, setCommentMessage] = useState("");
  const [allComments, setAllComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    if (comment) {
      setCommentMessage(comment.message);

      let allComments = messages.filter(
        (message) => comment.id === message.parentId
      );
      let allData = [];
      allComments.map((commentItem) => {
        users.map((user) => {
          if (commentItem.author === user.id) {
            allData.push({ ...commentItem, imageUrl: user.imageUrl });
          }
          return allData;
        });
        return allData;
      });

      setAllComments(allData);
    }
    // eslint-disable-next-line
  }, [comment, messages]);

  const onSubmit = () => {
    if (newComment === "") {
      M.toast({ html: "Please enter a comment" });
    }
    const commentToAdd = {
      message: newComment,
      parentId: comment.id,
      author: currentUser.id,
    };

    addMessage(commentToAdd);

    M.toast({ html: "Commet added to board" });

    setNewComment("");
  };

  return (
    <div id='comment-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <div className='row'>
          <h6>{commentMessage}</h6>
        </div>
        <div className='row'>
          <ul className='collection comment-list'>
            {allComments.length === 0 ? (
              <li className='center comment-message'>
                No comments to show....
              </li>
            ) : (
              allComments.map((commentItem) => (
                <li
                  className='collection-item avatar comment-message'
                  key={commentItem.id}
                >
                  <img src={commentItem.imageUrl} alt='' className='circle' />
                  <p>{commentItem.message}</p>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='comment'
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Comment
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='blue waves-effect waves-light btn'
        >
          Comment
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "60%",
  height: "60%",
};

CommentModal.propTypes = {
  comment: PropTypes.object,
  messages: PropTypes.array,
  users: PropTypes.array,
  addMessage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  comment: state.message.comment,
  messages: state.message.messages,
  users: state.user.users,
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, { addMessage })(CommentModal);
