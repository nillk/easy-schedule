import React from 'react';
import AddProgram from './AddProgram';
import Schedule from './Schedule';

class App extends React.Component {
  render(){
    return (
      <div>
        <AddProgram/>
        <Schedule />
      </div>
    );
  }
}

export default App;
