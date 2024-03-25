import React from 'react';
import SgNavbar from '../Components/SgNavbar';
import Footer from './Footer';

const PartnerRegistration = ({channelPartner, noHeaderFooter}) => {
    return (
        <div className="partnerRegistration">
              {!noHeaderFooter && <SgNavbar fixedTop={false} />}
            <div className="container partnerRegistrationContainer">
      <h2>{channelPartner ? "Channel Partner Registration": "Lead Registration" }</h2>
      <form>
        <div className="form-group">
          <label htmlFor="partnerName">Channel Partner's Name *</label>
          <input type="text" id="partnerName" name="partnerName" required />
        </div>
        <div className="form-group">
          <label htmlFor={channelPartner?"companyName": "customerName"}>{channelPartner?"Channel Partner's Company/Business Name *": "Customer’s Name *"}</label>
          <input type="text" id={channelPartner?"companyName": "customerName"} name={channelPartner?"companyName": "customerName"} required />
        </div>
        <div className="form-group">
          <label htmlFor="executiveName">Channel Partner's Executive/Manager's Name *</label>
          <input type="text" id="executiveName" name="executiveName" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Business/Company Email *</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Business Phone Number *</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" required />
        </div>
        <div className="form-group">
          <label htmlFor="reraNumber">RERA Number</label>
          <input type="text" id="reraNumber" name="reraNumber" />
        </div>
        <div className="form-group">
          <label htmlFor="comments">Comments</label>
          <textarea id="comments" name="comments"></textarea>
        </div>
        <div className="form-group">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
    {!noHeaderFooter && <Footer />}
        </div>
    );
}

export default PartnerRegistration;