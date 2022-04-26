import CHANGE_ACTIVE_TAB from 'constants/action_types';
import { IReduxTypes } from 'custom_types/redux_types';

function changeActiveTab(activeTab: string): IReduxTypes.ActionDispatch {
  return {
    type: CHANGE_ACTIVE_TAB,
    payload: activeTab,
  };
}

export default changeActiveTab;
