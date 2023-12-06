import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './AnimalDetail.css'
import Button from '../../../../components/Button/Button'

const AnimalDetail = ({cats}) => {
    const [currentCat, setCurrentCat] = useState('');

    const { animalid } = useParams();

    useEffect(() => {
        setCurrentCat(cats.find(cat => cat.id == animalid))
        console.log(currentCat)
    },[])

    const giveHouse = () => {
        alert('Дом подарен!')
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
                    <Button onClick={giveHouse}>Подарить дом !</Button>
                </div>
            </div>
        </div>
    )
}

export default AnimalDetail;