import React, { useEffect, useState, useRef } from 'react';
import '../../propertyStyles/lavivant.css';
import SkyBlossomForm from '../skyblossom/SkyBlossomForm';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Footer from '../Footer';
import LogoBlue from '../../images/lavivant/logo-blue.png';
import LaptopBanner from '../../images/lavivant/1400 x 800.jpg';
import MobileBanner from '../../images/lavivant/430 x 932.jpg';
import LaptopBanner2 from '../../images/lavivant/1400 x 800 (2).jpg';
import MobileBanner2 from '../../images/lavivant/430 x 932 (2).jpg';
import { useMediaQuery } from '@mui/material';
import Popover from '@mui/material/Popover';
import { Helmet} from 'react-helmet';
// slick css imports
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SrivenLogoImg from "../../images/web logo (1).png";


import FloorPlansImg1 from '../../images/lavivant/Floor Plan/10.jpg';
import FloorPlansImg2 from '../../images/lavivant/Floor Plan/2.jpg';
import FloorPlansImg3 from '../../images/lavivant/Floor Plan/3 (1).jpg';
import FloorPlansImg4 from '../../images/lavivant/Floor Plan/4 (2).jpg';
import FloorPlansImg5 from '../../images/lavivant/Floor Plan/5 (2).jpg';
import FloorPlansImg6 from '../../images/lavivant/Floor Plan/6 (2).jpg';
import FloorPlansImg7 from '../../images/lavivant/Floor Plan/7 (1).jpg';
import FloorPlansImg8 from '../../images/lavivant/Floor Plan/8 (3).jpg';
import FloorPlansImg9 from '../../images/lavivant/Floor Plan/9.jpg';

import contactUsImg from '../../images/lavivant/La Vivante/1000 x 1000/3.jpg';
import GymImg from '../../images/lavivant/La Vivante/1000 x 1000/La Vivante_Brochure_17in x 15in_Low-40.jpg';
import TheatreImg from '../../images/lavivant/La Vivante/1000 x 1000/La Vivante_Brochure_17in x 15in_Low-43.jpg';
import OfficeSpaceImg from '../../images/lavivant/La Vivante/1000 x 1000/La Vivante_Brochure_17in x 15in_Low-47.jpg';
import BadmintonImg from '../../images/lavivant/La Vivante/1000 x 1000/La Vivante_Brochure_17in x 15in_Low-12.jpg';
import FootballImg from '../../images/lavivant/La Vivante/1000 x 1000/La Vivante_Brochure_17in x 15in_Low-14.jpg';
import SwimmingPoolImg from '../../images/lavivant/La Vivante/1000 x 1000/La Vivante_Brochure_17in x 15in_Low-17.jpg';
import GalleryImg1 from '../../images/lavivant/La Vivante/1000 x 1000/1.jpg';
import GalleryImg2 from '../../images/lavivant/La Vivante/1000 x 1000/2.jpg';
import GalleryImg3 from '../../images/lavivant/La Vivante/1000 x 1000/La Vivante_Brochure_17in x 15in_Low-53.jpg';
import GalleryImg4 from '../../images/lavivant/1 (1).jpg';
import GalleryImg5 from '../../images/lavivant/La Vivante/1000 x 1000/La Vivante_Brochure_17in x 15in_Low-20.jpg';

import GalleryImg6 from '../../images/lavivant/La Vivante/1000 x 1000/La Vivante_Brochure_17in x 15in_Low-21.jpg';
import GalleryImg7 from '../../images/lavivant/La Vivante/1000 x 1000/La Vivante_Brochure_17in x 15in_Low-24.jpg';
import GalleryImg8 from '../../images/lavivant/La Vivante/1000 x 1000/La Vivante_Brochure_17in x 15in_Low-258.jpg';
import GalleryImg9 from '../../images/lavivant/La Vivante/1000 x 1000/La Vivante_Brochure_17in x 15in_Low-28.jpg';

import GalleryImg10 from '../../images/lavivant/La Vivante/1000 x 1000/La Vivante_Brochure_17in x 15in_Low-30.jpg';
import GalleryImg11 from '../../images/lavivant/La Vivante/1000 x 1000/La Vivante_Brochure_17in x 15in_Low-31.jpg';
import GalleryImg12 from '../../images/lavivant/La Vivante/1000 x 1000/La Vivante_Brochure_17in x 15in_Low-33.jpg';
import GalleryImg13 from '../../images/lavivant/La Vivante/1000 x 1000/La Vivante_Brochure_17in x 15in_Low-35.jpg';

