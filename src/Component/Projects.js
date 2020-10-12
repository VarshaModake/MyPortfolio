import React,{Component} from 'react';
import ProjectList from '../Data/ProjectData';
import '../CSS/Project.css';

const Project=(props)=>{
    const {title,description,image,link}=props.project;
    return(
       
        <div className="card">  
        <img src={image} alt='profile'></img>   
        <div class="container">
         <h4><b>{title}</b></h4>
        <p>{description}</p>
        <a href={link} target="_blank">{link}</a>
        </div>
        </div>
    )
}

const  Projects=()=>(
    <div className="projectsWrapper">
       
        <h3>Highlighted Project</h3>
        <div id="projectItem" >
            {
                ProjectList.map(PROJECT=>{
                    return(
                        <Project key={PROJECT.id}  project={PROJECT}/>
                    )
                })
            }
        </div>
    </div>

)

export default Projects;