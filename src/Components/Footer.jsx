import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';


const Footer = () => {

    return(
      <div className="footer">
        <div class="container">
  <footer class="py-5">
    <div class="row">
      <div class="col-6 col-md-2 mb-3">
        <h5>Quick Links</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="/#home" class="nav-link p-0">Home</a></li>
          <li class="nav-item mb-2"><a href="/properties/readyToMove" class="nav-link p-0">Properties</a></li>
          <li class="nav-item mb-2"><a href="/channel-partners" class="nav-link p-0">Channel Partners</a></li>
          <li class="nav-item mb-2"><a href="/#propertyListings" class="nav-link p-0">Property Listings</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3 secondCol">
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="/#aboutUs" class="nav-link p-0">About Us</a></li>
          <li class="nav-item mb-2"><a href="/#contactUs" class="nav-link p-0">Contact Us</a></li>
          <li class="nav-item mb-2"><a href="/#services" class="nav-link p-0">Our Services</a></li>
          <li class="nav-item mb-2"><a href="/privacy-policy" class="nav-link p-0">Privacy Policy</a></li>
        </ul>
      </div>

      <div class="col-md-5 offset-md-3 mb-3">
        <div style={{textAlign: "left"}}>
          <h5>Contact</h5>
          <p>Call Us: 9036053618</p>
          <p>Email: info@srivengroups.com</p>
          <p>Address: No.475,3rd Floor,RBI Layout,JP Nagar 7th Phase,Bengaluru-560078</p>
        </div>
      </div>
    </div>

    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2024 SRIVEN GROUPS, Inc. All rights reserved.</p>
      <ul class="list-unstyled d-flex">
          <li class="ms-3"><div class="link-body-emphasis" href="#"><XIcon style={{ fontSize: '3rem', color: 'white' }} /></div></li>
          <li class="ms-3"><a class="link-body-emphasis" href="https://www.instagram.com/srivengroups/?next=%2F&hl=en"><InstagramIcon style={{ fontSize: '3rem', color: 'white' }} /></a></li>
          <li class="ms-3"><a class="link-body-emphasis" href="https://www.facebook.com/Srivengroups.2024"><FacebookIcon style={{ fontSize: '3rem', color: 'white' }} /></a></li>
          <li class="ms-3"><div class="link-body-emphasis" href="#"><YouTubeIcon style={{ fontSize: '3rem', color: 'white' }} /></div></li>
        </ul>
    </div>
  </footer>
</div>
      </div>

    );
}


export default Footer;