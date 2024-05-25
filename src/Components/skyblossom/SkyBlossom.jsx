import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../../propertyStyles/SkyBlossom.css';
import SrivenLogoImg from "../../images/web logo (1).png";
import SkyBlossomImg from "../../images/skyBossom.png";
import HeroSectionImg from "../../images/skyBlossom/heroSectionImg.jpg";
import DsMaxImg from "../../images/apartment-logos/DS MAX.png";
import Bedroom from "../../images/common/bed-alt.png";
import Area from "../../images/common/draw-square.png";
import Size from "../../images/common/ruler-combined.png";
import UnderConstruction from "../../images/common/builder.png";
import Img1 from "../../images/skyBlossom/1.jpg";
import Img2 from "../../images/skyBlossom/2.jpg";
import Img3 from "../../images/skyBlossom/3.jpg";
import Img4 from "../../images/skyBlossom/4.jpg";
import Img5 from "../../images/skyBlossom/5.jpg";
import Img6 from "../../images/skyBlossom/6.jpg";
import Img7 from "../../images/skyBlossom/7.jpg";
import Img8 from "../../images/skyBlossom/8.jpg";
import ButterflyGarden from '../../images/common/butterfly-garden.png';
import BadmintonCourt from '../../images/common/badminton-court.png';
import CarWashing from '../../images/common/car-washing.png';
import ChessBoard from '../../images/common/chess-board.png';
import ChildrenPlayArea from '../../images/common/children-play-area.png';
import Cricket from '../../images/common/cricket.png';
import ElectricCarCharging from '../../images/common/electric-car-charging.png';
import RunningTrack from '../../images/common/running-track.png';
import Swimming from '../../images/common/swimming.png';
import GrassLand from '../../images/common/grass-land.png';
import Banner1 from '../../images/skyBlossom/banner1.jpg';
import Banner2 from '../../images/skyBlossom/Banner2.jpg';
import MobileBanner1 from '../../images/skyBlossom/mobileBanner1.jpg';
import TabBanner1 from '../../images/skyBlossom/tabBanner1.jpg';
import TabBanner2 from '../../images/skyBlossom/tabBanner2.jpg';
import MobileBanner2 from '../../images/skyBlossom/mobileBanner2.jpg';
import { Link } from "react-router-dom";
import { useMediaQuery } from '@mui/material';
import Footer from '../Footer';

import Popover from '@mui/material/Popover';
import SkyBlossomForm from './SkyBlossomForm';
// import SgNavbar from './SgNavbar';

function BasicPopover({sectionName, floor}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
     {
      sectionName === 'floorPlan' &&  
      <button aria-describedby={id} onClick={handleClick}>
         <i class="fa-solid fa-lock fa-5x fa-xl"></i> Unlock Price
      </button>
     }

     {
      sectionName === 'brochure' &&
      <button className={sectionName} aria-describedby={id} onClick={handleClick}>Brochure</button>
     }

     {
      sectionName === 'enquireNow' &&
      <button className={sectionName} aria-describedby={id} onClick={handleClick}>Enquire Now</button>
     }


      <Popover 
  anchorReference="anchorPosition"
  anchorPosition={{ top: 400, left: 700 }}
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
   {sectionName === 'floorPlan' && 
        <div className="floorPlanForm">
          <SkyBlossomForm sectionName={sectionName} floor={floor} />
        </div>
   }
   {
    sectionName === 'enquireNow' && 
       <div className={sectionName}>
         <SkyBlossomForm sectionName={sectionName} />
       </div>
   }
   {
    sectionName === 'brochure' && 
       <div className={sectionName}>
         <SkyBlossomForm sectionName={sectionName} />
       </div>
   }

</Popover>

      {/* <Popover
        
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        
      </Popover> */}
    </div>
  );
}

