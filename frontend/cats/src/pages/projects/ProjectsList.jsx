import Projects from './Projects'


const ProjectsList = ({projects}) => {

    return (
        <div className='container'>
        <Projects projects = {projects}/>
        </div>
    )
}

export default ProjectsList;