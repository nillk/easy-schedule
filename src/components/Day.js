import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Section from './Section';

class Day extends Component {

  render() {
    let sections = [];
    for(var key in this.props.sections) {
      if(this.props.sections.hasOwnProperty(key)) {
        sections.push(<Section section={key} programs={this.props.sections[key]} />);
      }
    }

    return (
      <div className="day">
        <h3>{this.props.day}</h3>
        { sections }
      </div>
    )
  }
}

export default Day;
