import { actionTypes } from '../constants/reduxAppConstants';

let initialCount = 0;

export default function countReducer(count = initialCount, action) {
  switch (action.type) {
    case actionTypes.INCREMENT_REDUX_COUNT:
      return count + 1;
    default:
      return count;
  }
}
