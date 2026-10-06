import React, { useState } from 'react';
import { menuData } from '../data/menuData';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');

  const categories = [
    { id: 'coffee', label: 'Coffee' },
    { id: 'breakfast', label: 'Breakfast' },
    { id: 'desserts', label: 'Desserts' }
  ];

  const filteredMenu = menuData.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="section-padding bg-white">
      <div className="container">
        <h2 className="section-title brand-font">Made Fresh. Served With Love.</h2>
        
        <div className="d-flex justify-content-center flex-wrap mb-5">
          {categories.map(cat => (
            <button 
              key={cat.id}
              className={`btn-category ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {filteredMenu.map(item => (
            <div className="col-12 col-md-6 col-lg-4" key={item.id}>
              <div className="menu-card">
                <img src={item.image} alt={item.name} className="menu-img" />
                <div className="menu-content">
                  <div className="menu-header">
                    <h4 className="menu-title brand-font">{item.name}</h4>
                    <span className="menu-price">{item.price}</span>
                  </div>
                  <p className="menu-desc">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5">
          <a href="#" className="btn-outline-custom">View Full Menu</a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
