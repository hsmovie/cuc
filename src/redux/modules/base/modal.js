import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
//액션객체의 타입값을 정의한다.
const MODAL_OPEN = "base/modal/MODAL_OPEN";
const MODAL_CLOSE = "base/modal/MODAL_CLOSE";
//여기서 아예 액션객체를 만들어버리고
export const openModal = createAction(MODAL_OPEN);
export const closeModal = createAction(MODAL_CLOSE);
//여기서 초기화값을 정한다.
const initialState = Map({
    login: Map({
        open:false
    }),
    
    linkAccount: Map({
        open:false
    })
}) 

export default handleActions({
    //위에서 정의되있는 액션타입에 들어갈 값에 prefix가 들어있기 때문에 대괄호를 쳐줘야 한다.
    [MODAL_OPEN]: (state, action) => {
        // modalName 모달을 열어주고, data 값을 설정한다.
/*
    {
        modalName,
        data
    }
 */

        //modalName을 받아서 페이로드에 주입
        const { modalName, data } = action.payload;
        return state.mergeIn([modalName], {
            open: true,
            ...data
        });
    },
    
    [MODAL_CLOSE]: (state, action) => {
        const modalName = action.payload;
        return state.setIn([modalName, 'open'], false);
    }
}, initialState);