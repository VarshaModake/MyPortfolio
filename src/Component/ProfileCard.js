import React from 'react';
import '../CSS/ProfileCard.css';
import ProfilePicture from '../Assets/profile.jpg'

export default function ProfileCard()
{
    return(
        <div class="profilecard">
  <img src={ProfilePicture}alt="Varsha" />
  <h3>Varsha Modake</h3>
  <p class="profiletitle">Full Stack Developer.</p>
  </div>
    )
}