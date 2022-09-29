import React from 'react';
import './Profile.css'

const Profile = () => {
    return (
        <div>
            <div className='person'>
                <img src="data/images/IMG_1911.jpg" alt="" />
                <div className='person-info'>
                    <h3>Abu Siam</h3>
                    <p>Jamalpur, Bangladesh</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;