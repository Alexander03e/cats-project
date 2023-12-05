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

    return (
    <Routes>
        <Route path = "/" element = {<Main store = {props.store}/>} />
        <Route path = "want-help" element = {<HelpForm />} />
        <Route path = "registration" element = {<Registration />} />
        <Route path = "singin" element = {<Singin />} />
        <Route path = "help-info" element = {<HelpInfo />} />
        <Route path = "contacts" element = {<Contacts />} />
        <Route path = "about" element = {<About />} />
        <Route path = "arrieved/" element = {<Arrieved cats = {props.store.cats}/> } />
        <Route path = "/animal/:animalid" element ={<AnimalDetail cats={props.store.cats}/>} />
        <Route path ='projects' element = {<ProjectsList projects = {props.store.projects}/>} />
        <Route path = 'departed' element = {<Departed departed = {props.store.departed}/>} />
        <Route path ='/profile' element = {<Profile />}/>
    </Routes>

    )
}
export default MainRoutes