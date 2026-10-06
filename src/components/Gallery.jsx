import React from 'react';
import breakfastImg from '../assets/Breakfast.png';

const Gallery = () => {
  const images = [
    { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop", alt: "Cafe interior" },
    { src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop", alt: "Latte art" },
    { src: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=1964&auto=format&fit=crop", alt: "Coffee beans" },
    { src: breakfastImg, alt: "Breakfast" },
    { src: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1950&auto=format&fit=crop", alt: "Dessert" },
    { src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop", alt: "Barista" }
  ];

  return (
    <section id="gallery" className="section-padding">
      <div className="container">
        <h2 className="section-title brand-font">A Little Taste of Brew & Bloom</h2>
        <div className="row mt-5">
          {images.map((img, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div className="gallery-item">
                <img src={img.src} alt={img.alt} className="gallery-img" />
                <div className="gallery-overlay">
                  <i className="bi bi-instagram gallery-icon"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
