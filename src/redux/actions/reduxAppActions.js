import { actionTypes as reduxActions } from '../constants/reduxAppConstants';

function incrementReduxCounterAction(payload) {
  return {
    type: reduxActions.INCREMENT_REDUX_COUNT
  };
}

export { incrementReduxCounterAction };
