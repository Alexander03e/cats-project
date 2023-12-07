import HelpForm from '../../components/HelpForm/HelpForm';
import './Profile.css'
import Modal from '../../pages/arrieved/Modal';
import React from 'react';

const Profile = ({user, store, get_store}) => {
    const [modalStatus, setModalStatus] = React.useState(false)
    return (
        <div className="container">
            <div className="profile-page flex gap-24">
                <div className="profile-content flex-1">
                    <h1 className="mb-12">личный кабинет</h1>
                    <h1>{user?.full_name}</h1><br />
                    <p>{user?.email}</p>
                    <p>{user?.city}</p><br />
                </div>
                <div className=" flex-1">
                    <HelpForm store={store} get_store={get_store}/>
                </div>
                
                {modalStatus && (<div className="modal">
                <Modal content={'Спасибо за ваше пожертвование!'} setOpened ={setModalStatus}/>
            </div>)}
            </div>

        </div>
    )
}

export default Profile;