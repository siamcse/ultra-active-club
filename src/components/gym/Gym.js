import React, { useEffect, useState } from 'react';
import Activity from '../activity/Activity';
import Exercise from '../exercise/Exercise';
import './Gym.css'

const Gym = () => {
    const [exercises, setExercise] = useState([]);
    useEffect(()=>{
        fetch('exercises.json')
        .then(res => res.json())
        .then(data => setExercise(data))
    },[])
    console.log(exercises);
    return (
        <div className='gym-container'>
            <div className="exercise-container">
                {
                    exercises.map(exercise => <Exercise exercise={exercise} key={exercise.id}></Exercise>)
                }
            </div>
            <div className="activity-container">
                <Activity></Activity>
            </div>
        </div>
    );
};

export default Gym;