import HelpForm from '../../components/HelpForm/HelpForm';
import './Profile.css'

const Profile = () => {

    return (
        <div className="container">
            <div className="profile-page flex gap-24">
                <div className="profile-content flex-1">
                    <h1 className="mb-12">личный кабинет</h1>
                    <h1>Иванов иван</h1><br />
                    <p>почта</p>
                    <p>город</p><br />
                </div>
                <div className=" flex-1">
                    <HelpForm />
                </div>
            </div>

        </div>
    )
}

export default Profile;