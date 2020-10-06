import React,{Component} from 'react';
import skills from './Skills';
import ProfilePicture from '../Assets/profile.jpg'
import '../CSS/Profile.css'
import Titles from './Titles';
import Skills from './Skills';

export default class Profile extends Component{
 
render()
{
    return(
<section className="s1">
      <div className="main-container">
        
        <div className="intro-wrapper">
          

          <div className="left-column">
            <img id="profile-pic" src={ProfilePicture} />
            <br />
            <h5 >
              Personalize Theme
            </h5>
            <div id="theme-option-wrapper">
              <div id="light-Mode" className="theme-dot"></div>
              <div id="blue-Mode" className="theme-dot"></div>
              <div id="green-Mode" className="theme-dot"></div>
              <div id="purple-Mode" className="theme-dot"></div>
            </div>
            <p id="setting-note">
              *Theme setting will be save for<br />your next visit
            </p>
          </div>

          <div className="center-column">
            <div id="preview-shadow">
              <div id="preview">
                <div id="corner-tl" className="corner-dot"></div>
                <div id="corner-tr" className="corner-dot"></div>
                <h4>Who I am ?</h4>
                <p>
                <Titles/>
                </p>
                <div id="corner-bl" className="corner-dot"></div>
                <div id="corner-br" className="corner-dot"></div>
              </div>
            </div>
         
          </div>
          
             <Skills></Skills>
           
          
        </div>
      </div>
      <hr></hr>
      <div className="about-wrapper">
        <div id="about-me">
        <h4>More About me...</h4>
        <p>
        I am a self-motivated Experienced software engineer 
with a passion for developing innovative programs 
that expedite the efficiency and effectiveness of 
organizational success. 
            </p>
            <p>
            Well-versed in technology and writing code 
to create systems that are reliable and user-friendly. 
Skilled leader who has the proven ability to motivate, 
educate, and manage a team of professionals to build software 
programs and effectively track changes. 
            </p>
            </div>
            <div id="resume">
            <a href='../Varsha_Modake_resume .doc' target="_blank">Download Resume</a>
            </div>
      </div>
    </section>



    )
}

}