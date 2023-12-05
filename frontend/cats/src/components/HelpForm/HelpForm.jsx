import Button from "../Button/Button"
import './HelpForm.css'
import React from 'react'

const HelpForm = (props) => {
    const [modalStatus, setModalStatus] = React.useState(false)

    const popUp = () => {
        setModalStatus(true)
        alert('Спасибо за помощь!')
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
        
        </>
    )
}

export default HelpForm