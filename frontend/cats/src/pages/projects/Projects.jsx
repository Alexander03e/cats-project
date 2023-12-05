import Project from "./Project/Project";
import './Projects.css'




const Projects = ({projects}) => {
        
    return (
        <div className="flex justify-between">
        {projects.map((project, index) => {
            return (
                <Project key={index} project = {project}>
                    <div className="project-img-wrapper">
                        <img className="project-img" src={project.img} alt="" />
                    </div>
                    <div className="project-content">
                        <h1 className="mb-10 h-20">{project.title}</h1>
                        <p className="h-24">{project.description}</p>
                    
                    <div className="project-progress flex flex-col ">
                        <div className = 'progress-bar' style={{width: Math.floor(project.current_sum/project.total_sum*100)*5}}></div>
                        <div className="project-per flex justify-between">
                            <p>{Math.floor(project.current_sum/project.total_sum*100)}%</p>
                            <p>{project.current_sum} из {project.total_sum}</p>
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