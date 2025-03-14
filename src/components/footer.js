import React from 'react';

const Footer = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <ul>
                <li><a href="/about.html">About</a></li>
                <li><a href="/projects.html">Projects</a></li>
                <li><a href="/contact.html">Contact</a></li>
            </ul>
        </footer>
    );
};

export default Footer;