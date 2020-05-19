import {
  GET_MESSAGES,
  SET_LOADING,
  MESSAGE_ERROR,
  ADD_MESSAGE,
  DELETE_MESSAGE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_MESSAGE,
  SET_COMMENT,
  CLEAR_COMMENT,
} from "./types";

// fetch all messages form backend
export const getMessages = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/messages");
    const data = await res.json();

    dispatch({
      type: GET_MESSAGES,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: err.message,
    });
  }
};

// add a message into json-server
export const addMessage = (message) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/messages", {
      method: "POST",
      body: JSON.stringify(message),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_MESSAGE,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: err.message,
    });
  }
};

// delete a message from json-server
export const deleteMessage = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/messages/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_MESSAGE,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: err.message,
    });
  }
};

// update a message into json-server
export const updateMessage = (message) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/messages/${message.id}`, {
      method: "PUT",
      body: JSON.stringify(message),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    dispatch({
      type: UPDATE_MESSAGE,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: err.message,
    });
  }
};

// set message for comment
export const setComment = (message) => {
  return {
    type: SET_COMMENT,
    payload: message,
  };
};

// clear selected message for comment
export const clearComment = () => {
  return {
    type: CLEAR_COMMENT,
  };
};

// set current message for edit
export const setCurrent = (message) => {
  return {
    type: SET_CURRENT,
    payload: message,
  };
};

// clear message set for edit
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

// set preloader for async task
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
