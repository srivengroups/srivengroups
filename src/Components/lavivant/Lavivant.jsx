import React from 'react';
import '../../propertyStyles/lavivant.css';

const Navbar = () => {
    return(
        <section className='lNavbar' id='lNavbar'>
            <nav class="navbar navbar-expand-lg fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/lavivant">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/lavivant#home">Home</a>
        <a className="nav-link" href="/lavivant">About Us</a>
        <a className="nav-link" href="/lavivant">Gallery</a>
        <a className="nav-link" href="/lavivant">Amenities</a>
        <a className="nav-link" href="/lavivant">Location</a>
        <a className="nav-link" href="/lavivant">Floor</a>
        <a className="nav-link" href="/lavivant">Contact Us</a>
        <a className="nav-link" href="/lavivant">Enquire Now</a>
      </div>
    </div>
  </div>
</nav>
        </section>
    );
}

const HeroSection = () => {

    return(
        <section className='lHeroSection' id='lHeroSection'>
            <div className='picture'></div>
        </section>
    )
}

const AboutUs = () => {

    return(
        <section className='aboutUs' id='lAboutUs'>
              <div className='content'>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Suspendisse elit ligula, placerat at euismod a, tempus a 
                lorem. Duis quis tortor a nibh laoreet pretium a eu lorem. 
                Etiam suscipit vulputate efficitur. Integer dapibus arcu sed diam 
                lacinia hendrerit. Fusce ut commodo enim, aliquam bibendum enim.
                </p>
              </div>
              <div className='picture'>

              </div>
              <div className='picture'>
              </div>
              <div className='content'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Suspendisse elit ligula, placerat at euismod a, tempus a 
                lorem. Duis quis tortor a nibh laoreet pretium a eu lorem. 
                Etiam suscipit vulputate efficitur. Integer dapibus arcu sed diam 
                lacinia hendrerit. Fusce ut commodo enim, aliquam bibendum enim.
                </p>
              </div>
              <div className='content'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Suspendisse elit ligula, placerat at euismod a, tempus a 
                lorem. Duis quis tortor a nibh laoreet pretium a eu lorem. 
                Etiam suscipit vulputate efficitur. Integer dapibus arcu sed diam 
                lacinia hendrerit. Fusce ut commodo enim, aliquam bibendum enim.
                </p>
              </div>
              <div className='picture'>

              </div>
        </section>
    )
}

const LocationAdvantages = () => {

    return (
        <section className='locationAdvantage' id='locationAdvantage'>


        </section>
    );
}

const UniqueSellingPrice = () => {
  return (
    <section className="uniqueSellingPrice" id="uniqueSellingPrice">
      <div className='item'>
        <p>USP 1</p>
      </div>
      <div className='item'>
        <p>USP 1</p>
      </div>
      <div className='item'>
        <p>USP 1</p>
      </div>
      <div className='item'>
        <p>USP 1</p>
      </div>
    </section>
  );
};




const Lavivant = () => {

    return(
        <section className='lavivant'>
            <Navbar />
            <HeroSection />
            <UniqueSellingPrice />
            <AboutUs />
            <LocationAdvantages />
        </section>
    );
}


export default Lavivant;