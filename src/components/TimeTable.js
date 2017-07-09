import React, { Component } from 'react';
import Day from '../components/Day';

class TimeTable extends Component {

  render() {
    let days = [];
    for(var key in this.props.programs) {
      if(this.props.programs.hasOwnProperty(key)) {
        days.push(<Day sections={this.props.programs[key]} />);
      }
    }

    return (
      <div>
        { days }
      </div>
    )
  }
}

export default TimeTable;
