import React, { useState } from 'react';
import './Calculation.css';

const Calculation = ({time}) => {
    const [breakTime, setBreakTime] = useState(0);
    const times = [10,20,30,40];
    const addBreakTime = (selectTime) =>{
        setBreakTime(selectTime);
    }
    return (
        <div>
            <div>
                <h2>Add A Break</h2>
                <div className='break-time'>
                    {
                        times.map(time => <button 
                            onClick={()=>addBreakTime(time)}>{time}s</button>)
                    }
                </div>
            </div>
            <div>
                <h2>Exercise Details</h2>
                <h3 className='time-bg'>Exercise time <span>{time}s</span></h3>
                <h3 className='time-bg'>Break time <span>{breakTime}s</span></h3>
            </div>
            <button className='complete-btn'>
                <p>Activity Completed</p>
            </button>
        </div>
    );
};

export default Calculation;