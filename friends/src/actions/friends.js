import axios from '../axios';

export const FETCH_FRIENDS = 'FETCH_FRIENDS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const ADDING_FRIEND = 'ADDING_FRIEND';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';

const fetchSuccess = payload => ({ type: FETCH_SUCCESS, payload });
const fetchFailure = () => ({ type: FETCH_FAILURE });

export const fetchFriends = () => dispatch => {
  dispatch({ type: FETCH_FRIENDS });
  axios()
    .get('http://localhost:5000/api/friends')
    .then(res => dispatch(fetchSuccess(res.data)))
    .catch(() => dispatch(fetchFailure()));
};

export const addFriend = newFriend => dispatch => {
  dispatch({ type: ADDING_FRIEND });
  return axios()
    .post('http://localhost:5000/api/friends', newFriend)
    .then(res => dispatch({ type: ADD_SUCCESS, payload: res.data }))
    .catch(() => dispatch({ type: ADD_FAILURE }));
};
