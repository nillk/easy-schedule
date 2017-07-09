import React from 'react';

class Program extends React.Component {
  render() {
    return (
      <div className="program">
        <div className="program-title">{this.props.info.title}</div>
        <div className="program-runtime">{this.props.info.runtime}</div>
      </div>
    );
  }
}

export default Program;
