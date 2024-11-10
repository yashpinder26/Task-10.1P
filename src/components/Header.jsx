import React from 'react';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
    return (
        <header>
            <h1>DEV@Deakin</h1>
            <input className="search-box" type="text" placeholder="Search..." />
            <div className="header-buttons">
                <button>Post</button>
                <button>Login</button>
            </div>
        </header>
    );
};

export default Header;