import GalleryImg14 from '../../images/lavivant/La Vivante/1000 x 1000/La Vivante_Brochure_17in x 15in_Low-36.jpg';
import GalleryImg15 from '../../images/lavivant/La Vivante/1000 x 1000/La Vivante_Brochure_17in x 15in_Low-37.jpg';
import GalleryImg16 from '../../images/lavivant/La Vivante/1000 x 1000/La Vivante_Brochure_17in x 15in_Low-24.jpg';
import GalleryImg17 from '../../images/lavivant/La Vivante/1000 x 1000/La Vivante_Brochure_17in x 15in_Low-39.jpg';
import GalleryImg18 from '../../images/lavivant/La Vivante/1000 x 1000/La Vivante_Brochure_17in x 15in_Low-51.jpg';
import GalleryImg19 from '../../images/lavivant/La Vivante/1000 x 1000/La Vivante_Brochure_17in x 15in_Low-52.jpg';
import GalleryImg20 from '../../images/lavivant/La Vivante/1000 x 1000/La Vivante_Brochure_17in x 15in_Low-81.jpg';

import VillaImg from '../../images/lavivant/La Vivante/1000 x 1000/La Vivante_Brochure_17in x 15in_Low-5.jpg';
import VillamentImg from '../../images/lavivant/1 (1).jpg';


function BasicPopover({sectionName, floor}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [position, setPosition] = React.useState({ top: window.innerHeight / 2, left: window.innerWidth / 2 });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setPosition({ top: window.innerHeight / 2, left: window.innerWidth / 2 }); // Add 100px to top
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div className={sectionName === 'enquireNow' && "nav-link"}>
     {
      sectionName === 'brochure' &&
      <div className='download-brochure'>
    <button aria-describedby={id} onClick={handleClick}>
      <i class="fa-sharp fa-solid fa-download"></i>
    </button>
    </div>
     }

     {
      sectionName === 'enquireNow' &&
      <button className={sectionName} aria-describedby={id} onClick={handleClick}>Enquire Now</button>
     }



      <Popover 
  anchorReference="anchorPosition"
  anchorPosition={position}

  id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
  anchorOrigin={{
    vertical: 'center',
    horizontal: 'center',
  }}
  transformOrigin={{
    vertical: 'center',
    horizontal: 'center',
  }}
> 

<button type="button" className="close formCloseBtn" aria-label="Close" onClick={handleClose}>
            <span aria-hidden="true">&times;</span>
          </button>
   {
    sectionName === 'enquireNow' && 
       <LavivantForm sectionName={'enquireNow'} />
   }
   {
    sectionName === 'brochure' && 
       <LavivantForm sectionName={'brochure'} />
   }

</Popover>
    </div>
  );
}


