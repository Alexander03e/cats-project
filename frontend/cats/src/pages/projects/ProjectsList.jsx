import Projects from './Projects'


const ProjectsList = ({projects,donats}) => {
    
    return (
        <div className='container'>
        <Projects projects = {projects} donats={donats}/>
        </div>
    )
}

export default ProjectsList;