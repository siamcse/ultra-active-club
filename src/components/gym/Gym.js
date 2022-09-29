import React, { useEffect, useState } from 'react';
import Activity from '../activity/Activity';
import Exercise from '../exercise/Exercise';
import './Gym.css'

const Gym = () => {
    const [exercises, setExercise] = useState([]);
    const [time,setTime] = useState(0);
    useEffect(()=>{
        fetch('exercises.json')
        .then(res => res.json())
        .then(data => setExercise(data))
    },[])
    const handleAddToList = (selectTime) =>{
        setTime(time + selectTime);
    }
    return (
        <div className='gym-container'>
            <div className="exercise-container">
                {
                    exercises.map(exercise => <Exercise exercise={exercise} 
                    key={exercise.id}
                    handleAddToList={handleAddToList}
                    ></Exercise>)
                }
            </div>
            <div className="activity-container">
                <Activity time={time}></Activity>
            </div>
        </div>
    );
};

export default Gym;