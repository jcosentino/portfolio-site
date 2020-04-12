import { CHANGE_ACTIVE_TAB } from 'constants/action_types';
import { IReduxTypes } from 'custom_types/redux_types';

export function changeActiveTab(activeTab: string): IReduxTypes.ActionDispatch {
    return {
        type: CHANGE_ACTIVE_TAB,
        payload: activeTab
    }
}
