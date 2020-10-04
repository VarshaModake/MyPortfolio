import React,{Component} from 'react';
import ProjectList from '../Data/ProjectData';
import '../CSS/Project.css';

const Project=(props)=>{
    const {title,description,image,link}=props.project;
    return(
        <div>
        <h4>{title}</h4>
        <img src={image} alt='profile'></img>
        <p>{description}</p>
        <a href={link} target="_blank">{link}</a>
    </div>
    )
}

const  Projects=()=>(
    <div className="projectsWrapper">
       
        <h3>Highlighted Project</h3>
        <div id="projectItem">
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