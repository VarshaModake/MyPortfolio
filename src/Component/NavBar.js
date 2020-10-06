import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../CSS/NavBar.css';
import {faAlignJustify} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar=({children})=>{

  useEffect(()=>{
    var LinkArray=document.querySelectorAll("li");
    LinkArray.forEach(
      (e)=>{
      e.addEventListener('click',()=>{
        var currentActive=document.getElementsByClassName("Active");
        if(currentActive.length >0)
        {
          currentActive[0].className = currentActive[0].className.replace("Active", "");
         
        }
        
          e.classList.add("Active");
         
        
      })
      }
  )
    }
  )
  return (
    <div className="mainWrapper">
      
        <div className="navBarWrapper">
        
        
            <ul id="navbar">
           <li className="tab"> <Link to='/' >About Me</Link></li>
           <li className="tab"> <Link to='/Jokes'>Jokes</Link></li>
           <li className="tab"> <Link to='/Contact' >Contact Me</Link></li>
            </ul> 
           
            </div>
            {children}
            </div>
        
        

    )

  }

  export default NavBar;