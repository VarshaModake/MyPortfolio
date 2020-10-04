import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../CSS/NavBar.css';


const NavBar=({children})=>{
  return (
    <div className="mainWrapper">
        <div className="navBarWrapper">
          
            <ul id="navbar">
           <li> <Link to='/'>About Me</Link></li>
           <li> <Link to='/Jokes'>Jokes</Link></li>
           <li> <Link to="/Contact">Contact Me</Link></li>
            </ul> 
            </div>
            {children}
            </div>
        
        

    )

  }

  export default NavBar;