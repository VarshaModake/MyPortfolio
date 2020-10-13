import React from 'react';
import '../CSS/App.css';

import Profile from './Profile';

import {Router,Switch,Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Projects from './Projects';
import NavBar from './NavBar';
import Contact from './Contact';
import Summary from './Summary';


function App() {
  return (
    <div className="App">
      <Router history={createBrowserHistory()}>
 
    
      <Switch>
      <Route exact path='/' render={()=><NavBar><Profile /></NavBar>}/>
        <Route path='/Projects' render={()=><NavBar><Projects /></NavBar>}/>
        <Route path='/Contact' render={()=><NavBar><Contact /></NavBar>}/>
        <Route path='/Summary' render={()=><NavBar><Summary /></NavBar>}/>
      </Switch>
   </Router>
    {/* <Profile/> */}
    </div>
  );
}

export default App;
