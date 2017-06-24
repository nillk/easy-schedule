import React from 'react';
import { connect } from 'react-redux';

class Program extends React.Component {
  render() {
    return (
      <div className="program">
        <div className="program-title">{this.props.title}</div>
        <div className="program-runtime">{this.props.runtime}</div>
      </div>
    );
  }
}

export default Program;
