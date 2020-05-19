import { GET_USERS, SET_USER, USER_ERROR, SET_LOADING } from "../actions/types";

const initialState = {
  users: null,
  currentUser: {
    id: 1,
    name: "Veronica Corningstone",
    imageUrl: "https://image.flaticon.com/icons/svg/145/145852.svg",
  },
  loading: false,
  error: null,
};

// reducer to handle actions related to user
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case USER_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
