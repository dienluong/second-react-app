import React from 'react';

export default class AddFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // default values for properties of File to be added
      name: '',
      size: 0,
      owner: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleSize = this.handleSize.bind(this);
    this.handleOwner = this.handleOwner.bind(this);
  }
  handleClick() {
    // create a new obj instead of directly sending this.state to addFile()
    let newFile = {
      name: this.state.name,
      size: this.state.size,
      owner: this.state.owner,
    };
    this.props.addFile(newFile);
  }
  handleName(e) {
    this.setState({ name: e.target.value });
  }
  handleSize(e) {
    this.setState({ size: e.target.value });
  }
  handleOwner(e) {
    this.setState({ owner: e.target.value });
  }
  render() {
    return (
      <div>
        <label>Name: <input onChange={this.handleName} value={this.state.name} /></label>
        <label>Size: <input onChange={this.handleSize} value={this.state.size} /></label>
        <label>Owner: <input onChange={this.handleOwner} value={this.state.owner} /></label>
        <button onClick={this.handleClick}>Add another file</button>
      </div>
    );
  }
}
