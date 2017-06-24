import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Section from './Section';

class Day extends Component {

  render() {
    // TODO: split sections
    return (
      <Section programs={this.props.sections} />
    )
  }
}

export default Day;
