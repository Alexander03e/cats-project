import Button from "../../components/Button/Button"

const Singin = () => {

    return (
        <div className="container">
        <form className='reg-form'>
            <h1 className='mb-8'>вход</h1>
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
            
  <Button>Войти</Button>
</form>
        </div>
    )
}
export default Singin