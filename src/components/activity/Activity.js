import React from 'react';
import Calculation from './calculation/Calculation';
import Profile from './profile/Profile';
import './Activity.css';

const Activity = ({time}) => {
    return (
        <div className='activity'>
            <Profile></Profile>
            <Calculation time={time}></Calculation>
        </div>
    );
};

export default Activity;