import './Arrieved.css'
import React from 'react'
import Animals from '../../components/Animals/Animals'
import Status from '../../components/Animals/Status'
import Button from '../../components/Button/Button'

const Arrieved = ({cats}) => {

    

    const [searched, setSearched] = React.useState('')
    const [searchRes, setSearchRes] = React.useState([' '])

    const onInputChange = (e) => {
        setSearched(e.target.value)
        let value = e.target.value;
            const filteredResults =  cats.filter((cat) =>
            cat.name.toLowerCase().includes(value.toLowerCase())
            );
        console.log(filteredResults)
        setSearchRes(filteredResults)
        
    }


    return (
        <div className='container'>
        <h1 className='mb-12'>Наши животные</h1>
        <div className="search-form flex gap-8">
            <input type='text' className='search py-2 px-4' placeholder='введите текст' value ={searched} onChange={onInputChange} />
            <Button>Найти</Button>
        </div>
        <ul>
            {searchRes.map((item) => {
                return (
                    <li>{item.name}</li>
                )
                })}
        </ul>
        <div className="filters flex gap-8 mt-16">
            <div className="filters__item">
                <p>здорова</p>
                <Status color={'#9cca86'} />
            </div>
            <div className="filters__item">
                <p>лечится</p>
                <Status color={'#d3b15a'} />
            </div>
            <div className="filters__item">
                <p>нужна помощь</p>
                <Status color={'#d35a5a'} />
            </div>
        </div>
        <Animals cats = {cats}>
            <Button>Подарить дом!</Button>
        </Animals>
        </div>
    )
}

export default Arrieved