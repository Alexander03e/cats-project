import { useState } from 'react';
import Project from "./Project/Project";
import './Projects.css'




const Projects = ({projects, donats}) => {
    
    return (
        <div className="flex justify-between flex-wrap gap-12">
        {projects.map((project, index) => {
            // const ccurSum = donats.filter(donat => donat.don.project.id == project.id)
            // .map(donat => setCurSum(curSum+donat.don.summ))
        
            return (
                <Project key={index} project = {project}>
                    <div className="project-img-wrapper">
                        <img className="project-img" src={project.img} alt="" />
                    </div>
                    <div className="project-content">
                        <h1 className="mb-10 h-20">{project.title}</h1>
                        <p className="h-24">{project.description}</p>
                    
                    <div className="project-progress flex flex-col ">
                        <div className="bg-amber-100 progress-bar"><div className = 'progress-bar' style={{width: Math.floor(project.current/project.goal*100)*5}}></div></div>
                        <div className="project-per flex justify-between">
                            <p>{Math.floor(project.current/project.goal*100)}%</p>
                            <p>{project.current} из {project.goal}</p>
                        </div>
                    </div>
                    </div>
                </Project>
            )

        })}

        </div>
    )
}

export default Projects