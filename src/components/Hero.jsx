import React from 'react';
import { cafeInfo } from '../data/cafeInfo';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <span className="eyebrow">{cafeInfo.hero.eyebrow}</span>
            <h1 className="hero-heading brand-font">{cafeInfo.hero.heading}</h1>
            <p className="hero-desc">{cafeInfo.hero.description}</p>
            <div className="d-flex gap-3 flex-wrap">
              <a href="#menu" className="btn-primary-custom">Explore Our Menu</a>
              <a href="#contact" className="btn-outline-custom">Visit Us</a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-image-wrapper">
              <img src={cafeInfo.hero.image} alt={`${cafeInfo.name} Interior`} className="hero-image" />
              <div className="floating-card">
                <i className="bi bi-cup-hot-fill fs-3 text-sage"></i>
                <div>
                  <h6 className="mb-0 fw-bold">{cafeInfo.hero.floatingCardText.split('\n')[0]}</h6>
                  <small className="text-muted">{cafeInfo.hero.floatingCardText.split('\n')[1]}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
