import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Exercise.css';

const Exercise = ({exercise, handleAddToList}) => {
    const {name,image,description,time} = exercise;
    return (
        <div className='exercise'>
            <img src={image} alt="" />
            <div className='exercise-info'>
                <h3 className='exercise-title'>{name}</h3>
                <p>Description: {description? description.slice(0,80)+"...":"Not availabe"}</p>
                <p>For Age: 20-60</p>
                <p>Time Required: {time}s</p>
            </div>
            <button onClick={()=>handleAddToList(time)} className='add-btn'>
                <p>Add to List</p>
                <FontAwesomeIcon icon={faCartPlus}/>
            </button>
        </div>
    );
};

export default Exercise;