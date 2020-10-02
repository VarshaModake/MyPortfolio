import React from 'react';
import '../CSS/App.css';
import NavBar from './NavBar';
import Skills from './Skills';
import Profile from './Profile';
import Projects from './Projects';


function App() {
  return (
    <div className="App">
    <Profile/>
    <Skills />
    <Projects />
    </div>
  );
}

export default App;
