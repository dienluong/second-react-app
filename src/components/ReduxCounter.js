import React from 'react';
import ReduxCounterContainer from '../containers/ReduxCounterContainer';
import { createStore } from 'redux';
import countReducer  from '../redux/reducers/countReducer';

let store = createStore(countReducer);

export default class ReduxCounter extends React.Component {
  render() {
    console.log(`Rendering ReduxCounter...`);
    return (
      <ReduxCounterContainer store={store} />
    );
  }
};
