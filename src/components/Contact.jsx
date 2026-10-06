import React from 'react';
import { cafeInfo } from '../data/cafeInfo';

const Contact = () => {
  return (
    <>
      <section id="contact" className="section-padding">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <h2 className="section-title brand-font text-start">Come Say Hello</h2>
              
              <div className="contact-info-item mt-5">
                <i className="bi bi-geo-alt contact-icon"></i>
                <div>
                  <h5 className="fw-bold">Address</h5>
                  <p className="text-muted" style={{whiteSpace: 'pre-line'}}>{cafeInfo.shortAddress}</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <i className="bi bi-telephone contact-icon"></i>
                <div>
                  <h5 className="fw-bold">Phone</h5>
                  <p className="text-muted">{cafeInfo.phone}</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <i className="bi bi-envelope contact-icon"></i>
                <div>
                  <h5 className="fw-bold">Email</h5>
                  <p className="text-muted"><a href={`mailto:${cafeInfo.email}`} className="text-muted text-decoration-none">{cafeInfo.email}</a></p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <i className="bi bi-clock contact-icon"></i>
                <div>
                  <h5 className="fw-bold">Opening Hours</h5>
                  <p className="text-muted mb-0">{cafeInfo.hours.weekdays}</p>
                  <p className="text-muted">{cafeInfo.hours.weekends}</p>
                </div>
              </div>
              
              <div className="d-flex gap-3 mt-4">
                <a href="#" className="btn-primary-custom">Get Directions</a>
                <a href={`tel:${cafeInfo.phone.replace(/\s/g, '')}`} className="btn-outline-custom">Call Us</a>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="map-placeholder h-100 p-0 border-0 overflow-hidden" style={{ borderRadius: '16px', minHeight: '400px' }}>
                <iframe 
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(cafeInfo.address)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: '400px' }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cafe Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-overlay"></div>
        <div className="container cta-content">
          <h2 className="cta-heading brand-font">{cafeInfo.cta.heading}</h2>
          <p className="fs-4 mb-5">{cafeInfo.cta.text}</p>
          <a href="#contact" className="btn-primary-custom btn-lg px-5">Visit {cafeInfo.name}</a>
        </div>
      </section>
    </>
  );
};

export default Contact;
