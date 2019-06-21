import {
  FETCH_FAILURE,
  FETCH_SUCCESS,
  FETCH_FRIENDS,
  ADD_SUCCESS,
  ADDING_FRIEND,
} from '../actions/friends';
import { LOGGING_IN, LOG_IN_SUCCESS, ERROR_LOGGING_IN } from '../actions/auth';

const initialFriendsState = {
  fetchingFriends: false,
  friends: [],
  loggingIn: false,
  isLoggedIn: false,
  savingFriends: false,
  error: null,
};

export default (state = initialFriendsState, action) => {
  switch (action.type) {
    case LOGGING_IN:
      return { ...state, loggingIn: true, error: null };
    case LOG_IN_SUCCESS:
      return { ...state, isLoggedIn: true, loggingIn: false };
    case ERROR_LOGGING_IN:
      return {
        ...state,
        loggingIn: false,
        error: 'Username or Password incorrect',
      };
    case FETCH_FRIENDS:
      return { ...state, isLoggedIn: true, fetchingFriends: true, error: null };
    case FETCH_SUCCESS:
      return { ...state, fetchingFriends: false, friends: action.payload };
    case FETCH_FAILURE:
      return {
        ...state,
        error: 'Error fetching friends',
        fetchingFriends: false,
      };
    case ADDING_FRIEND:
      return { ...state, savingFriends: true, isLoggedIn: true, error: null }
    case ADD_SUCCESS:
      return { ...state, savingFriends: false, friends: action.payload };
    default:
      return state;
  }
};
