import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="branding">
                <h1>My Portfolio</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="projects.html">Projects</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;