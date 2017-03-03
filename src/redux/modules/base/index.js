import { combineReducers } from 'redux';
import header from './header';
import modal from './modal';
import rsvp from './rsvpReducer';

const base = combineReducers({
    header,
    modal,
    rsvps:rsvp
});

export default base ;