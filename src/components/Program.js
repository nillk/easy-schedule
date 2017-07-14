import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import Typography from 'material-ui/Typography';

const styleSheet = createStyleSheet('Program', theme => ({
  program: {
    boxShadow: 'none',
    borderTop: '1px solid #F2F2F2'
  },
  title: {
    marginBottom: 16,
    fontSize: 16
  },
  runtime: {
    float: 'right'
  }
}));

class Program extends Component {
  render() {
    return (
      <Card className={ this.props.classes.program }>
        <CardContent>
          <Typography type="title" className={ this.props.classes.title }>
            { this.props.info.title }
            <Chip
              label={ this.props.info.runtime }
              className={ this.props.classes.runtime }
            />
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

Program.propTypes = {
  classes: PropTypes.object.isRequired,
  info: PropTypes.shape({
    title: PropTypes.string,
    runtime: PropTypes.number,
    date: PropTypes.string,
    section: PropTypes.string
  }).isRequired
};

export default withStyles(styleSheet)(Program);
