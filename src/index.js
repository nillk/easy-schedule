import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import App from './components/App';

import './styles/main.less';

const rootElement = document.getElementById('content');

ReactDOM.render(
  <App />,
  rootElement
);
