import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async (dispatch) => {
  const { data } = await axios.get('/api/users/current');

  const action = {
    type: FETCH_USER,
    payload: data,
  };

  dispatch(action);
};

export const handleToken = (token) => async (dispatch) => {
  const { data } = await axios.post('/api/stripe', { token });

  const action = {
    type: FETCH_USER,
    payload: data,
  };

  dispatch(action);
};
