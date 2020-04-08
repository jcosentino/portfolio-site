import { CHANGE_ACTIVE_TAB } from 'constants/action_types';

export function changeActiveTab(activeTab: string) {
    return {
        type: CHANGE_ACTIVE_TAB,
        payload: activeTab
    }
}
