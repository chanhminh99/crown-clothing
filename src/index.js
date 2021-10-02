import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import wrapperStore from './redux/store'

import './index.css';
import App from './App';

const Root = () => {
  return (
    <Provider store={wrapperStore.store}>
      <Router>
        <PersistGate persistor={wrapperStore.persistor} loading={null}>
        <App />
        </PersistGate>
      </Router>
    </Provider>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

