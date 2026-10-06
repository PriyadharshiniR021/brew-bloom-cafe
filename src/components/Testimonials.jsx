import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ananya R.",
      rating: 5,
      text: "The coffee is amazing and the atmosphere is even better. My favorite place to spend a quiet morning."
    },
    {
      name: "Karthik M.",
      rating: 5,
      text: "Beautiful interiors, friendly staff, and genuinely good food. Highly recommended!"
    },
    {
      name: "Meera S.",
      rating: 5,
      text: "Perfect place to catch up with friends over a great cup of coffee."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <h2 className="section-title brand-font">Loved By Our Community</h2>
        <div className="row g-4 mt-4">
          {testimonials.map((testimonial, index) => (
            <div className="col-12 col-lg-4" key={index}>
              <div className="testimonial-card">
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i className="bi bi-star-fill" key={i}></i>
                  ))}
                </div>
                <p className="testimonial-text">“{testimonial.text}”</p>
                <h5 className="testimonial-author brand-font">{testimonial.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
