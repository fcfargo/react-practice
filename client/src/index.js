import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { applyMiddleware, createStore } from 'redux';
import { thunk } from 'redux-thunk';

const store = createStore(reducers, {}, applyMiddleware(thunk));

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
