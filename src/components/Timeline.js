import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const TIME_HEIGHT = 72;
const START_TIME = 9;

const styleSheet = createStyleSheet('Timeline', theme => ({
  time: {
    fontSize: 14,
    lineHeight: TIME_HEIGHT + 'px',
    textAlign: 'center'
  }
}));

class Timeline extends Component {

  render() {
    const height = 792; // FIXME
    const timeSectionCount = Math.ceil(height / TIME_HEIGHT);
    const timelines = Array(timeSectionCount).fill().map((_, idx) => START_TIME + idx);

    const timeSectionStyle = {
      width: 24,
      height: TIME_HEIGHT,
      borderBottom: '1px solid white'
    }

    return (
      <div className="day-timeline">
        { timelines.map(time => (
          <div key={ time } style={ timeSectionStyle }>
            <Typography type="subheading" className={ this.props.classes.time }>{ time }</Typography>
          </div>
        ))}
      </div>
    )
  }
}

Timeline.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(Timeline);
