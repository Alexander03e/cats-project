
import './HelpForm.css'
import axios from 'axios'
import React from 'react'
import Button from "../../components/Button/Button"
import Modal from "../../pages/arrieved/Modal"
const HelpForm = (props) => {
    const [modalStatus, setModalStatus] = React.useState(false)
    const [curSum, setCurSum] = React.useState(0)
    const changeSum = (e) => {
        setCurSum(e.target.value)
        console.log(curSum)
    }
    const popUp = () => {
        setModalStatus(!modalStatus)
        
        let random_project = Math.floor(Math.random()*(props.store.projects.length))
        
        
        axios.post(`http://127.0.0.1:8000/api/donats/`, {
            project: `${props.store.projects[random_project].url}`,
            user: `http://127.0.0.1:8000/api/users/1/`,
            summ: curSum,
            headers:{
                Authorization: `Token ${window.localStorage.getItem('token')}`
            }
        }).then(res => console.log(res))
        .catch(err => console.log(err))

    }
    return (
        <>
            
            <form action="" className="help-form">
                <h1>{props.children}</h1>
                <input
                    type="number"
                    name="moneys"
                    placeholder="Введите сумму"
                    value ={curSum}
                    onChange={changeSum}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                />
                <Button onClick = {popUp}>Хочу помочь!</Button>
            </form>
            {modalStatus && (<div className="modal">
                <Modal content={'Спасибо за ваше пожертвование!'} setOpened ={setModalStatus}/>
            </div>)}
        
        </>
    )
}

export default HelpForm