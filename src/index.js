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
ReactDOM.render(
  <Router history={createBrowserHistory()}>
  <React.StrictMode>
    
      <Switch>
      <Route exact path='/' render={()=><NavBar><App /></NavBar>}/>
        <Route path='/Projects' render={()=><NavBar><Projects /></NavBar>}/>
        <Route path='/Contact' render={()=><NavBar><Contact /></NavBar>}/>
      </Switch>
  </React.StrictMode>  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
