import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import Section from './Section';

const styleSheet = createStyleSheet('Day', theme => ({
  sectionContainer: {
    height: '100%'
  }
}));

class Day extends Component {

  render() {
    const sections = Object.keys(this.props.sections).sort();
    const sectionSize = 12 / sections.length;

    return (
      <div className="day">
        <Typography type="headline" gutterBottom>{ this.props.day }</Typography>
        <Grid container
          gutter={0}
          align="stretch"
          className={ this.props.classes.sectionContainer } >
          { sections.map(section => (
            <Grid item key={ section } sm={ sectionSize } md={ sectionSize }>
              <Section key={ section }
                section={ section }
                programs={ this.props.sections[section] } />
            </Grid>
          )) }
        </Grid>
      </div>
    )
  }
}

Day.propTypes = {
  classes: PropTypes.object.isRequired,
  sections: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(Day);
