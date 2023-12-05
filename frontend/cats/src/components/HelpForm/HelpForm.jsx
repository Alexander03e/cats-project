
import './HelpForm.css'
import React from 'react'
import Button from "../../components/Button/Button"

const HelpForm = (props) => {
    const [modalStatus, setModalStatus] = React.useState(false)

    const popUp = () => {
        setModalStatus(!modalStatus)
    }
    return (
        <>
            
            <form action="" className="help-form">
                <h1>{props.children}</h1>
                <input
                    type="number"
                    name="moneys"
                    placeholder="Введите сумму"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                />
                <Button onClick = {popUp}>Хочу помочь!</Button>
            </form>
            {modalStatus && (<div className="modal">
                Модальное окно
                <Button onClick = {() => (setModalStatus(false))}>Закрыть</Button>
            </div>)}
        
        </>
    )
}

export default HelpForm