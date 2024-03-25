import React from 'react';

const Testimonials = () => {
  return (
    <div className="testimonials" id='testimonials'>
     <h2>What <span style={{WebkitTextFillColor: "#E62249"}}>our clients say</span></h2>
     <p>Lorem Ipsum has been the industry's standard dummy text.</p>
    <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" ></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div className='testimonial'>
               <p>"Lorem Ipsum has been the industry's standard dummy text."</p>
               <h3>zkjsbgsjd</h3>
          </div>
          <div className='testimonial'>
               <p>"Lorem Ipsumdummy text."</p>
               <h3>zkjsbgsjd</h3>
          </div>
        </div>
        <div class="carousel-item">
        <div className='testimonial'>
               <p>"Lorem Ipsum has been the industry's standard dummy text."</p>
               <h3>zkjsbgsjd</h3>
          </div>
          <div className='testimonial'>
               <p>"Lorem Ipsumdummy text."</p>
               <h3>zkjsbgsjd</h3>
          </div>
        </div>
        <div class="carousel-item">
        <div className='testimonial'>
               <p>"Lorem Ipsum has been the industry's standard dummy text."</p>
               <h3>zkjsbgsjd</h3>
          </div>
          <div className='testimonial'>
               <p>"Lorem Ipsumdummy text."</p>
               <h3>zkjsbgsjd</h3>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Testimonials;
