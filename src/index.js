import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Switch,Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './index.css';
import App from './Component/App';
import * as serviceWorker from './serviceWorker';
import Projects from './Component/Projects';
import NavBar from './Component/NavBar';
import Contact from './Component/Contact';
import Summary from './Component/Summary';

ReactDOM.render(
 <React.StrictMode><App /></React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
