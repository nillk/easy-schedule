import React, { Component } from 'react';

class Timeline extends Component {

  constructor(props) {
    super(props);

    this.TIME_HEIGHT = 72;
    this.START_TIME = 9;
  }

  render() {
    const height = 792; // FIXME
    const timeSectionCount = Math.ceil(height / this.TIME_HEIGHT);
    const timelines = Array(timeSectionCount).fill().map((_, idx) => this.START_TIME + idx);

    const timeSectionStyle = {
      width: 24,
      height: this.TIME_HEIGHT,
      lineHeight: this.TIME_HEIGHT + 'px',
      textAlign: 'center',
      borderBottom: '1px solid white'
    }

    return (
      <div className="day-timeline">
        { timelines.map(time => (
          <div key={ time } style={ timeSectionStyle }>
            { time }
          </div>
        ))}
      </div>
    )
  }
}

export default Timeline;
