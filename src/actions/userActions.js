import { GET_USERS, SET_USER, USER_ERROR, SET_LOADING } from "./types";

// fetch all the users from json-server
export const getUsers = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/users");
    const data = await res.json();

    dispatch({
      type: GET_USERS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: err.message,
    });
  }
};

// set current user
export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

// set preloader for async task
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
