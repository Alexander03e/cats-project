import { useState } from 'react'
import Registration from '../pages/registration/Registration'
import Singin from '../pages/singin/Singin'
import HelpInfo from '../pages/help-info/HelpInfo'
import Contacts from '../pages/contacts/Contacts'
import Main from '../pages/main/Main'
import About from '../pages/about/About'
import Arrieved from '../pages/arrieved/Arrieved'
import { Route, Routes } from 'react-router-dom'
import HelpForm from '../components/HelpForm/HelpForm'
import Projects from '../pages/projects/Projects'
import AnimalDetail from '../components/Animals/Animal/AnimalDetail/AnimalDetail'
import ProjectsList from '../pages/projects/ProjectsList'
import Departed from '../pages/departed/Departed'
import Profile from '../pages/profile/Profile'

const MainRoutes = (props) => {
    let departed = props.store.cats.filter(cat => cat.status == 0)
    let arrieved = props.store.cats.filter(cat => cat.status == 1)
    
    
    return (
    <Routes>
        <Route path = "/" element = {<Main store = {props.store}/>} />
        <Route path = "want-help" element = {<HelpForm store={props.store}/>} />
        <Route path = "registration" element = {<Registration />} />
        <Route path = "singin" element = {<Singin user = {props.store.user}/>} />
        <Route path = "help-info" element = {<HelpInfo />} />
        <Route path = "contacts" element = {<Contacts />} />
        <Route path = "about" element = {<About />} />
        <Route path = "arrieved/" element = {<Arrieved cats = {arrieved} user ={props.store.user}/> } />
        <Route path = "/animal/:animalid" element ={<AnimalDetail cats={props.store.cats} user ={props.store.user}/>} />
        <Route path ='projects' element = {<ProjectsList projects = {props.store.projects} donats={props.store.donats}/>} />
        <Route path = 'departed' element = {<Departed departed = {departed}/>} />
        <Route path ='/profile' element = {<Profile user={props.store.user} store ={props.store}/>}/>
    </Routes>

    )
}
export default MainRoutes