const Navbar = ({homeRef, scrollToSection}) => {

  const isTab = useMediaQuery('(max-width:992px)');
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (currentScrollTop < lastScrollTop && currentScrollTop > 50) {
        setIsScrollingUp(true);
      } else {
        setIsScrollingUp(false);
      }
      
      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

    return(
        <section ref={homeRef} className='lNavbar' id='lNavbar'>
            <nav className={isScrollingUp ? "navbar navbar-expand-lg fixed-top" : "navbar navbar-expand-lg"}>
  <div className="container-fluid">
    <img src={SrivenLogoImg} alt='lavivant logo' height="50px" />
      
      {isTab && <>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <div class="nav-link active" aria-current="page" onClick={() => scrollToSection('home')}>Home</div>
        </li>
        <li class="nav-item">
          <div class="nav-link" onClick={() => scrollToSection('about')}>AboutUs</div>
        </li>
        <li class="nav-item">
          <div class="nav-link" onClick={() => scrollToSection('gallery')}>Gallery</div>
        </li>
        <li class="nav-item">
          <div class="nav-link" onClick={() => scrollToSection('amenities')}>Amenities</div>
        </li>
        <li class="nav-item">
          <div class="nav-link" onClick={() => scrollToSection('location')}>Location</div>
        </li>
        <li class="nav-item">
          <div class="nav-link" onClick={() => scrollToSection('floor')}>Floor</div>
        </li>
        <li class="nav-item">
          <div class="nav-link" onClick={() => scrollToSection('contact')}>Contact Us</div>
        </li>
        <li class="nav-item">
          <BasicPopover sectionName={'enquireNow'} />
        </li>
      </ul>
      <div onClick={() => scrollToSection('home')}>
                <img
                  src={LogoBlue}
                  alt="sriven groups logo"
                  height="50px"
                  width="100px"
                  className='lavivantLogo'
                />
    </div>
    </div>
      </>}

      {
        !isTab && 
        <>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <div class="nav-link active" aria-current="page" onClick={() => scrollToSection('home')}>Home</div>
        </li>
        <li class="nav-item">
          <div class="nav-link" onClick={() => scrollToSection('about')}>AboutUs</div>
        </li>
        <li class="nav-item">
          <div class="nav-link" onClick={() => scrollToSection('gallery')}>Gallery</div>
        </li>
        <li class="nav-item">
          <div class="nav-link" onClick={() => scrollToSection('amenities')}>Amenities</div>
        </li>
        <li class="nav-item">
          <div class="nav-link" onClick={() => scrollToSection('location')}>Location</div>
        </li>
        <li class="nav-item">
          <div class="nav-link" onClick={() => scrollToSection('floor')}>Floor</div>
        </li>
        <li class="nav-item">
          <div class="nav-link" onClick={() => scrollToSection('contact')}>Contact Us</div>
        </li>
        <li class="nav-item">
          <BasicPopover sectionName={'enquireNow'} />
        </li>
      </ul>
    </div>
    <div onClick={() => scrollToSection('home')}>
                <img
                  src={LogoBlue}
                  alt="sriven groups logo"
                  height="50px"
                  width="100px"
                  className='dsMaxLogo'
                />
    </div>
        </>
      }
      
  </div>
</nav>
        </section>
    );
}

const HeroSection = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    fade: false,
    cssEase: 'linear'
  }

  const isMobile = useMediaQuery('(max-width:600px)');
  const isTab = useMediaQuery('(max-width:840px)');

    return(
        <section className='lHeroSection' id='lHeroSection'>
        <div className="slider-container">
          <Slider {...settings}>
        <div>
          <img src={isMobile ? MobileBanner2 : isTab ? LaptopBanner2: LaptopBanner2} alt='example' />
        </div>
        <div>
        <img src={isMobile ? MobileBanner : isTab ? LaptopBanner: LaptopBanner} alt='example' />
        </div>
      </Slider>
      </div>
      </section>
    )
}

const AboutUs = ({aboutRef}) => {

    return(
        <section ref={aboutRef} className='aboutUsSection' id='aboutUsSection'>
        <h1>About US</h1>
        <div className='aboutUs' id='lAboutUs'>
              <div className='content'>
              <h3>Villas</h3>
                <p>
                la vivant is a reflection of your identity , of your interests and convictions,
                 of the individual that is you .A connoisseur's refined taste for the better
                  things in life is reflected in the execution of the property . stage 1 ranges
                   over an sweeping 12.35acres , this fastidiously planned advancement grandstands
                    sumptuous French themed rich villas.<br /><br/>

exclude 137 estates in terrific gated communities with the consideration of the notorious Eiffel 
tower , taking one right to the of Paris , the extend comes with a awe inspiring clubhouse and a sprawling 
open range of 3,00,000 square feet for your extreme liberality.

                </p>
              </div>
              <div className='picture'>
                 <img src={VillaImg} alt='example' />
              </div>
              <div className='picture'>
              <img src={VillamentImg} alt='example' />
              </div>
              <div className='content'>
              <h3>Villaments</h3>
              <p>
              Extravagant 4.5 BHK estates beginning from 3100 sq.ft are a 
              portion of a 12.25-acre Parisian-themed way of life gated community. This sui 
              generis private property highlights 137 estates with extravagant add motivated by French engineering. 
              Appreciate over 100 ways of life comforts for your physical and recreational needs. Deliberately found 
              in one of Bangalore's speediest creating ranges, this community offers unparalleled cutting edge living.
                </p>
              </div>
              <div className='content'>
              <h3>Amenities</h3>
              <p>
              Outlined with fastidious consideration to detail, 
              the conveniences at Lavivant point to cater to the assorted needs 
              and wants of its inhabitants. From the minute you step into the premises, 
              you are welcomed by rich green scenes, perfectly manicured gardens, and an 
              amazing entrance that sets the tone for the luxurious living involvement that is 
              standing by you. The extension features a state-of-the-art clubhouse, where inhabitants 
              can enjoy a run of recreational and wellness exercises.
                </p>
              </div>
              <div className='picture'>
                <img src={GalleryImg11} alt='example' />
              </div>
        </div>
        </section>
    )
}

