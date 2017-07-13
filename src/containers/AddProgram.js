import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addProgram } from '../actions';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const styleSheet = createStyleSheet('AddProgram', theme=> ({
  input: {
    margin: theme.spacing.unit
  }
}));

class AddProgram extends Component {

  constructor(props) {
    super(props);

    const today = new Date().toISOString().slice(0, 10);

    this.state = {
      title: '',
      runtime: 120,
      date: today,
      section: ''
    };

    this.onTitleChanged = this.onTitleChanged.bind(this);
    this.onRuntimeChanged = this.onRuntimeChanged.bind(this);
    this.onDateChanged = this.onDateChanged.bind(this);
    this.onSectionChanged = this.onSectionChanged.bind(this);

    this.onAddProgram = this.onAddProgram.bind(this);
  }

  onTitleChanged(e) {
    this.setState({title: e.target.value});
  }

  onRuntimeChanged(e) {
    this.setState({runtime: e.target.value});
  }

  onDateChanged(e) {
    this.setState({date: e.target.value});
  }

  onSectionChanged(e) {
    this.setState({section: e.target.value});
  }

  render() {
    return (
      <div>
        <TextField label="Title" className={this.props.classes.input} value={this.state.title} onChange={this.onTitleChanged}/>
        <TextField label="Runtime" type="number" className={this.props.classes.input} value={this.state.runtime} onChange={this.onRuntimeChanged}/>
        <TextField label="Date" type="date" className={this.props.classes.input} value={this.state.date} onChange={this.onDateChanged}/>
        <TextField label="Section" className={this.props.classes.input} value={this.state.section} onChange={this.onSectionChanged}/>
        <Button raised onClick={this.onAddProgram}>Add</Button>
      </div>
    );
  }

  onAddProgram(e) {
    this.props.onAddProgram({
      title: this.state.title,
      runtime: this.state.runtime,
      date: this.state.date,
      section: this.state.section,
    });

    // Do not clear date
    this.setState({
      title: '',
      runtime: 120,
      section: ''
    });
  }
}

AddProgram.propTypes = {
  classes: PropTypes.object.isRequired
};

let mapDispatchToProps = (dispatch) => {
  return {
    onAddProgram: (program) => dispatch(addProgram(program))
  };
}

AddProgram = connect(undefined, mapDispatchToProps)(AddProgram);

export default withStyles(styleSheet)(AddProgram);