const HeroSection = () => {
  const options = {
    items: 2,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 10000,
    // autoplayHoverPause: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        }
    }
  }

  const isMobile = useMediaQuery('(max-width:600px)');
  const isTab = useMediaQuery('(max-width:840px)');
  return (
    <section className="heroSection" id='home'>
      <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div class="container-fluid">
          <Link to={"/#home"}>
            <img
              src={SrivenLogoImg}
              alt="sky blossom logo"
              height="60px"
              style={{ marginRight: "20px" }}
            />
          </Link>
          <Link to={"/skyblossom/#home"}>
            <img src={SkyBlossomImg} alt="sky blossom logo" height="80px" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-body">
              <ul class="navbar-nav flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/skyblossom/#home">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/skyblossom/#aboutUs">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/skyblossom/#gallery">
                    Gallery
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/skyblossom/#amenities">
                    Amenities
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/skyblossom/#floorPlans">
                    Floor Plans
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/skyblossom/#location">
                    Location
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/skyblossom/#contactUs">
                    Contact Us
                  </a>
                </li>
                <li class="nav-item">
                  
                    <BasicPopover className='nav-link' sectionName={'enquireNow'} />
                </li>
              </ul>
              <Link to={"/#home"}>
                <img
                  src={DsMaxImg}
                  alt="sriven groups logo"
                  height="70px"
                  className='dsMaxLogo'
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <OwlCarousel className='owl-theme'  {...options}>
      <div className='item'>
          <img src={isMobile ? MobileBanner1 : isTab? TabBanner1 : Banner2} alt="sky blossom building" />
        </div>
        <div className='item'>
          <img src={isMobile ? MobileBanner2 : isTab? TabBanner2 : Banner1} alt="sky blossom building" />
        </div>
      </OwlCarousel>
      <BasicPopover sectionName={'brochure'} />
    </section>
  );
};

const SellingPricePoint = () => {
  return (
    <section className="sellingPricePoint">
      <div className="bedrooms elem" data-aos="fade-right">
        <img src={Bedroom} style={{ color: "green" }} alt="Bed Cort Icon"></img>
        <h6>2 & 3 BHK</h6>
      </div>
      <div className="units elem" data-aos="fade-right">
        <img src={Size} alt="Floor Units Icon"></img>
        <h6>285 Units</h6>
      </div>
      <div className="sqft elem" data-aos="fade-left">
        <img src={Area} alt="Square Feet Icon"></img>
        <h6>1151-1823 Sqft</h6>
      </div>
      <div className="status elem" data-aos="fade-left">
        <img src={UnderConstruction} alt="under construction Icon"></img>
        <h6>Under Construction</h6>
      </div>
    </section>
  );
};

const AboutUs = () => {
  return (
    <section className="aboutUs" id='aboutUs'>
      <div className="picture">
        <img src={HeroSectionImg} alt="sky blossom building"></img>
      </div>
      <div className="content">
        <h1 className='alex-brush-regular'>About Us</h1>
        <p>
          DS Max Sky Bloom is an up-and-coming project in Begur Street, Bangalore. 
          One of the most promising ventures on the skyline, the project is located 
          in the affluent Yelahanka Hobli zone of Bangalore. Developed by DS Max Group, 
          this project features carefully designed 2 BHK flats and 3 BHK apartments for 
          sale, along with a host of amenities. Set in a prime location, it epitomizes modern, 
          comfortable living. From its strategic area to the amenities it offers, DS Max Sky Bloom
          provides a comprehensive understanding of what future inhabitants can expect.
        </p>
        {/* <button>Learn More</button> */}
      </div>
    </section>
  );
};

