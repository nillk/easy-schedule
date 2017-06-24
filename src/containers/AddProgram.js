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
        <input type='text' ref='runtime' />
        <button onClick={this.onAddProgram}>
          Add
        </button>
      </div>
    );
  }

  onAddProgram(e) {
    const titleNode = this.refs.title;
    const runtimeNode = this.refs.runtime;

    const title = titleNode.value.trim();
    const runtime = runtimeNode.value.trim();

    this.props.onAddProgram({
      title: title,
      runtime: runtime
    });

    titleNode.value = '';
    runtimeNode.value = '';
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onAddProgram: (program) => dispatch(addProgram(program))
  };
}

AddProgram = connect(undefined, mapDispatchToProps)(AddProgram);

export default AddProgram;
