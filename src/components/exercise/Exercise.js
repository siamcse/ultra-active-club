import React from 'react';
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
            </button>
        </div>
    );
};

export default Exercise;