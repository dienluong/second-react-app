import React from 'react';
import Home from './Home';
import About from './About';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.clickAbout = this.clickAbout.bind(this);
    this.clickHome = this.clickHome.bind(this);
  }

  clickHome() {
    if (this.props.currentView.type !== Home) {
      this.props.goHome();
    }
  }

  clickAbout() {
    if (this.props.currentView.type !== About) {
      this.props.goAbout();
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHome}>Home</button>
        <button onClick={this.clickAbout}>About Us</button>
      </div>
    );

  }
}
