import './Registration.css'
import axios from 'axios'
import Button from '../../components/Button/Button'
import { useState } from 'react'
const Registration = () => {
    const [state, setState] = useState({
        username: '',
        password1: '',
        password2: '',
        fullName: '',
        email: '',
        city: '',
        error: '',
    })
    const register = () => {
        setState({...state, error: ''})
        for (let key of Object.keys(state)) {
            if (key !== 'error' && key !== 'city') {
                if (state[key] === '') {
                    return setState({...state, error: 'Заполните все поля'})
                }
            }
        }
        axios
            .post('http://localhost:8000/api/users/register/', {
                username: state.username,
                password1: state.password1,
                password2: state.password2,
                full_name: state.fullName,
                email: state.email,
                city: state.city
            })
            .then(res => {
                console.log(res.data)
                window.location.href='/singin'
            })
            .catch(err => {
                console.log(err.request.response)
                setState({...state, error: err.request.response.split("\"")[3]})
            })
    }

    return (
        <div className="container">
            <form className='reg-form'>
                <h1 className='mb-8'>регистрация</h1>
                <input
                    type="text"
                    name="username"
                    value={state.username}
                    onChange={(e) => setState({...state, username: e.target.value})}
                    placeholder="Логин"
                    required
                />
                <br />
                <input
                    type="password"
                    name="password"
                    value={state.password1}
                    onChange={(e) => setState({...state, password1: e.target.value})}
                    placeholder="Пароль"
                    required
                />
                <br />
                <input
                    type="password"
                    name="confirmPassword"
                    value={state.password2}
                    onChange={(e) => setState({...state, password2: e.target.value})}
                    placeholder="Повторите пароль"
                    required
                />
                <br />
                <input
                    type="text"
                    name="fullName"
                    value={state.fullName}
                    onChange={(e) => setState({...state, fullName: e.target.value})}
                    placeholder="ФИО"
                    required
                />
                <br />
                <input
                    type="email"
                    name="email"
                    value={state.email}
                    onChange={(e) => setState({...state, email: e.target.value})}
                    placeholder="Email"
                    required
                />
                <br />
                <input
                    type="text"
                    name="city"
                    value={state.city}
                    onChange={(e) => setState({...state, city: e.target.value})}
                    placeholder="С какого вы города?"
                    required
                />
                <br />
                <Button onClick={register}>Зарегистрироваться</Button>
                <p className='mt-4'>{ state.error }</p>
            </form>
        </div>
        
    )
}

export default Registration