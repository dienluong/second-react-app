/* This customStore is simply an exercise to better illustrate the Redux store API. */

function createCustomStore(reducer, initialState) {
  let state = initialState;
  let subscribers = [];

  function getState() {
    return state;
  }

  function subscribe(cb) {
    subscribers.push(cb);
  }

  function dispatch(action) {
    state = reducer(state, action);
    subscribers.forEach(sub => {
      sub(state);
    });
  }

  return {
    getState: getState,
    subscribe: subscribe,
    dispatch: dispatch
  }
}
