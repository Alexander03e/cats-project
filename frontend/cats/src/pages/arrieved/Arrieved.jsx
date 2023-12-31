import './Arrieved.css'
import React from 'react'
import Animals from '../../components/Animals/Animals'
import Status from '../../components/Animals/Status'
import Button from '../../components/Button/Button'
import Modal from './Modal'
import {NavLink} from 'react-router-dom'
const Arrieved = ({cats,user}) => {

    

    const [searched, setSearched] = React.useState('')
    const [searchRes, setSearchRes] = React.useState([' '])

    const onInputChange = (e) => {
        setSearched(e.target.value)
        let value = e.target.value;
            const filteredResults =  cats.filter((cat) =>{
                return (

                    cat.name.toLowerCase().includes(value.toLowerCase())
                )
                }
            );
        filteredResults.map((cat) => {
            console.log(cat.url)
        })
        console.log(filteredResults)
        setSearchRes(filteredResults)
        
    }
    const  [filteredStatus, setFilteredStatus] = React.useState(' ') 
    // let arrieved_cats = cats.filter(cat => cat.status == 0)

    let pressed = false;
    let newCats = cats
    // let newCats = arrieved_cats.filter(cat => cat.status == 0)
    filteredStatus != ' ' ? newCats = cats.filter((cat) => cat.health_status == filteredStatus) : newCats = cats
    
    
    const SortStatus = (status) => {
        setFilteredStatus(status)
        //pressed = !pressed
        //pressed ? setFilteredStatus(' ') : setFilteredStatus(status)
        //filteredStatus != ' ' ? setFilteredStatus(' ') : setFilteredStatus(status)
        console.log(newCats)
    }
    
    const [openedAuth, setOpenedAuth] = React.useState(false)
    const [openedSingin, setOpenedSingin] = React.useState(false)

    const giveHouse = async () => {
        localStorage.getItem('token')===null ? setOpenedAuth(true) : setOpenedSingin(true)
    }

    return (
        <div className='container'>
            {openedAuth && (<Modal content = 'чтобы забрать котика, авторизуйтесь!' opened = {openedAuth} setOpened ={setOpenedAuth}/>)}
            {openedSingin && (<Modal content = 'ваша заявка принята! ожидайте письмо на почту.' opened = {openedAuth} setOpened ={setOpenedSingin}/>)}
        <h1 className='mb-12'>Наши животные</h1>
        <div className="search-form flex gap-8">
            <input type='text' className='search py-2 px-4' placeholder='введите текст' value ={searched} onChange={onInputChange} />
            <Button>Найти</Button>
        </div>
        <ul className='mt-4'>
            {searchRes.map((item) => {
                return (
                    <div className=''>
                    <NavLink className='mt-4 border-b-2 border-black' to={`/animal/${item.id}`}>{item.name}</NavLink><br />
                    </div >
                )
                })}
        </ul>
        <div className="filters flex gap-8 mt-16">
            <div onClick ={() => SortStatus(1)} style ={{backgroundColor: filteredStatus == 1 ? 'var(--button-color)' : ''}} className="filters__item cursor-pointer">
                <p>здорова</p>
                <Status color={'#9cca86'} />
            </div>
            <div onClick ={() => SortStatus(2)} style ={{backgroundColor: filteredStatus == 2 ? 'var(--button-color)' : ''}} className="filters__item cursor-pointer">
                <p>лечится</p>
                <Status color={'#d3b15a'} />
            </div>
            <div onClick ={() => SortStatus(3)} style ={{backgroundColor: filteredStatus == 3 ? 'var(--button-color)' : ''}} className="filters__item cursor-pointer">
                <p>нужна помощь</p>
                <Status color={'#d35a5a'} />
            </div>
        </div>
        <Animals cats = {newCats} onGiveHouse={giveHouse}>
        </Animals>
        </div>
    )
}

export default Arrieved