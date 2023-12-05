import { NavLink } from 'react-router-dom'
import './Header.css'
import Button from '../../Button/Button'
import scroll from 'react-scroll'

const Header = () => {
    const scrollToBottom = () => {
        alert('efw')
        
    }

    return (
        <div className='header'>
        <div className="container">
            
            <div className = 'nav-panel'>
                <nav className ="nav-info-wrapper pb-4 flex justify-between items-center border-b-2 border-black">
                    <div className="nav-info">
                        <div className='nav-info__item'>
                            <img className='icon' src="/img/header/vector_3.png" alt="" />
                            <p onClick={scrollToBottom} className=''>+7(000)000-00-00</p>
                        </div>
                        <div className='nav-info__item'>
                            <img className ='icon' src="/img/header/vector_2.png" alt="sdfsd" />
                            <p>пн-пт: 9:00-20:00</p>
                        </div>
                        <div className='nav-info__item mr-12'>
                            <img className ='icon' src="/img/header/vector_2.png" alt="sdfsd" />
                            <p>сб-вс: 9:00-17:00</p>
                        </div>
                        <a href='#'><img src="/img/header/vector_1.png" className='w-8' alt="" /></a>
                        <a href='#' className='-ml-5'><img src="/img/header/vector.png" className='w-6' alt="" /></a>
                    </div>
                    <div className="flex">
                        <NavLink to="/singin" className="singin">вход</NavLink>
                        <NavLink to="/registration" className="singup ml-12">регистрация</NavLink>
                    </div>
                </nav>
                <nav className='nav-menu pt-2'>
                    <NavLink to ='/'> <img src="img/header/logo.png" alt="" /> </NavLink>
                    <div className="nav-menu__navigation ml-12">
                        <NavLink to="help-info">Как помочь</NavLink>
                        <NavLink to="projects">Проекты</NavLink>
                        <NavLink to="arrieved">Поступившие</NavLink>
                        <NavLink to="departed">Выбывшие</NavLink>
                        <NavLink to="about">О приюте</NavLink>
                        <NavLink to="contacts">Контакты</NavLink>
                    </div>
                    <Button><NavLink to='/'>Хочу помочь!</NavLink></Button>
                </nav>
            </div>
            </div>
        </div>      
    )
}

export default Header