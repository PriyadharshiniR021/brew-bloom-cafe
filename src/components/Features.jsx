import React from 'react';

const Features = () => {
  const features = [
    {
      icon: "bi-cup-hot",
      title: "Specialty Coffee",
      text: "Carefully sourced beans and expertly crafted coffee."
    },
    {
      icon: "bi-basket",
      title: "Fresh Every Day",
      text: "Freshly prepared food using quality ingredients."
    },
    {
      icon: "bi-house-heart",
      title: "Cozy Atmosphere",
      text: "A comfortable space to relax, work, or catch up."
    },
    {
      icon: "bi-heart",
      title: "Made With Care",
      text: "Every cup and plate is prepared with attention to detail."
    }
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <h2 className="section-title brand-font">Why Brew & Bloom?</h2>
        <div className="row g-4 mt-4">
          {features.map((feature, index) => (
            <div className="col-12 col-md-6 col-lg-3" key={index}>
              <div className="feature-card">
                <i className={`bi ${feature.icon} feature-icon`}></i>
                <h4 className="feature-title brand-font">{feature.title}</h4>
                <p className="feature-text">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
