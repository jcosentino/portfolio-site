import { CHANGE_ACTIVE_TAB } from 'constants/action_types';

const initialState = {
    'activeTab': ''
};

function rootReducer(state=initialState, action) {
    if(action.type === CHANGE_ACTIVE_TAB){
        return {
            'activeTab': action.payload
        };
    }
    return state;
}

export default rootReducer;
