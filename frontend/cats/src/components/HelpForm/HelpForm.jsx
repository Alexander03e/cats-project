import Button from "../Button/Button"
import './HelpForm.css'

const HelpForm = (props) => {

    return (
        <>
        
            <form action="" className="help-form">
                <h1>{props.children}</h1>
                <input
                    type="number"
                    name="moneys"
                    placeholder="Введите сумму"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                />
                <Button>Хочу помочь!</Button>
            </form>
        
        </>
    )
}

export default HelpForm