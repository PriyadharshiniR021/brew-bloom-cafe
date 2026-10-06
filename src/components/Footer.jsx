import React from 'react';
import { cafeInfo } from '../data/cafeInfo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h3 className="footer-brand">{cafeInfo.brandText}</h3>
            <p className="footer-text mt-3">Specialty coffee, fresh food, and good moments.</p>
            <div className="social-icons mt-4">
              <a href={cafeInfo.social.instagram} aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              <a href={cafeInfo.social.facebook} aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href={cafeInfo.social.x} aria-label="X (Twitter)"><i className="bi bi-twitter-x"></i></a>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
            <h4 className="footer-heading">Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-4 mb-4 mb-md-0">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-links">
              <li><i className="bi bi-geo-alt me-2 text-sage"></i> {cafeInfo.shortAddress.replace('\n', ', ')}</li>
              <li><i className="bi bi-telephone me-2 text-sage"></i> {cafeInfo.phone}</li>
              <li><i className="bi bi-envelope me-2 text-sage"></i> {cafeInfo.email}</li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-4">
            <h4 className="footer-heading">Hours</h4>
            <ul className="footer-links">
              <li>{cafeInfo.hours.weekdays.split(':')[0]}:<br/>{cafeInfo.hours.weekdays.split(': ').slice(1).join(': ')}</li>
              <li className="mt-2">{cafeInfo.hours.weekends.split(':')[0]}:<br/>{cafeInfo.hours.weekends.split(': ').slice(1).join(': ')}</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {currentYear} {cafeInfo.name} Café. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
