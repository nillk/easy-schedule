import React, { Component } from 'react';
import Grid from 'material-ui/Grid';

import Day from '../components/Day';

class TimeTable extends Component {

  render() {
    const days = Object.keys(this.props.programs).sort();
    const itemSize = 12 / days.length;

    return (
      <Grid container gutter={8}>
        {days.map(day => (
          <Grid item key={day} sm={ itemSize } md={ itemSize }>
            <Day key={day} day={day} sections={this.props.programs[day]} />
          </Grid>
        ))}
      </Grid>
    )
  }
}

export default TimeTable;
