import { FETCH_USER } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      const newAction = action.payload || false;
      return newAction;
    default:
      return state;
  }
}
