import React from "react";
import SrivenLogoImg from "../images/web logo (1).png";
import { Link } from "react-router-dom";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function SgNavbar({fixedTop}) {
  const handleWhatsAppClick = () => {
    // Replace "1234567890" with your WhatsApp number
    const whatsappUrl = 'https://api.whatsapp.com/send?phone=9036053618';
    window.open(whatsappUrl, '_blank');
  };
  return (
<nav className={`navbar sgNavbar navbar-expand-lg navbar-light bg-light ${fixedTop? "fixed-top": ""}`}>
  <div class="container-fluid navbarContent">
    <Link to={"/#home"}><img src={SrivenLogoImg} alt="sriven groups logo" height="70px" className="mx-5"/></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse mx-5" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0 ml-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/#home">Home</a>
        </li>
        <li class="nav-item dropdown">
          <div class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Properties
          </div>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to={"/properties/readyToMove"} className="dropdown-item">Ready to Move</Link></li>
            <li><Link to={"/properties/underConstruction"} className="dropdown-item">Under Construction</Link></li>
            <li><Link to={"/properties/soldOut"} className="dropdown-item">Sold out</Link></li>
          </ul>
        </li>
        <li class="nav-item">
          <Link to={"/channel-partners"} className="nav-link">Channel Partners</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#aboutUs">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#contactUs">Contact US</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#contactUs">
          <div className='whatsappIcon' onClick={handleWhatsAppClick}>
           <WhatsAppIcon />
          </div></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}
