import { useState } from "react"
import Button from "../../components/Button/Button"
import axios from 'axios'
import { NavLink } from "react-router-dom"
const Singin = ({user}) => {
    const [state, setState] = useState({
        username: '',
        password: '',
    })

    const [error, setError] = useState(false)
    const login = async (e) => {
        console.log(state)
        await axios
            .post('http://localhost:8000/api/token/', {
                username: state.username,
                password: state.password,
            })
            .then(res => {
                setError(true)
                window.localStorage.setItem('token', res.data['token'])
            })
            .catch(err => {console.log(err); setError(false)})

    }

    return (
        <div className="container">
        <form className='reg-form'>
            <h1 className='mb-8'>вход</h1>
            <input
                type="text"
                name="username"
                onChange={e => setState({...state, username: e.target.value})}
                value={ state.username }
                placeholder="Логин"
                required
            />
            <br />
            <input
                type="password"
                name="password"
                onChange={e => setState({...state, password: e.target.value})}
                value={ state.password }
                placeholder="Пароль"
                required
            />
            <br />
            {!error && <div>
                <p className="pb-4">Неверный логин или пароль!</p>
            </div>}
    <NavLink to ={error == false ? '/singin' : '/'} onClick={ login } className='singin singin-m rounded-3xl px-4 py-2' >Войти</NavLink>
</form>
        </div>
    )
}
export default Singin