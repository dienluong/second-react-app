import React from 'react';

/* export default class File extends React.Component {
  render() {
    return (
      <p>
        <code>
          Name: { this.props.file.name } Size: { this.props.file.size } Owner: { this.props.file.owner }
        </code>
      </p>
    );
  }
} */

let styles = {
  border: 'solid',
  color: 'grey',
};

// Stateless functional component
let File = (props) => (
  <code style={styles}>
    Name: { props.file.name } Size: { props.file.size } Owner: { props.file.owner }
  </code>
);

export default File;
