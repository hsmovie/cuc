import {CARD_FETCH} from './actionTypes';

export default function(state={}, action) {
    switch (action.type) {
        case CARD_FETCH:
           return {...state, cards:action.payload}
    
        default:
            return state;
    }
}