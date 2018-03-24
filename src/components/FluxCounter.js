import React from 'react';
import { incrementActions } from '../flux/actions/appActions';
import countStore  from '../flux/stores/countStore';

export default class FluxCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: countStore.getCount()
    };

    this.increment = this.increment.bind(this);
    this._onChangeCallback = this._onChangeCallback.bind(this);
  }

  componentDidMount() {
    countStore.addChangeListener(this._onChangeCallback);
  }

  componentWillUnmount() {
    countStore.removeChangeListener(this._onChangeCallback);
  }

  _onChangeCallback() {
    this.setState({
      count: countStore.getCount()
    });
  }

  increment() {
    // this.setState({
    //   count: this.state.count + 1
    // });
    incrementActions.incrementCount();
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
