import React, { Component } from 'react';
import Day from '../components/Day';

class TimeTable extends Component {

  render() {
    // TODO: split programs
    return (
      <Day sections={this.props.programs} />
    )
  }
}

export default TimeTable;
