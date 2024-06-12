import axios from 'axios';
import { FETCH_USER } from './types';

const fetchUser = () => {
  return async function (dispatch) {
    const response = await axios.get('/api/current_user');

    const action = {
      type: FETCH_USER,
      payload: response,
    };

    return dispatch(action);
  };
};
