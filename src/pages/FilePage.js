import React from 'react';
import File from '../components/File';
import AddFile from '../components/AddFile';
import { fetchFiles } from "../utils/filesApi";
// import { fetchFilesXHR } from "./utils/filesApi";

export default class FilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLocation: 'files-data.json',
      files: [],
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
    let files = this.state.files.map( (file, idx) => <li style={{listStyleType: 'none'}} key={idx}><File file={file} /></li> );
    return (
      <div>
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
