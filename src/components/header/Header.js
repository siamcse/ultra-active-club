import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='navbar'>
            <div className='navbar-logo'>
                <img src="https://img.freepik.com/premium-vector/fitness-logo_25327-144.jpg?w=2000image.png" alt="" />
                <h2>Fitness Club</h2>
            </div>
            {/* <div className="navbar-link">
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/login">Login</a>
            </div> */}
        </nav>
        </div>
    );
};

export default Header;