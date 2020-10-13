import React from 'react';
import '../CSS/Summary.css';
import Myfile from '../Data/Varsha_Modake_resume .doc';
export default function Summary()
{
    return(
        <div id="summarywrapper">
            <h2 className="header">Summary</h2>
            <br></br>
                            <ul className="nolist">
                <li> <p>
            Fullstack developer with primary focus on C# .net and react
            developments.
            <a href={Myfile} download="Varsha_Modake_Resume.doc">Download Resume</a>
          </p></li>
                    <li><b>Around 7 Years </b>of software experience in <b>evaluation, design, development, testing, maintenance and production support </b>using SDLC process, AGILE and SCRUM methodologies.</li>
                    <li>Currently learning latest technologies like Outsystem 11,NodeJS, Angular , and React Js. </li>
                    <li>Demonstrated proficiency in development using Microsoft.NET technologies like ASP.Net Web Forms, ASP.NET MVC, C# and AJAX Extensions.</li>
                    <li>Working Experience on creating Rest Services using <b>ASP .NET Web API</b></li>
                    <li>Hands on experience in design using Object Oriented Programming Principles like<b> Encapsulation, Inheritance, Polymorphism, re-usability and Design patterns</b> like Abstract factory, Singleton, Object pool a standard solution to common problems in software design.</li>
                    <li>Strong experience in the Web Applications Development using <b>HTML/CSS, JavaScript, ECMA, JQuery, JSON, AngularJS, and React.js</b></li>
                    <li>Extensive knowledge with source controls like<b> TFS, GIT, GITHUB to handle, manage code, merge code</b></li>
                    <li>Sound knowledge in <b>ITSM,Incident Resolution,PBI solving,CR resolution.</b></li>
                    <li>Extensive knowledge with database in writing<b> T-SQL queries, stored procedures, Triggers ,views, user defined functions, packages, database backup and restore with SQL Server</b></li>
                    <li>I am a self-motivated Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.
Well-versed in technology and writing code to create systems that are reliable and user-friendly. Skilled leader who has the proven ability to motivate, educate, and manage a team of professionals to build software programs and effectively track changes.</li>
                </ul>
               
           
        </div>
    )
        
    
}