const LocationAdvantages = ({locationRef}) => {

    return (
        <section ref={locationRef} className='locationAdvantageSection' id='locationAdvantageSection'>
        <h1>Location Advantage</h1>
        <div className='locationAdvantage' id='locationAdvantage'>
         <div className='gMap'>
         <iframe title='lavivant location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7780.7230842670715!2d77.77676886977538!3d12.819898200000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae73b79d4fb9a1%3A0x32dacdfe12ff7842!2sLa%20Vivant!5e0!3m2!1sen!2sin!4v1716883496714!5m2!1sen!2sin" width="600" height="450" style={{border: '0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         </div>
         <div className='locationAccordion'>
         <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        SCHOOLS/COLLAGES
        <i class="fas fa-chevron-down"></i>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <ul>
            <li>Harvest International School—3.MINS</li>
            <li>BRS Global School—4.MINS</li>
            <li>Indus International School—10.MINS</li>
            <li>International School of Management Excellence—20.MINS</li>
            <li>New Horizon University—10.MINS</li>
            <li>ST. Philomena’s English School—10.MINS</li>
            <li>Azim Premji University—15.MINS</li>
            <li>The International School Bangalore—20.MINS</li>
            <li>Oakridge International School—15.MINS</li>
            <li>Green Wood high International School—20.MINS</li>
            <li>Global Indian International School—25.MINS</li>
            <li>Oxford Medical College—-40.MINS</li>
            <li>Silver Oak International School—40.MINS</li>
            <li>Delhi Public School—25.MINS</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
         IT COMPANIES
         <i class="fas fa-chevron-down"></i>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
         <ul>
             <li>Proposed Infosys SEZ—10.MINS</li>
             <li>Ashok Leyland—20.MINS</li>
             <li>TVS—20.MINS</li>
             <li>RGA Techpark—20.MINS</li>
             <li>HCL—25.MINS</li>
             <li>Main Wipro Campus—25.MINS</li>
         </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        HOSPITALS
        <i class="fas fa-chevron-down"></i>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
          <ul>
              <li>Apollo Clinic—20.MINS</li>
              <li>Belenus Champion Hospital—30.MIINS</li>
              <li>Narayana Hrudayalaya—20.MINS</li>
              <li>Columbia Asia Hospital—30.MINS</li>
          </ul>
      </div>
    </div>
  </div>
</div>
            
         </div>
        </div>
        </section>
    );
}

