import React from "react";




const AboutUs = () => {

    return (
        <section id="aboutUs" class="aboutSection">
      <div data-aos="fade-right" data-aos-delay="150" class="aboutContent aos-init aos-animate">
        <p class="aboutMain">About <span style={{WebkitTextFillColor: "#E62249"}}>Us</span></p>
        <h2>
        we stand as a beacon of innovation and reliability<br/>
        in the realm of real estate services.
        </h2>
        <p>
        Since our inception, we have been committed to delivering excellence in 
        every facet of our operations, whether it's in property development, construction, or consultancy. 
        Our unwavering dedication to quality, integrity, and customer satisfaction sets us apart as a premier 
        real estate service provider.
        </p>
      </div>
      <div data-aos="fade-left" data-aos-delay="180" class="imagesSection aos-init aos-animate">
        <div class="imageOne">
          <h1>Quality</h1>
        </div>
        <div class="imageTwo">
          <div class="imgOne">
            <h1>Reliability</h1>
          </div>
          <div class="imgTwo">
            <h1>Integrity</h1>
          </div>
        </div>
      </div>
    </section>
    )
}


export default AboutUs;