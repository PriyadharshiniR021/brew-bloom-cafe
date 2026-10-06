import React from 'react';
import { cafeInfo } from '../data/cafeInfo';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-lg-5 mb-5 mb-lg-0">
            <img src={cafeInfo.about.image} alt="Barista preparing coffee" className="about-image" />
          </div>
          <div className="col-lg-6 offset-lg-1">
            <h2 className="section-title brand-font text-start">{cafeInfo.about.heading}</h2>
            <p className="fs-5 text-muted mb-4">{cafeInfo.about.text1}</p>
            <p className="text-muted mb-4">{cafeInfo.about.text2}</p>
            <a href="#menu" className="btn-outline-custom mt-2">Discover Our Offerings</a>
          </div>
        </div>
        
        <div className="row mt-5 pt-4">
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="stat-item">
              <h3>100%</h3>
              <p>Freshly Brewed</p>
            </div>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="stat-item">
              <h3>Local</h3>
              <p>Ingredients</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="stat-item">
              <h3>Every Day</h3>
              <p>Made With Care</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
