import { CHANGE_ACTIVE_TAB } from 'constants/action_types';
import { IReduxTypes } from 'custom_types/redux_types';

const initialState = {
    'activeTab': ''
};

function rootReducer(state: IReduxTypes.TabState = initialState, action: IReduxTypes.ActionDispatch) {
    if(action.type === CHANGE_ACTIVE_TAB){
        return {
            'activeTab': action.payload
        };
    }
    return state;
}

export default rootReducer;
