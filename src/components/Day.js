import React, { Component } from 'react';
import Grid from 'material-ui/Grid';

import Section from './Section';

class Day extends Component {

  render() {
    const sections = Object.keys(this.props.sections).sort();
    const sectionSize = 12 / sections.length;

    return (
      <Grid container gutter={0}>
        <Grid item sm={ 12 } md={ 12 }>
          <h3>{this.props.day}</h3>
        </Grid>
        {sections.map(section => (
          <Grid item sm={ sectionSize } md={ sectionSize }>
            <Section section={section} programs={this.props.sections[section]} />
          </Grid>
        ))}
      </Grid>
    )
  }
}

export default Day;
