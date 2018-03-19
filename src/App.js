import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import File from './File';
import AddFile from './AddFile';
import { fetchFiles } from "./utils/filesApi";
// import { fetchFilesXHR } from "./utils/filesApi";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLocation: 'files-data.json',
      files: []
    };
    // bind this so that it can be called as 'this.addFile' from the onClick in <button>
    this.addFile = this.addFile.bind(this);
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

  render() {
    console.log(`Rendering App...`);
    let files = this.state.files.map( (file, idx) => <li style={{listStyleType: 'none'}} key={idx}><File file={file} /></li> );
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
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
