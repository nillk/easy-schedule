import React, { Component } from 'react';
import Grid from 'material-ui/Grid';

import Day from '../components/Day';

class TimeTable extends Component {

  render() {
    const days = Object.keys(this.props.programs).sort();
    const itemSize = 12 / days.length;

    return (
      <div className="timetable">
        { days.map(day => (
          <div key={ day } className="timetable-day">
            <Day key={ day } day={ day } sections={ this.props.programs[day] } />
          </div>
        ))}
      </div>
    )
  }
}

export default TimeTable;
