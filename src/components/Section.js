import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import Program from './Program';

class Section extends Component {

  render() {
    return (
      <div className="section">
        <Typography type="subheading" gutterBottom>{ this.props.section }</Typography>
        <div className="section-list">
          { this.props.programs.map(p => (
            <Program key={ p.title } info={ p } />
          )) }
        </div>
      </div>
    )
  }
}

export default Section;
