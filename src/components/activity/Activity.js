import React from 'react';
import Calculation from './calculation/Calculation';
import Profile from './profile/Profile';
import './Activity.css';

const Activity = () => {
    return (
        <div className='activity'>
            <Profile></Profile>
            <Calculation></Calculation>
        </div>
    );
};

export default Activity;