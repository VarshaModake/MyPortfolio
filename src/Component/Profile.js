import React,{Component} from 'react';
import skills from './Skills';
import ProfilePicture from '../Assets/profile.jpg'
import '../CSS/Profile.css'
import Titles from './Titles';
import Skills from './Skills';
import ProfileCard from './ProfileCard';

export default class Profile extends Component{
 
render()
{
    return(
 
        <div className="intro-wrapper">
          <div className="left-column">
            <ProfileCard></ProfileCard>
          </div>

          <div className="center-column">
            <div id="preview-shadow">
              
                <h4>Who I am ?</h4>
                <p>
                <Titles/>
                </p>
                 
            </div>
         
          </div>
          
             <Skills></Skills>
           
          
       
      </div>
     
   



    )
}

}