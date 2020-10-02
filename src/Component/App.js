import React from 'react';
import '../CSS/App.css';
import NavBar from './NavBar';
import Skills from './Skills';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      
    <NavBar />
   <Profile/>
   <Skills />
    </div>
  );
}

export default App;
