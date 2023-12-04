import Project from "./Project/Project";
import './Projects.css'



const Projects = () => {

    return (
        <>
            <Project> 
                <div className="project-img-wrapper">
                    <img className="project-img" src="/img/help-info/image 25.png" alt="" />
                </div>
                <div className="project-content">
                    <h1 className="mb-10">Сбор средств на отделку вирусного отделения</h1>
                    <p>К сожалению, наше кожное отделение совсем скоро не сможет принимать пациентов, которые так нуждаются в помощи... Поэтому было принято решение делать ремонт!</p>
                
                <div className="project-progress flex flex-col ">
                    <div className = 'progress-bar'></div>
                    <div className="project-per flex justify-between">
                        <p>100%</p>
                        <p>moneys</p>
                    </div>
                </div>
                </div>
            </Project>
        </>
    )
}

export default Projects