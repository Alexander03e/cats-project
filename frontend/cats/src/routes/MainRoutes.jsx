import { useState } from 'react'
import Registration from '../pages/registration/Registration'
import Singin from '../pages/singin/Singin'
import HelpInfo from '../pages/help-info/HelpInfo'
import Contacts from '../pages/contacts/Contacts'
import Main from '../pages/main/Main'
import About from '../pages/about/About'
import { Route, Routes } from 'react-router-dom'
import HelpForm from '../components/HelpForm/HelpForm'

const MainRoutes = () => {

    return (
    <Routes>
        <Route path = "/" element = {<Main />} />
        <Route path = "want-help" element = {<HelpForm />} />
        <Route path = "registration" element = {<Registration />} />
        <Route path = "singin" element = {<Singin />} />
        <Route path = "help-info" element = {<HelpInfo />} />
        <Route path = "contacts" element = {<Contacts />} />
        <Route path = "about" element = {<About />} />
    </Routes>

    )
}
export default MainRoutes