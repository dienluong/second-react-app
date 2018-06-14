import { actions as ACTIONS } from '../constants/appConstants';
import dispatcher from '../dispatcher/dispatcher';
import { EventEmitter } from 'events';

let _count = 10;

function getCount() {
  return _count;
}

// This function is not added to the countStore object as a (public) method
// because we do NOT want the possibility of _count being incremented external component.
function _incrementCount() {
  _count = _count + 1;
}

function _emitChange() {
  countStore.emit('COUNT_CHANGED');
}

function addChangeListener(cb) {
  this.on('COUNT_CHANGED', cb);
}

function removeChangeListener(cb) {
  this.removeListener('COUNT_CHANGED', cb)
}

/* Alternatively, use Object.create() */
let countStore = Object.create(new EventEmitter());
countStore.getCount = getCount;
countStore.addChangeListener = addChangeListener;
countStore.removeChangeListener = removeChangeListener;

dispatcher.register(function(action) {
  switch (action.actionType) {
    case ACTIONS.INCREMENT:
      console.log(`Action reached Store: ${action.actionType}`);
      _incrementCount();
      _emitChange();
      break;
    default:
  }
});

export default countStore;
