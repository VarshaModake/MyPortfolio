import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../CSS/NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser}from '@fortawesome/free-solid-svg-icons';
import {faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
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
           <li className="tab"> <FontAwesomeIcon icon={faUser} size='1x'></FontAwesomeIcon><Link to='/' >About Me</Link></li>
           <li className="tab"> <FontAwesomeIcon icon={faHeart} size='1x'></FontAwesomeIcon><Link to='/Projects'>Projects</Link></li>
           <li className="tab"> <FontAwesomeIcon icon={faEnvelopeSquare} size='1x'></FontAwesomeIcon><Link to='/Contact' >Contact Me</Link></li>
            </ul> 
           
            </div>
            {children}
            </div>
        
        

    )

  }

  export default NavBar;