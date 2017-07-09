import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Section from './Section';

class Day extends Component {

  render() {
    // TODO: split sections
    let sections = [];
    for(var key in this.props.sections) {
      if(this.props.sections.hasOwnProperty(key)) {
        sections.push(<Section programs={this.props.sections[key]} />);
      }
    }

    return (
      <div>
        { sections }
      </div>
    )
  }
}

export default Day;
