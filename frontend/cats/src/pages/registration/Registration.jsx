import './Registration.css'
import Button from '../../components/Button/Button'
const Registration = () => {
        

    return (
        
            <div className="container">
            <form className='reg-form'>
                <h1 className='mb-8'>регистрация</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="Логин"
                    required
                />
                <br />
                <input
                    type="password"
                    name="password"
                    // value={password}
                    // onChange={handleChange}
                    placeholder="Пароль"
                    required
                />
                <br />
                <input
                    type="password"
                    name="confirmPassword"
                    // value={confirmPassword}
                    // onChange={handleChange}
                    placeholder="Повторите пароль"
                    required
                />
                <br />
                <input
                    type="text"
                    name="fullName"
                    // value={fullName}
                    // onChange={handleChange}
                    placeholder="ФИО"
                    required
                />
                <br />
                <input
                    type="email"
                    name="email"
                    // value={email}
                    // onChange={handleChange}
                    placeholder="Email"
                    required
                />
                <br />
                <input
                    type="text"
                    name="city"
                    // value={email}
                    // onChange={handleChange}
                    placeholder="С какого вы города?"
                    required
                />
                <br />
      <Button>Зарегистрироваться</Button>
    </form>
            </div>
        
    )
}

export default Registration