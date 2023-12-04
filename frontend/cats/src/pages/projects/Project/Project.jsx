import './Projects.css'


const Project = (props) => {

    return (
        <div className="project">
            {props.children}
        </div>
    )
}

export default Project;