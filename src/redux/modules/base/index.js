import { combineReducers } from 'redux';
import header from './header';
import modal from './modal';
import auth from './auth';
import rsvp from './rsvpReducer';

const base = combineReducers({
    header,
    modal,
    auth,
    rsvps:rsvp
});

export default base ;