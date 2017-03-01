import _ from 'lodash';
import * as types from './actionTypes';

export default function(state = {}, action) {
  switch (action.type) {
    case types.RSVP_FETCH:
      return action.payload;
    case types.RSVP_CREATE:
      return { ...state, ...action.payload };
    case types.RSVP_DELETE:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
