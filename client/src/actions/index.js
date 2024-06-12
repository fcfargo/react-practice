import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => {
  return async function (dispatch) {
    const response = await axios.get('/api/users/current');

    const action = {
      type: FETCH_USER,
      payload: response,
    };

    return dispatch(action);
  };
};
