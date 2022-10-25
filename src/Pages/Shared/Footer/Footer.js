import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className="bg-primary text-center text-lg-start mt-5">
                
                <div className="text-center p-3 style">
                    © 2022 Copyright:
                    <a className="text-dark " href="https://mdbootstrap.com/" style={{ textDecoration: 'none' }}>Course World</a>
                </div>
               
            </footer>
        </div>
    );
};

export default Footer;