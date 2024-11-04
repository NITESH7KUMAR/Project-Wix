import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <p>@ Mr. Nitesh Kumar, Arogya.com</p>
            <p>© 2024 My Website. All rights reserved.</p>

            <footer>
                <a href="*">
                    <div className="foot-panel1" style={{ cursor: 'pointer' }}>
                        Back to Top
                    </div>
                </a>

                <div className="foot-panel2">
                    <ul>
                        <p>Get to know Us</p>
                        <a href="#home">Home</a>
                        <a href="#about-us">About Us</a>
                        <a href="#careers">Careers</a>
                        <a href="#consult-doctors">Consult Doctors Online</a>
                    </ul>
                    <ul>
                        <p>Connect with Us</p>
                        <a href="#facebook">Facebook</a>
                        <a href="#twitter">Twitter</a>
                        <a href="#instagram">Instagram</a>
                        <a href="#linkedin">LinkedIn</a>
                    </ul>
                    <ul>
                        <p>Our Services</p>
                        <a href="#order-medicine">Order Medicine</a>
                        <a href="#healthcare-products">Healthcare Products</a>
                        <a href="#lab-tests">Lab Tests</a>
                        <a href="#collection-centre">Find Nearest Collection Centre</a>
                    </ul>
                    <ul>
                        <p>Featured Categories</p>
                        <a href="#top-products">Top Products</a>
                        <a href="#personal-care">Personal Care</a>
                        <a href="#healthcare-devices">Healthcare Devices</a>
                        <a href="#health-food">Health Food and Drinks</a>
                        <a href="#skin-care">Skin Care</a>
                        <a href="#fitness-supplements">Fitness Supplements</a>
                        <a href="#mother-baby-care">Mother and Baby Care</a>
                        <a href="#sexual-wellness">Sexual Wellness</a>
                    </ul>
                    <ul>
                        <p>Let Us Help You</p>
                        <a href="#your-account">Your Account</a>
                        <a href="#returns">Returns Centre</a>
                        <a href="#purchase-protection">100% Purchase Protection</a>
                        <a href="#help">Help</a>
                    </ul>
                </div>
            </footer>

        </div>
    );
};

export default Footer;
