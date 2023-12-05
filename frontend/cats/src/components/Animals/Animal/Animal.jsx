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
                <NavLink to={`/animal/${props.index}`}><img src="/img/help-info/image 25.png" alt="" /></NavLink>
                
            </div>
            <div className='flex justify-between p-4'>
                <h1 className="mb-4 mt-2">{props.cat.name}</h1>
                <Status color={props.cat.status_code == 1 ? 'red' : props.cat.status_code == 2 ? 'yellow' : 'lightgreen'}/>
            </div>
            <p className="pl-6 pr-6 pb-12">{`${props.cat.breed}, ${props.cat.age}, ${props.cat.description}`}</p>
            {props.children}<br /><br />    
        </div>
    )
}

export default Animal;