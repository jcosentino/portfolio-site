import { CHANGE_ACTIVE_TAB } from 'constants/action_types';

export function changeActiveTab(activeTab) {
    return {
        type: CHANGE_ACTIVE_TAB,
        payload: activeTab
    }
}
