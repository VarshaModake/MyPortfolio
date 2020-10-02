import React,{Component} from 'react';
import ProjectList from '../Data/ProjectData';
import '../CSS/Project.css';

const Project=(props)=>{
    const {title,description,image,link}=props.project;
    return(
        <div style={{display:'inline-block' ,margin:2 , width: 300}}>
        <h4>{title}</h4>
        <img src={image} alt='profile' style={{width:200,height:100}} ></img>
        <p>{description}</p>
        <a href={link}>{link}</a>
    </div>
    )
}

const  Projects=()=>(
    <div className="projectsWrapper">
       
        <h2>Highlighted Project</h2>
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