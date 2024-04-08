import React from 'react';
import SgNavbar from '../Components/SgNavbar';
import Footer from './Footer';

const PartnerRegistration = ({noHeaderFooter, setPartnerDetails, leadRegistration}) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const myForm = event.target;
    const formData = new FormData(myForm);

    const partnerDetails = {};
    formData.forEach((value, key) => {
      partnerDetails[key] = value;
    });

    const encode = (data) => {
      return Object.keys(data)
          .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
          .join("&");
    }

    if(leadRegistration) {
      partnerDetails.comments = formData.get('comments');
      setPartnerDetails(prevPartnerDetails => partnerDetails);
      console.log(partnerDetails);
    }else {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "channel-partner-registration",...partnerDetails })
      })
       .then(() => alert("Successfully submitted!"))
       .catch(error => alert(error));
      };
    }
  
    return (
        <div className="partnerRegistration">
              {!noHeaderFooter && <SgNavbar fixedTop={false} />}
            <div className="container partnerRegistrationContainer">
      <h2>Channel Partner Registration</h2>
      <form name='channel-partner-registration' onSubmit={handleSubmit} >
        <div className="form-group">
          <label htmlFor="partnerName">Channel Partner's Name *</label>
          <input type="text" id="partnerName" name="partnerName" required />
        </div>
        <div className="form-group">
          <label htmlFor="companyName">Channel Partner's Company/Business Name *</label>
          <input type="text" id="companyName" name="companyName" required />
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