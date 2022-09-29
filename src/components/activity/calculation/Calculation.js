import React from 'react';
import './Calculation.css';

const Calculation = () => {
    return (
        <div>
            <div>
                <h2>Add A Break</h2>
                <div className='break-time'>
                    <button>10s</button>
                    <button>20s</button>
                    <button>30s</button>
                    <button>40s</button>
                </div>
            </div>
            <div>
                <h2>Exercise Details</h2>
                <h3 className='time-bg'>Exercise time </h3>
                <h3 className='time-bg'>Break time </h3>
            </div>
            <button className='complete-btn'>
                <p>Activity Completed</p>
            </button>
        </div>
    );
};

export default Calculation;