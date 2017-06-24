import React, { Component } from 'react';
import Program from './Program';

class Section extends Component {

  render() {
    return (
      <div>
        {this.props.programs.map(p => (
          <Program title={ p.title } runtime={ p.runtime } />
        ))}
      </div>
    )
  }
}

export default Section;
