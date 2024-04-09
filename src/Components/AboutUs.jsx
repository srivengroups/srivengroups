import React from "react";
import Image1 from "../images/apartmentImg1.jpg";
import Image2 from "../images/apartmentImg2.jpg";
import GrcInfraLogo from '../images/grc-infra-logo.jpg';
import HwBuildTechLogo from '../images/hw-buildtech-logo.png';
import SipaniLogo from '../images/sipani-Logo.png';
import SurakshaGroupLogo from '../images/suraksha-group-logo.png';
import { useMediaQuery } from "@mui/material";



const AboutUs = () => {
  const isSmallScreen = useMediaQuery("(max-width: 992px)");
    return (
        <section id="aboutUs" class="aboutSection">
        <div className="imageSection">
        <div className="image1">
           <img src={Image1} height={isSmallScreen ? "170px": "200px"} alt="image3" />
        </div>
        <div className="image2">
           <img src={Image2}  height={isSmallScreen ? "170px": "200px"} alt="image3" />
        </div>
      </div>
      <div class="aboutContent">
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
        <div className="aboutUsLogos">
        <div className="pair">
        <div className="aboutUsLogo">
            <img src={SurakshaGroupLogo} height="50px" alt="Logo 1" />
        </div>
        <div className="aboutUsLogo">
            <img src={HwBuildTechLogo} height="50px" alt="Logo 1" />
        </div>
        </div>
        <div className="pair">
        <div className="aboutUsLogo">
            <img src={SipaniLogo} height="50px" alt="Logo 1" />
        </div>
        <div className="aboutUsLogo">
            <img src={GrcInfraLogo} height="50px" alt="Logo 1" />
        </div>
        </div>
        </div>
      </div>
    </section>
    )
}



export default AboutUs;