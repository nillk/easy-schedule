import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProgram } from '../actions';

class AddProgram extends Component {

  constructor(props) {
    super(props);

    this.onAddProgram = this.onAddProgram.bind(this);
  }

  render() {
    return (
      <div>
        <input type='text' ref='title' />
        <input type='number' ref='runtime' />
        <input type='date' ref='date' />
        <input type='text' ref='section' />
        <button onClick={this.onAddProgram}>
          Add
        </button>
      </div>
    );
  }

  onAddProgram(e) {
    const titleNode = this.refs.title;
    const runtimeNode = this.refs.runtime;
    const dateNode = this.refs.date;
    const sectionNode = this.refs.section;

    const title = titleNode.value.trim();
    const runtime = runtimeNode.value.trim();
    const date = dateNode.value.trim();
    const section = sectionNode.value.trim();

    this.props.onAddProgram({
      title: title,
      runtime: runtime,
      date: date,
      section: section,
    });

    titleNode.value = '';
    runtimeNode.value = '';
    dateNode.value = '';
    sectionNode.value = '';
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onAddProgram: (program) => dispatch(addProgram(program))
  };
}

AddProgram = connect(undefined, mapDispatchToProps)(AddProgram);

export default AddProgram;
