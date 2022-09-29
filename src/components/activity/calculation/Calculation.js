import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import './Calculation.css';

const Calculation = ({time}) => {
    const [breakTime, setBreakTime] = useState(0);
    const times = [10,20,30,40];
    useEffect(()=>{
        const storedTime = localStorage.getItem('break-time');
        let times;
        if(storedTime){
            times = storedTime;
        }
        setBreakTime(times)
    },[])
    const addBreakTime = (selectTime) =>{
        localStorage.setItem('break-time',selectTime);
        const storedTime = localStorage.getItem('break-time');
        let times = selectTime;
        if(storedTime){
            times = storedTime;
        }
        setBreakTime(times);
    }
    const notify = () => {
        Swal.fire({
            title: 'Done!',
            text: 'You complete your Exercise',
            icon: 'success',
            confirmButtonText: 'Cool'
        })
    };
    return (
        <div>
            <div>
                <h2>Add A Break</h2>
                <div className='break-time'>
                    {
                        times.map(time => <button 
                            onClick={()=>addBreakTime(time)}
                            key={time}>{time}s</button>)
                    }
                </div>
            </div>
            <div>
                <h2>Exercise Details</h2>
                <h3 className='time-bg'>Exercise time <span>{time}s</span></h3>
                <h3 className='time-bg'>Break time <span>{breakTime?breakTime:0}s</span></h3>
            </div>
            <button onClick={notify} className='complete-btn'>
                <p>Activity Completed</p>
            </button>
        </div>
    );
};

export default Calculation;