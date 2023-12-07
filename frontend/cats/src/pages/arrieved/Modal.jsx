
import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";
import './Arrieved.css'
const Modal = ({opened, setOpened, content}) => {

    const close = () => {
        setOpened(false)
        console.log('dd')
    }

    return (
        <>
        <div>
      
        <div className="fixed inset-0 flex items-center justify-center z-10 border">
          <div className="bg-gray-900 bg-opacity-50 absolute inset-0" onClick={close}></div>
          
          <div className="modal-content rounded-3xl p-8 z-20">
            <p>{content}</p>
            
            {opened && <div className="flex mt-20 justify-around">
                
                <NavLink to="/singin" className="singin-m notauth px-6 py-2">вход</NavLink>
                <NavLink to="/registration"  className="singup-m notauth ml-12 px-6 py-2">регистрация</NavLink>

            </div>}
          </div>
        </div>
    </div>
        </>
    )
}

export default Modal;