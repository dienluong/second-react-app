import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import File from './File';
import AddFile from './AddFile';
import { fetchFiles } from "./utils/filesApi";
// import { fetchFilesXHR } from "./utils/filesApi";

import Home from './Home';
import About from './About';
import Nav from './Nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLocation: 'files-data.json',
      files: [],
      view: <Home />
    };
    // bind this so that it can be called as 'this.addFile' from the onClick in <button>
    this.addFile = this.addFile.bind(this);

    this.goHome = this.goHome.bind(this);
    this.goAbout = this.goAbout.bind(this);
  }

  componentDidMount() {
    /* Using fetchFilesXHR() */
    // let that = this;
    // fetchFilesXHR(this.state.dataLocation, function processFetchedData() {
    //   if (this.status === 200) {
    //     let files = JSON.parse(this.responseText);
    //     that.setState({
    //       files: files
    //     });
    //   }
    //   else {
    //     console.log(`Error fetching data -- status ${this.status}`);
    //   }
    // });

    fetchFiles(this.state.dataLocation)
      .then(data => {
        this.setState({ files: data });
      });
  }

  addFile(file) {
    this.setState({
      files: this.state.files.concat([file])
    });
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
    let files = this.state.files.map( (file, idx) => <li style={{listStyleType: 'none'}} key={idx}><File file={file} /></li> );
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Nav goHome={this.goHome} goAbout={this.goAbout} currentView={this.state.view}/>
        {this.state.view}
        <AddFile addFile={this.addFile} />
        <p className="App-intro">
          To get started, edit the following files and save to reload the site:
        </p>
        <ul>
          {files}
        </ul>
      </div>
    );
  }
}

export default App;
