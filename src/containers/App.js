import React from 'react';
import Grid from 'material-ui/Grid';

import AddProgram from './AddProgram';
import Schedule from './Schedule';

class App extends React.Component {
  render(){
    return (
      <Grid container gutter={8}>
        <Grid item sm={10} md={10}>
          <Schedule />
        </Grid>
        <Grid item sm={2} md={2}>
          <AddProgram/>
        </Grid>
      </Grid>
    );
  }
}

export default App;