const UniqueSellingPrice = () => {
  return (
    <section className="uniqueSellingPrice" id="uniqueSellingPrice">
      <div className='item'>
        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#8E6826"><path d="M360-440h80v-110h80v110h80v-190l-120-80-120 80v190Zm120 254q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
        <h5>Location</h5>
        <p>Sarjapura-Attibele Road,<br /> Bangalore</p>
      </div>
      <div className='item'>
      <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#8E6826"><path d="M756-120 537-339l84-84 219 219-84 84Zm-552 0-84-84 276-276-68-68-28 28-51-51v82l-28 28-121-121 28-28h82l-50-50 142-142q20-20 43-29t47-9q24 0 47 9t43 29l-92 92 50 50-28 28 68 68 90-90q-4-11-6.5-23t-2.5-24q0-59 40.5-99.5T701-841q15 0 28.5 3t27.5 9l-99 99 72 72 99-99q7 14 9.5 27.5T841-701q0 59-40.5 99.5T701-561q-12 0-24-2t-23-7L204-120Z"/></svg>
        <h5>Project Status</h5>
        <p>Under Construction</p>
      </div>
      <div className='item'>
      <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#8E6826"><path d="M760-400v-260L560-800 360-660v60h-80v-100l280-200 280 200v300h-80ZM560-800Zm20 160h40v-40h-40v40Zm-80 0h40v-40h-40v40Zm80 80h40v-40h-40v40Zm-80 0h40v-40h-40v40ZM280-220l278 76 238-74q-5-9-14.5-15.5T760-240H558q-27 0-43-2t-33-8l-93-31 22-78 81 27q17 5 40 8t68 4q0-11-6.5-21T578-354l-234-86h-64v220ZM40-80v-440h304q7 0 14 1.5t13 3.5l235 87q33 12 53.5 42t20.5 66h80q50 0 85 33t35 87v40L560-60l-280-78v58H40Zm80-80h80v-280h-80v280Z"/></svg>
        <h5>Type</h5>
        <p>2 & 4 BHK Villaments</p>
      </div>
      <div className='item'>
      <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#8E6826"><path d="M549-120 280-400v-80h140q53 0 91.5-34.5T558-600H240v-80h306q-17-35-50.5-57.5T420-760H240v-80h480v80H590q14 17 25 37t17 43h88v80h-81q-8 85-70 142.5T420-400h-29l269 280H549Z"/></svg>
        <h5>Price</h5>
        <p>1.22 Cr* onwards</p>
      </div>
      <div className='item'>
      <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#8E6826"><path d="M200-160q-33 0-56.5-23.5T120-240v-480q0-33 23.5-56.5T200-800h560q33 0 56.5 23.5T840-720v480q0 33-23.5 56.5T760-160H200Zm0-80h560v-480H200v480Zm0 0v-480 480Z"/></svg>
        <h5>Unit Size</h5>
        <p>1912 Sq.Ft. - 3710 Sq.Ft</p>
      </div>
    </section>
  );
};

const FloorPlans = ({floorRef}) => {
  // const [activeSlide, setActiveSlide] = useState(0);
  let sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    // beforeChange: (current, next) => setActiveSlide(next),
  };

  const isMobile = useMediaQuery('(max-width:600px)');

  const handleGridItemClick = (index) => {
      sliderRef.slickGoTo(index);
  };


  return(
      <section ref={floorRef} className='floorPlans' id='floorPlans'>
          <h1>Floor Plans</h1>
          <div className='content'>
            <div className='floorPlanGrid'>
              <div className='floorPlansTable'>
                   <p></p>
                   <p className='item-a'>Villaments</p>
                   <p className='item-b'>{isMobile ? "Dimen sions": "Dimensions"}</p>
                   <p className='item-c' onClick={() => handleGridItemClick(1)}>3BHK</p>
                   <p className='item-d' onClick={() => handleGridItemClick(4)}>4BHK</p>
                   <p className='item-e' onClick={() => handleGridItemClick(0)}>Sq.ft</p>
                   <p className='item-f' onClick={() => handleGridItemClick(3)}>1921 - 1992</p>
                   <p className='item-g' onClick={() => handleGridItemClick(5)}>3128 - 3710</p>
                   <p className='item-h'>Price</p>
                   <p className='item-i' onClick={() => handleGridItemClick(2)}>1.22Cr* - 1.28 Cr*</p>
                   <p className='item-j' onClick={() => handleGridItemClick(6)}>2Cr* - 2.36Cr*</p>
              </div>
            </div>
             <div className='floorPlansCarousel'>
             <div className="slider-container">
      <Slider
      ref={slider => {
          sliderRef = slider;
        }}
       {...settings}>
        <div>
          <img src={FloorPlansImg1} alt='lavivant floor plans' />
        </div>
        <div>
          <img src={FloorPlansImg2} alt='lavivant floor plans' />
        </div>
        <div>
          <img src={FloorPlansImg3} alt='lavivant floor plans' />
        </div>
        <div>
          <img src={FloorPlansImg4} alt='lavivant floor plans' />
        </div>
        <div>
          <img src={FloorPlansImg5} alt='lavivant floor plans' />
        </div>
        <div>
          <img src={FloorPlansImg6} alt='lavivant floor plans' />
        </div>
        <div>
          <img src={FloorPlansImg7} alt='lavivant floor plans' />
        </div>
        <div>
          <img src={FloorPlansImg8} alt='lavivant floor plans' />
        </div>
        <div>
          <img src={FloorPlansImg9} alt='lavivant floor plans' />
        </div>
      </Slider>
    </div>
             </div>
          </div>
      </section>
  );
}

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={SwimmingPoolImg} alt='example' />
        </div>
        <div>
          <img src={FootballImg} alt='example' />
        </div>
        <div>
          <img src={OfficeSpaceImg} alt='example' />
        </div>
        <div>
          <img src={BadmintonImg} alt='example' />
        </div>
        <div>
          <img src={GymImg} alt='example' />
        </div>
        <div>
          <img src={TheatreImg} alt='example' />
        </div>
      </Slider>
    </div>
  );
}

