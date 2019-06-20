import axios from 'axios';
import { setToken, clearToken } from '../localStorage';

export const LOGGING_IN = 'LOGGING_IN';
const loggingIn = () => ({ type: LOGGING_IN });

export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const logInSuccess = () => ({ type: LOG_IN_SUCCESS });

export const ERROR_LOGGING_IN = 'ERROR_LOGGING_IN';
const error = () => ({ type: ERROR_LOGGING_IN});

export const LOG_OUT = 'LOG_OUT';
export const logOut = () => {
  clearToken();
  return { type: LOG_OUT };
};

export const login = loginDetails => dispatch => {
  dispatch(loggingIn());
  return axios
    .post('http://localhost:5000/api/login', loginDetails)
    .then(res => {
      setToken(res.data.payload);
      dispatch(logInSuccess());
    })
    .catch(() => dispatch(error()));
};