const Glossary = () => {

  const options = {
    items: 3,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
  }
  return (
    <section className="glossary" id='gallery'>
      <h1 className='alex-brush-regular'>Gallery</h1>
      <div className="glossaryCarousel">
      <OwlCarousel className='owl-theme' {...options} >
          <div class="item">
            <img src={Img1} alt="sky blossom apartment"></img>
          </div>
          <div class="item">
            <img src={Img2} alt="sky blossom apartment"></img>
          </div>
          <div class="item">
            <img src={Img3} alt="sky blossom apartment"></img>
          </div>
          <div class="item">
            <img src={Img4} alt="sky blossom apartment"></img>
          </div>
          <div class="item">
            <img src={Img5} alt="sky blossom apartment"></img>
          </div>
          <div class="item">
            <img src={Img6} alt="sky blossom apartment"></img>
          </div>
          <div class="item">
            <img src={Img7} alt="sky blossom apartment"></img>
          </div>
          <div class="item">
            <img src={Img8} alt="sky blossom apartment"></img>
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
};

const FloorPlans = () => {
  return (
    <section className="floorPlans" id='floorPlans'>
      <h1 className='alex-brush-regular'>Floor Plans</h1>
      <div className="plans">
        <div className="plan">
          <h2>2BHK</h2>
          <h4>1151-1254 Sqft</h4>
          <h4>Get Special Offer Price</h4>
          {/* <button>
            <i class="fa-solid fa-lock fa-5x fa-xl"></i> Unlock Price
          </button> */}
          <BasicPopover sectionName={'floorPlan'} floor={'2bhk'}/>
        </div>
        <div className="plan">
          <h2>3BHK</h2>
          <h4>1380 - 1823 Sqft</h4>
          <h4>Get Special Offer Price</h4>
          {/* <button>
            <i class="fa-solid fa-lock fa-5x fa-xl"></i>Unlock Price
          </button> */}
          <BasicPopover sectionName={'floorPlan'} floor={'3bhk'} />
        </div>
      </div>
    </section>
  );
};

const ContactUS = () => {
  return (
    <section className="contactUs" id='contactUs'>
      <div className="formAndContent">
        <div className="contactUsContent">
          <div className="title">
            <h1 className='alex-brush-regular' >Contact Us</h1>
            <h4>Site Address- Begur, Bengaluru,</h4>
            <h4>Karnataka 560068</h4>
          </div>
          <div className="socialLinks">
            <i class="fa-brands fa-facebook fa-8x fa-xl"></i>
            <i class="fa-brands fa-instagram fa-8x fa-xl"></i>
          </div>
        </div>
        <div className="form">
          <SkyBlossomForm sectionName={'contactUs'} />
        </div>
      </div>
    </section>
  );
};

const LocationAdvantage = () => {

  return(
    <section className="locationAdvantage" id='location'>
      <h1 className='alex-brush-regular'>Location Advantages</h1>
      <div className="locationAdvantageContent">
      <div className="SBMap">
      <iframe title="skyBlossomMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.5867853202653!2d77.63218367483951!3d12.869944287436175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b335ef2be13%3A0xdd22ed0384cf51e5!2sDS-MAX%20SkyBlossom!5e0!3m2!1sen!2sin!4v1716281369821!5m2!1sen!2sin" width="600px" height="450" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="advantages">
       <div className="advantage">
        <i class="fa-solid fa-map-location-dot fa-10x fa-xl"></i>
        <h6>Close To Central Silk Board</h6>
       </div>
       <div className="advantage">
       <i class="fa-solid fa-school fa-10x fa-xl"></i>
        <h6>PES University / GIBS Business School</h6>
       </div>
       <div className="advantage">
       <i class="fa-solid fa-bus fa-10x fa-xl"></i>
        <h6>Nearest Bus Stop Subhashnagara Hosa Road Bus Stop</h6>
       </div>
       <div className="advantage">
       <i class="fa-solid fa-building fa-10x fa-xl"></i>
        <h6>Close To Royal Meenakshi Mall / Gopalan Innovation Mall</h6>
       </div>
       <div className="advantage">
       <i class="fa-solid fa-hospital fa-10x fa-xl"></i>
        <h6>Narayana Hrudayalaya</h6>
       </div>
       <div className="advantage">
        <i class="fa-solid fa-hospital fa-10x fa-xl"></i>
        <h6>Fortis Hospital, Bannerghatta Road</h6>
       </div>
      </div>
      </div>
    </section>
  )
}

const Amenities = () => {

  const options = {
    items: 3,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsiveClass:true,
    responsive:{
        100:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
  }

  return (
    <section className='amenities' id='amenities'>
      <h1 className='alex-brush-regular'>Amenities</h1>
      <OwlCarousel className='amenityList owl-theme'  {...options}>
        <div className='amenity item'>
          <img src={BadmintonCourt} alt='batminton court icon' />
          <p>Badminton Court</p>
        </div>
        <div className='amenity item'>
        <img src={ButterflyGarden} alt='butterfly garden icon' />
        <p>Butterfly Garden</p>
        </div>
        <div className='amenity item'>
        <img src={RunningTrack} alt='running track' />
        <p>Running Track</p>
        </div>
        <div className='amenity item'>
        <img src={CarWashing} alt='car washing' />
        <p>Provision For Car Wash</p>
        </div>
        <div className='amenity item'>
        <img src={ChessBoard} alt='chess board' />
        <p>Board Game Zone</p>
        </div>
        <div className='amenity item'>
        <img src={ChildrenPlayArea} alt='children play area' />
        <p>Children Play Area</p>
        </div>
        <div className='amenity item'>
        <img src={Cricket} alt='cricket kit' />
        <p>Cricket Practice Net</p>
        </div>
        <div className='amenity item'>
        <img src={ElectricCarCharging} alt='electric car charging port' />
        <p>Electrical Charging Point One per each apartment unit at extra cost</p>
        </div>
        <div className='amenity item'>
        <img src={Swimming} alt='swimming' />
        <p>Swimming Pool</p>
        </div>
        <div className='amenity item'>
        <img src={GrassLand} alt='grass land' />
        <p>Landscaped Lawns</p>
        </div>
      </OwlCarousel>

    </section>
  )
}




const SkyBlossom = () => {
  return (
    <div className='skyBlossom'>
      <HeroSection />
      <SellingPricePoint />
      <AboutUs />
      <Glossary />
      <FloorPlans />
      <Amenities />
      <ContactUS />
      <LocationAdvantage />
      <Footer />
    </div>
  );
};

export default SkyBlossom;