const LavivantForm = ({sectionName, floor}) => {
  return(
       <div className='lavivant'>
       <div className='popoverForm'>
       <div className='form'>
           <SkyBlossomForm sectionName={sectionName} formName={'lavivant'} brochureDriveId={'1hrwWfQdoEvykAxrzrCncoELcSe3BOWuy'} floor={floor} />
       </div>
       </div>
       </div>
  )
}

const ContactUs = ({contactRef}) => {
  return(
    <section ref={contactRef} className='contactUsSection' id='contactUs'>
    <h1>Contact Us</h1>
    <div className='contactUs'>
       <div className='form'>
           <SkyBlossomForm />
       </div>
       <div className='picture'>
           <img src={contactUsImg} alt='example' />
       </div>
    </div>
    </section>
  )
}

const Gallery =({galleryRef}) => {
  return(
    <section ref={galleryRef} className='gallery' id='gallery'>
        <AsNavFor />
    </section>
  );
}

function AsNavFor() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  const isMobile = useMediaQuery('(max-width:600px)');


  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  return (
    <div className="slider-container">
      <h1>Gallery</h1>
      <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)} className='mainSlider'>

      <div className='gallery-slide'>
        <img src={GalleryImg1} height={isMobile ? "400px" : "500px"} alt="lavivant gallery 1" />
      </div>
      <div className='gallery-slide'>
        <img src={GalleryImg2} height={isMobile ? "400px" : "500px"} alt="lavivant gallery 2" />
      </div>
      <div className='gallery-slide'>
        <img src={GalleryImg3} height={isMobile ? "400px" : "500px"} alt="lavivant gallery 3" />
      </div>
      <div className='gallery-slide'>
        <img src={GalleryImg4} height={isMobile ? "400px" : "500px"} alt="lavivant gallery 4" />
      </div>
      <div className='gallery-slide'>
        <img src={GalleryImg5} height={isMobile ? "400px" : "500px"} alt="lavivant gallery 5" />
      </div>
      <div className='gallery-slide'>
        <img src={GalleryImg6} height={isMobile ? "400px" : "500px"} alt="lavivant gallery 6" />
      </div>
      <div className='gallery-slide'>
        <img src={GalleryImg7} height={isMobile ? "400px" : "500px"} alt="lavivant gallery 7" />
      </div>
      <div className='gallery-slide'>
        <img src={GalleryImg8} height={isMobile ? "400px" : "500px"} alt="lavivant gallery 8" />
      </div>
      <div className='gallery-slide'>
        <img src={GalleryImg9} height={isMobile ? "400px" : "500px"} alt="lavivant gallery 9" />
      </div>
      <div className='gallery-slide'>
        <img src={GalleryImg10} height={isMobile ? "400px" : "500px"} alt="lavivant gallery 10" />
      </div>
      <div className='gallery-slide'>
        <img src={GalleryImg11} height={isMobile ? "400px" : "500px"} alt="lavivant gallery 11" />
      </div>
      <div className='gallery-slide'>
        <img src={GalleryImg12} height={isMobile ? "400px" : "500px"} alt="lavivant gallery 12" />
      </div>
      <div className='gallery-slide'>
        <img src={GalleryImg13} height={isMobile ? "400px" : "500px"} alt="lavivant gallery 13" />
      </div>
      <div className='gallery-slide'>
        <img src={GalleryImg14} height={isMobile ? "400px" : "500px"} alt="sky blossom building 14" />
      </div>
      <div className='gallery-slide'>
        <img src={GalleryImg15} height={isMobile ? "400px" : "500px"} alt="lavivant gallery 15" />
      </div>
      <div className='gallery-slide'>
        <img src={GalleryImg16} height={isMobile ? "400px" : "500px"} alt="lavivant gallery 16" />
      </div>
      <div className='gallery-slide'>
        <img src={GalleryImg17} height={isMobile ? "400px" : "500px"} alt="lavivant gallery 17" />
      </div>
      <div className='gallery-slide'>
        <img src={GalleryImg18} height={isMobile ? "400px" : "500px"} alt="lavivant gallery 18" />
      </div>
      <div className='gallery-slide'>
        <img src={GalleryImg19} height={isMobile ? "400px" : "500px"} alt="lavivant gallery 19" />
      </div>
      <div className='gallery-slide'>
        <img src={GalleryImg20} height={isMobile ? "400px" : "500px"} alt="lavivant gallery 20" />
      </div>
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={slider => (sliderRef2 = slider)}
        slidesToShow={4}
        swipeToSlide={true}
        focusOnSelect={true}
        autoplay={true}
        autoplaySpeed={3000}
        className='navSlider'
        arrows={false}
      >
                <div className='gallery-slide'>
        <img src={GalleryImg1} alt="lavivant gallery 1" />
      </div>
      <div className='gallery-slide'>
        <img src={GalleryImg2} alt="lavivant gallery 2" />
      </div>
      <div className='gallery-slide'>
        <img src={GalleryImg3} alt="lavivant gallery 3" />
      </div>
      <div className='gallery-slide'>
        <img src={GalleryImg4} alt="lavivant gallery 4" />
      </div>
      <div className='gallery-slide'>
        <img src={GalleryImg5} alt="lavivant gallery 5" />
      </div>
      <div className='gallery-slide'>
        <img src={GalleryImg6} alt="lavivant gallery 6" />
      </div>
      <div className='gallery-slide'>
        <img src={GalleryImg7} alt="lavivant gallery 7" />
      </div>
      <div className='gallery-slide'>
        <img src={GalleryImg8} alt="lavivant gallery 8" />
      </div>
      <div className='gallery-slide'>
        <img src={GalleryImg9} alt="lavivant gallery 9" />
      </div>
      <div className='gallery-slide'>
        <img src={GalleryImg10} alt="lavivant gallery 10" />
      </div>
      <div className='gallery-slide'>
        <img src={GalleryImg11} alt="lavivant gallery 11" />
      </div>
      <div className='gallery-slide'>
        <img src={GalleryImg12} alt="lavivant gallery 12" />
      </div>
      <div className='gallery-slide'>
        <img src={GalleryImg13} alt="lavivant gallery 13" />
      </div>
      <div className='gallery-slide'>
        <img src={GalleryImg14} alt="sky blossom building 14" />
      </div>
      <div className='gallery-slide'>
        <img src={GalleryImg15} alt="lavivant gallery 15" />
      </div>
      <div className='gallery-slide'>
        <img src={GalleryImg16} alt="lavivant gallery 16" />
      </div>
      <div className='gallery-slide'>
        <img src={GalleryImg17} alt="lavivant gallery 17" />
      </div>
      <div className='gallery-slide'>
        <img src={GalleryImg18} alt="lavivant gallery 18" />
      </div>
      <div className='gallery-slide'>
        <img src={GalleryImg19} alt="lavivant gallery 19" />
      </div>
      <div className='gallery-slide'>
        <img src={GalleryImg20} alt="lavivant gallery 20" />
      </div>
      </Slider>
    </div>
  );
}

