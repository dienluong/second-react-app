import React from 'react';
import ReduxCounterWidget from '../components/ReduxCounterWidget';
import { incrementReduxCounterAction } from "../redux/actions/reduxAppActions";

let unsubscribe;

export default class ReduxCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.store.getState()
    };

    this.handleIncrementButton = this.handleIncrementButton.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
  }

  componentDidMount() {
    unsubscribe = this.props.store.subscribe(this.handleStoreChange);
  }

  componentWillUnmount() {
    unsubscribe();
  }

  handleStoreChange() {
    this.setState({
      count: this.props.store.getState()
    });
  }

  handleIncrementButton() {
    // this.setState({
    //   counter: this.state.counter + 1
    // });
    let action = incrementReduxCounterAction();
    this.props.store.dispatch(action);
  }

  render() {
    return (
      <ReduxCounterWidget counter={this.state.count} handleIncrementButton={this.handleIncrementButton} />
    )
  }
};
