import './Main.css'
import News from './News/News'
import React from 'react'
import HelpForm from '../../components/HelpForm/HelpForm'
import Animals from '../../components/Animals/Animals'
import Projects from '../projects/Projects'

const Main = (props) => {

    return (
        <section className="main">
            <div className="container">
                <News news={props.store.cats}/>
                <h1 className='mb-10'>проекты</h1><br />
                <Projects projects = {props.store.projects} donats={props.store.donats}/>
                <h1 className='mt-24'>наши животные</h1><br />
                <Animals cats = {props.store.cats}/>
                <br />
                <div id = 'help' className='flex justify-between'>
                    <HelpForm>оказать помощь животным</HelpForm>
                    <div class='notice'>
                        <h1 className='mb-12'>помощь вещами</h1>
                        <p>Приюту СРОЧНО необходимы:</p>
                        <p><strong>1.Медикаменты</strong></p>
                        <p> Амоксициллин, Ципрофлоксацин (мед.аптека)</p>
                        <p><strong>2. Сухой и влажный корм для собак и кошек</strong></p>
                        <p> Предпочтительны Royal Canin, Purina One, Perfect Fit.</p>
                        <p>Если вы можете помочь приюту чем-то из списка выше, пожалуйста, обратитесь по номеру телефона 8(000)000-00-00</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main