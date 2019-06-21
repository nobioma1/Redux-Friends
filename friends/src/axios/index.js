import axios from 'axios';
import { getToken } from '../localStorage';

export default function() {
  const token = getToken();
  const instance = axios.create({
    headers: {
      Authorization: token,
    },
  });

  return instance;
}
