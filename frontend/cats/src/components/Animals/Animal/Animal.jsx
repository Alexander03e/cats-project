import { Route, Routes } from 'react-router-dom';
import React from "react";
import Status from "../Status";
import AnimalDetail from "./AnimalDetail/AnimalDetail";
import './Animal.css'

import { NavLink, Link } from "react-router-dom";

const Animal = (props) => {
    
    return (
        <div className="animal flex flex-col">
            <div className ='animal-img-container'>
                <NavLink to={`/animal/${props.cat.id}`}><div className='img-cat-container'><img src={props.cat.photo} alt="" /></div></NavLink>
            </div>
            <div className='flex justify-between p-4 items-center'>
                <h1 className="mb-4 mt-2">{props.cat.name}</h1>
                <Status color={props.cat.health_status == 1 ? '#9cca86' : props.cat.health_status == 2 ? '#d3b15a' : '#d35a5a'}/>
            </div>
            <p className="pl-6 pr-6 pb-12">{`${props.cat.breed}, ${props.cat.age}, ${props.cat.gender}`}</p>
            {props.children}<br /><br />    
        </div>
    )
}

export default Animal;