import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-sections">
                <div className="footer-explore">
                    <h3>Explore</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Articles</a></li>
                        <li><a href="#">Tutorials</a></li>
                    </ul>
                </div>
                <div className="footer-support">
                    <h3>Support</h3>
                    <ul>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h3>Stay connected</h3>
                    <div className="social-icons">
                        <a href="#">Facebook</a>
                        <a href="#">Twitter</a>
                        <a href="#">Instagram</a>
                    </div>
                </div>
            </div>
            <p>DEV@Deakin 2022 &copy; All rights reserved</p>
        </footer>
    );
};

export default Footer;
