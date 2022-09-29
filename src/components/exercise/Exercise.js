import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Exercise.css';

const Exercise = ({exercise, handleAddToList}) => {
    const {name,image,mainMuscles,description,time} = exercise;
    return (
        <div className='exercise'>
            <img src={image} alt="" />
            <div className='exercise-info'>
                <h3>Name: {name}</h3>
                <p>Muscles: {mainMuscles}</p>
                <p>Description: {description? description.slice(0,100)+"...":"Not availabe"}</p>
                <p>For Age: 20-50</p>
                <p>Time: {time}</p>
            </div>
            <button onClick={()=>handleAddToList(time)} className='add-btn'>
                <p>Add to List</p>
                <FontAwesomeIcon icon={faCartPlus}/>
            </button>
        </div>
    );
};

export default Exercise;