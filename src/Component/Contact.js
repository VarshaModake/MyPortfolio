import React from 'react';
import '../CSS/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSkype} from '@fortawesome/free-brands-svg-icons';
import {faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons';
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons';

export default function Contact(){
return(
    <div className="ContactWrapper">
        <div id="SkypeId" className="ContactItem">
       <FontAwesomeIcon icon={faSkype} size='5x'></FontAwesomeIcon>
       <h3><a href="skype:vmodake1?call">vmodake1</a></h3>
       
        </div>
        <div id="Phone" className="ContactItem">
        <FontAwesomeIcon icon={faPhoneAlt} size='5x'></FontAwesomeIcon>
        <h3>+44(0)7459569549</h3>
        </div>
        <div id="mail" className="ContactItem">
        <FontAwesomeIcon icon={faEnvelopeSquare} size='5x'></FontAwesomeIcon>
        <h3><a href="mailto:varshamodake@gmail.com">VarshaModake@gmail.com</a></h3>
        </div>
    </div>
)
}