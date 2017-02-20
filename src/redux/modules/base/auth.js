import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

const x = "x";

export const y = createAction(x);

const initialState = Map({
    x: true
})

export default handleActions({
    [x]: (state, action) => {
        state
    }
}, initialState)