const Amenities = ({amenitiesRef}) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };


  return(
      <section ref={amenitiesRef} className='amenities' id='amenities'>
        <h1>Amenities</h1>
           <div className='amenityCarousel'>
           <SimpleSlider />
           </div>
           <div className='amenityList'>
           <div className="slider-container">
      <Slider {...settings}>
        <div>
        <ol>
<li>ENTRANCE PLAZA</li>
<li>WATER BODY</li>
<li>SECURITY CABIN</li>
<li>LILY POND</li>
<li>HERBAL SHRUB PLANTATION</li>
<li>MURAL</li>
<li>PEDESTRIAN PATHWAY</li>
<li>SEATING LOUNGE</li>
<li>GRAPHIC PATTERN PAVERS</li>
<li>BUGGY PARKING</li>
<li>VISITOR’S PARKING</li>
<li>THICK PLANTATION</li>
<li>TRANSFORMER & DG YARD</li>
<li>SENIOR CITIZEN CORNER</li>
<li>WATERBODY WITH SPOUTS</li>
<li>OUTDOOR SEATING WITH STONE PAVERS</li>
<li>COLOURED COBBLE STONE PAVERS</li>
<li>CHILDREN’S PLAY AREA</li>
<li>GRASS PAVERS PATHWAY</li>
<li>HALF-BASKET BALL COURT</li>
</ol>
        </div>
        <div>
          <ol>
          <li>VIEWING GALLERY</li>
<li>CRICKET PRACTICE PITCH(WITH NET)</li>
<li>MINI GOLF COURSE</li>
<li>GRAPHIC WALL</li>
<li>STEPPED SEATING</li>
<li>SKATING RINK</li>
<li>WOODEN DECK LOUNGE</li>
<li>BADMINTON COURT</li>
<li>FLOWER GARDEN</li>
<li>MURAL WITH SEATING LOUNGE</li>
<li>OUTDOOR PARTY LAWN</li>
<li>BUISNESS LOUNGE</li>
<li>AMPHITHEATRE</li>
<li>OUTDOOR CHESS</li>
<li>BUTTERFLY GARDEN</li>
<li>OUTDOOR GYMNASIUM</li>
<li>PEBBLE PATHWAY</li>
<li>STEPPED DECK LOUNGE</li>
<li>PADDLE POOL</li>
<li>WOODEN DECK SEATING</li>
          </ol>
        </div>
        <div>
        <ol>
<li>SWIMMING POOL</li>
<li>SEATING LOUNGE FOR POOL</li>
<li>ROCK GARDEN</li>
<li>BONFIRE PIT</li>
<li>LAWN SEATING LOUNGE</li>
<li>STONE AEATING AREA</li>
<li>PATHWAY WITH CIRCULAR MS PERGOLA</li>
<li>LOTUS POND</li>
<li>COBBLE STONE WITH WOODEN BENCHES</li>
<li>PEBBLE PARK</li>
<li>EIFFEL TOWER</li>
<li>FISH POND</li>
<li>STONE SEATING LOUNGE</li>
<li>PEBBLE PARK SEATING LOUNGE</li>
<li>STONE PAVERS LAWN</li>
<li>GRASS PAVERS LAWN</li>
<li>AEROBICS</li>
<li>GRASS PATHWAY WITH CIRCULAR MS PERGOLA</li>
<li>OUTDOOR YOGA & MEDITATION</li>
<li>HERBAL PARK GARDEN</li>
<li>TENNIS COURT</li>
<li>FOOTBALL COURT</li>
</ol>
        </div>
      </Slider>
    </div>
           </div>
      </section>
  );
}






