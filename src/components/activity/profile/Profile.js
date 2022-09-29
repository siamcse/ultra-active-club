import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './Profile.css';

const Profile = () => {
    return (
        <div>
            <div className='person'>
                <img src="data/images/IMG_1911.jpg" alt="" />
                <div className='person-info'>
                    <h3>Abu Siam</h3>
                    <p>
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span className='address'>Jamalpur, Bangladesh</span>
                    </p>
                </div>
            </div>
            <div className='person-details'>
                <div>
                    <p><span className='info-number'>61</span>KG</p>
                    <p>Weight</p>
                </div>
                <div>
                    <p><span className='info-number'>5.6</span>ft</p>
                    <p>Height</p>
                </div>
                <div>
                    <p><span className='info-number'>22</span>yrs</p>
                    <p>Age</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;