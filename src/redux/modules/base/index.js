import { combineReducers } from 'redux';
import modal from './modal';
import rsvp from './rsvpReducer';
import card from './cardReducer';

const base = combineReducers({
    modal,
    rsvp,
    card
});

export default base ;