const Lavivant = () => {

  const homeRef = useRef();
  const aboutRef = useRef();
  const galleryRef = useRef();
  const contactRef = useRef();
  const locationRef = useRef();
  const amenitiesRef = useRef();
  const floorRef = useRef();

  const scrollToSection = (section) => {
    switch (section) {
      case 'home':
        homeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      case 'about':
        aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      case 'contact':
        contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      case 'amenities':
        amenitiesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      case 'floor':
        floorRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      case 'location':
        locationRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      case 'gallery':
        galleryRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const button = document.querySelector(`button.enquireNow`);
      if (button) {
        button.click();
      }
    }, 10000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
}, []);


    return(
        <>
        <Helmet>
        <title>Lavivant</title>
        </Helmet>
        <section className='lavivant'>
            <Navbar homeRef={homeRef} scrollToSection={scrollToSection} />
            <HeroSection />
            <UniqueSellingPrice />
            <AboutUs aboutRef={aboutRef} />
            <Gallery galleryRef={galleryRef} />
            <FloorPlans floorRef={floorRef} />
            <Amenities amenitiesRef={amenitiesRef} />
            <ContactUs contactRef={contactRef} />
            <LocationAdvantages locationRef={locationRef} />
            <Footer />
            <BasicPopover sectionName={'brochure'} />
        </section>
       </>
    );
}


export default Lavivant;