import {createAction, handleActions} from 'redux-actions';
import { Map } from 'immutable';

//actions~!

const EXAMPLE = 'base/header/EXAMPLE';

/* action createors! */
export const example = createAction(EXAMPLE);

//initialstate
const initialstate = Map({
    something: true
});

export default handleActions({
    [EXAMPLE]: (state, action) => {
        state.set('something', action.payload);
    }
}, initialstate);