import _ from 'lodash';
import * as types from './actionTypes';

const initialState = {
  
}
export default function(state = initialState, action) {
  switch (action.type) {
    case types.RSVP_FETCH:
      return action.payload;
    case types.RSVP_CREATE:
      return { ...state, ...action.payload };
    case types.RSVP_DELETE:
      return _.omit(state, action.payload);
    case types.RSVP_GET_FIRST:
     
      return {...state, rsvp:action.payload};

    case types.RSVP_GET_SECOND:
      return {...state, rsvpTwo:action.payload};
    case types.RSVP_GET_THRID:
      return {...state, rsvpThree:action.payload};
    case types.RSVP_UPDATE:
      return action.payload;
    case types.RSVP_CHECK:
    console.log("WTF");
      return action.payload;
    case types.RSVP_UNCHECK:
      return action.payload;
   case types.RSVP_CHECKING_PHOTOANDPEOPLE:
      return action.payload;     
    default:
      return state;
  }
}
