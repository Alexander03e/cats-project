import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './AnimalDetail.css'


const AnimalDetail = ({cats}) => {
    const [currentCat, setCurrentCat] = useState('');

    const { animalid } = useParams();

    useEffect(() => {
        setCurrentCat(cats.find(cat => cat.id == animalid))
        console.log(currentCat)
    },[])
    return (
        <div className="container">
            <div className="cat-detail-wrapper flex justify-between">
                <img className='flex-1 mr-20'src="/img/help-info/image 25.png" alt="" />
                <div className="detail-content-wrapper flex-1">
                    <h1 className='mb-10'>{currentCat.name}</h1>
                    <p>Возраст: {currentCat.age}</p>
                    <p>Дата поступления: {'-'}</p>
                    <p>Находится в приюте: {'-'}</p>
                    <p>Пол: {'-'}</p>
                    <p>Цвет: {'-'}</p>
                    <p>Порода: {'-'}</p>
                    <p>Стериализована: {'-'}</p>
                    <p>Найдена по адресу: {'-'}</p>
                    <p>Диагноз при поступлении: {'-'}</p>
                </div>
            </div>
        </div>
    )
}

export default AnimalDetail;