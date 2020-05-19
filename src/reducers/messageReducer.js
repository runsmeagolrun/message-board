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
} from "../actions/types";

const initialState = {
  messages: null,
  current: null,
  comment: null,
  loading: false,
  error: null,
};

// reducer to handle actions related to messages
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return {
        ...state,
        messages: action.payload,
        loading: false,
      };
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
        loading: false,
      };
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter(
          (message) => message.id !== action.payload
        ),
        loading: false,
      };
    case UPDATE_MESSAGE:
      return {
        ...state,
        messages: state.messages.map((message) =>
          message.id === action.payload.id ? action.payload : message
        ),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case SET_COMMENT:
      return {
        ...state,
        comment: action.payload,
      };
    case CLEAR_COMMENT:
      return {
        ...state,
        comment: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case MESSAGE_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
