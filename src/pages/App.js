import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FilePage from './FilePage';

import {BrowserRouter as Router, Route, hashHistory} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Nav from '../components/Nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: <Home />
    };

    this.goHome = this.goHome.bind(this);
    this.goAbout = this.goAbout.bind(this);
  }

  goHome() {
    this.setState({
      view: <Home />
    });
  }

  goAbout() {
    this.setState({
      view: <About />
    });
  }

  render() {
    console.log(`Rendering App...`);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router>
          <div>
            <Nav goHome={this.goHome} goAbout={this.goAbout} currentView={this.state.view}/>
            <div style={{backgroundColor: 'grey'}}>
              <strong>Button-controlled:</strong>
              {this.state.view}
            </div>
            <Route exact path='/' component={FilePage} />
            <Route path='/home' component={Home} />
            <Route path='/about' component={About} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
