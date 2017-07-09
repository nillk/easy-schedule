import React, { Component } from 'react';
import Program from './Program';

class Section extends Component {

  render() {
    return (
      <div>
        {this.props.programs.map(p => (
          <Program info={ p } />
        ))}
      </div>
    )
  }
}

export default Section;
