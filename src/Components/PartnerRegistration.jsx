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




{/* <div className='registrationForm'>
<div className="zf-templateWidth">
<form
    action='https://forms.zohopublic.in/saitejachenji93/form/ClientDetails/formperma/-ECehUpuELpFzVbULn4tU6oO25hs6sSS2SfcnoA1vjM/htmlRecords/submit'
    name='form' method='POST' onSubmit='javascript:document.charset="UTF-8"; return zf_ValidateAndSubmit();'
    acceptCharset='UTF-8' encType='multipart/form-data' id='form'>
    <input type="hidden" name="zf_referrer_name" value="" />
    <input type="hidden" name="zf_redirect_url" value="" />
    <input type="hidden" name="zc_gad" value="" />
    <div className="zf-templateWrapper">
        <ul className="zf-tempHeadBdr">
            <li className="zf-tempHeadContBdr">
                <h2 className="zf-frmTitle"><em>Channel Partner Registration</em></h2>
                <p className="zf-frmDesc"></p>
                <div className="zf-clearBoth"></div>
            </li>
        </ul>
        <div className="zf-subContWrap zf-leftAlign">
            <ul>
                <li className="zf-tempFrmWrapper zf-large">
                    <label className="zf-labelName">
                        Channel Partner's Name
                        <em className="zf-important">*</em>
                    </label>
                    <div className="zf-tempContDiv">
                        <span>
                            <input type="text" name="SingleLine" checktype="c1" value="" maxLength="255" fieldType={1} placeholder="" />
                        </span>
                        <p id="SingleLine_error" className="zf-errorMessage" style={{ display: 'none' }}>Invalid value</p>
                    </div>
                    <div className="zf-clearBoth"></div>
                </li>
                <li className="zf-tempFrmWrapper zf-large">
                    <label className="zf-labelName">
                        Channel Partner's Company/Business Name
                        <em className="zf-important">*</em>
                    </label>
                    <div className="zf-tempContDiv">
                        <span>
                            <input type="text" name="SingleLine1" checktype="c1" value="" maxLength="255" fieldType={1} placeholder="" />
                        </span>
                        <p id="SingleLine1_error" className="zf-errorMessage" style={{ display: 'none' }}>Invalid value</p>
                    </div>
                    <div className="zf-clearBoth"></div>
                </li>
                <li className="zf-tempFrmWrapper zf-large">
                    <label className="zf-labelName">
                        Channel Partner's Executive/Manager's Name
                        <em className="zf-important">*</em>
                    </label>
                    <div className="zf-tempContDiv">
                        <span>
                            <input type="text" name="SingleLine2" checktype="c1" value="" maxLength="255" fieldType={1} placeholder="" />
                        </span>
                        <p id="SingleLine2_error" className="zf-errorMessage" style={{ display: 'none' }}>Invalid value</p>
                    </div>
                    <div className="zf-clearBoth"></div>
                </li>
                <li className="zf-tempFrmWrapper zf-large">
                    <label className="zf-labelName">
                        Business/Company Email
                        <em className="zf-important">*</em>
                    </label>
                    <div className="zf-tempContDiv">
                        <span>
                            <input fieldType={9} type="text" maxLength="255" name="Email" checktype="c5" value="" placeholder="" />
                        </span>
                        <p id="Email_error" className="zf-errorMessage" style={{ display: 'none' }}>Invalid value</p>
                    </div>
                    <div className="zf-clearBoth"></div>
                </li>
                <li className="zf-tempFrmWrapper zf-large">
                    <label className="zf-labelName">
                        Business Phone Number
                        <em className="zf-important">*</em>
                    </label>
                    <div className="zf-tempContDiv zf-phonefld">
                        <div className="zf-phwrapper zf-phNumber">
                            <span>
                                <input type="text" compname="PhoneNumber" name="PhoneNumber_countrycode" maxLength="20" checktype="c7" value="" phoneFormat="1" isCountryCodeEnabled={false} fieldType="11" id="international_PhoneNumber_countrycode" valType="number" phoneFormatType="1" placeholder="" />
                                <label>Number</label>
                            </span>
                        </div>
                    </div>
                    <div className="zf-clearBoth"></div>
                </li>
                <li className="zf-tempFrmWrapper zf-large">
                    <label className="zf-labelName">
                        RERA Number
                    </label>
                    <div className="zf-tempContDiv">
                        <span>
                            <input type="text" name="SingleLine3" checktype="c1" value="" maxLength="255" fieldType={1} placeholder="" />
                        </span>
                        <p id="SingleLine3_error" className="zf-errorMessage" style={{ display: 'none' }}>Invalid value</p>
                    </div>
                    <div className="zf-clearBoth"></div>
                </li>
                <li className="zf-tempFrmWrapper zf-large">
                    <label className="zf-labelName">
                        Additional Information
                    </label>
                    <div className="zf-tempContDiv">
                        <span>
                            <textarea name="MultiLine" checktype="c1" maxLength="65535" placeholder=""></textarea>
                        </span>
                        <p id="MultiLine_error" className="zf-errorMessage" style={{ display: 'none' }}>Invalid value</p>
                    </div>
                    <div className="zf-clearBoth"></div>
                </li>
            </ul>
            <ul>
                <li className="zf-fmFooter">
                    <button className="zf-submitColor">Submit</button>
                </li>
            </ul>
        </div>
    </div>
</form>
</div>
</div> */}
