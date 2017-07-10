import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import { MuiThemeProvider } from 'material-ui/styles';
import schedulerApp from './reducers';
import App from './containers/App';

import './styles/main.less';

let store = createStore(schedulerApp);

const rootElement = document.getElementById('content');

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  rootElement
);
