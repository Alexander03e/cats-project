import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './AnimalDetail.css'
import Button from '../../../../components/Button/Button'
import axios from 'axios';
import Modal from '../../../../pages/arrieved/Modal';

const AnimalDetail = ({cats}) => {
    const [currentCat, setCurrentCat] = useState('');
    const [showModal, setShowModal] = useState(false);
    const { animalid } = useParams();
    
    useEffect(() => {
        setCurrentCat(cats.find(cat => cat.id == animalid))
        console.log(currentCat)
    },[])

    const giveHouse = () => {
        axios
            .patch(currentCat?.url, {
                status: 0,
                headers: {
                    Authorization: `Token ${window.localStorage.getItem('token')}`
                }
            })
            .then(res => {
                setShowModal(true)
                window.location.href='http://localhost:5173/arrieved'
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="container">
            <div className="cat-detail-wrapper flex justify-between">
                <img className='flex-1 mr-20'src={currentCat.photo} alt="" />
                <div className="detail-content-wrapper flex-1">
                    <h1 className='mb-10'>{currentCat.name}</h1>
                    <p>Возраст: {currentCat.age}</p>
                    <p>Дата поступления: {currentCat.receipt_date}</p>
                    <p>Пол: {currentCat.gender}</p>
                    <p>Цвет: {currentCat.color}</p>
                    <p>Порода: {currentCat.breed}</p>
                    <p>Стериализована: {currentCat.sterilization}</p>
                    <p>Найдена по адресу: {currentCat.address}</p>
                    <p className='mb-16'>Диагноз при поступлении: {currentCat.diagnosis}</p>
                    {currentCat.status == 1 ? <Button onClick={giveHouse}>Подарить дом !</Button> : <p className='px-6 py-3 rounded-3xl text-center bg-backgroundColor w-40'>Дом подарен</p>}
                    {showModal && <Modal content='ваша заявка принята! ожидайте письмо на почту.' setOpened={setShowModal} />}
                </div>
            </div>
        </div>
    )
}

export default AnimalDetail;