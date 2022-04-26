import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, Store } from 'redux';
import rootReducer from './redux_items/reducers/index';
import * as serviceWorker from './serviceWorker';
import App from './App';

type StoreType = Store<
{
  activeTab: string;
},
{
  type: string;
  payload: unknown;
}
>;

const store: StoreType = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
