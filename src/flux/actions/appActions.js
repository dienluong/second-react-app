import { actions as ACTIONS } from '../constants/appConstants';
import dispatcher from '../dispatcher/dispatcher';

export let incrementActions = {
  incrementCount: function incrementCount() {
    console.log(`Dispatched: incrementCount action...`);
    dispatcher.dispatch({
      actionType: ACTIONS.INCREMENT
    });
  }
};
