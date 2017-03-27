
import * as types from './actionTypes';

export default function(state = {}, action) {
  switch (action.type) {
    case types.RSVP_FETCH:
      return action.payload;
    case types.RSVP_CREATE:
      return { ...state, ...action.payload };
    case types.RSVP_GET_FIRST:
     
      return {...state, rsvp:action.payload};

    case types.RSVP_GET_SECOND:
      return {...state, rsvpTwo:action.payload};
    case types.RSVP_GET_THRID:
      return {...state, rsvpThree:action.payload};
      
    case types.RSVP_GET_FOUR:
      return {...state, rsvpFour:action.payload};
    case types.RSVP_GET_FIVE:
      return {...state, rsvpFive:action.payload};
    case types.RSVP_GET_SIX:
      return {...state, rsvpSix:action.payload};
    case types.RSVP_GET_SEVEN:
      return {...state, rsvpSeven:action.payload};
    case types.RSVP_GET_EIGHT:
      return {...state, rsvpEight:action.payload};
    case types.RSVP_GET_NINE:
      return {...state, rsvpNine:action.payload};
    case types.RSVP_GET_TEN:
      return {...state, rsvpTen:action.payload};
    default:
      return state;
  }
}
