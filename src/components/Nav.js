import React from 'react';
import {Link} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';

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
        <Link to='/home'>Home</Link> <Link to='/about'>About</Link> <Link to='/'>File Page</Link> <Link to='/flux'>Flux Counter</Link> <Link to='/redux'>Redux Counter</Link><br/>
        <div style={{backgroundColor: 'grey'}}>
          <span>Not using React Router:</span>
          <button onClick={this.clickHome}>Home</button>
          <button onClick={this.clickAbout}>About Us</button>
        </div>
      </div>
    );

  }
}
