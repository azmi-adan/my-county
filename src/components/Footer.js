import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Azmi Adan. All rights reserved.</p>
        <p className="footer-message">Crafted with passion to inspire and uplift.</p>
      </div>
    </footer>
  );
};

export default Footer;
