import { useState } from "react"
import Button from "../../components/Button/Button"
import axios from 'axios'

const Singin = () => {
    const [state, setState] = useState({
        username: '',
        password: '',
    })

    const login = async (e) => {
        await axios
            .post('http://localhost:8000/api/token/', {
                username: state.username,
                password: state.password,
            })
            .then(res => window.localStorage.setItem('token', res.data.token))
            .catch(err => console.log(err))
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
            
    <Button onClick={ login } >Войти</Button>
</form>
        </div>
    )
}
export default Singin