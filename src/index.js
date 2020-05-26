import React from 'react';
import ReactDOM from 'react-dom';
import './components/themes/Game of Thrones.ttf'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import rootReducer from './rootReducer';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore,applyMiddleware} from "redux";
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk'
import * as serviceWorker from './serviceWorker';


//const createStoreWithMiddleware = applyMiddleware(promiseMiddleware,ReduxThunk)(createStore);
const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
  </BrowserRouter>
,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
