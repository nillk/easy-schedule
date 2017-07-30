import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import Timeline from './Timeline';
import Section from './Section';

class Day extends Component {

  render() {
    const sections = Object.keys(this.props.sections).sort();

    return (
      <div className="day">
        <Typography type="headline" gutterBottom>{ this.props.day }</Typography>
        <Timeline></Timeline>
        {
          sections.map(section => (
            <div key={ section } className="day-section">
              <Section key={ section }
                section= { section }
                programs={ this.props.sections[section] }/>
            </div>
          ))
        }
      </div>
    )
  }
}

Day.propTypes = {
  sections: PropTypes.object.isRequired
};

export default Day;
