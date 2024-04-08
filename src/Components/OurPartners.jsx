import React from 'react';
import GrcInfraLogo from '../images/grc-infra-logo.jpg';
import HwBuildTechLogo from '../images/hw-buildtech-logo.png';
import SipaniLogo from '../images/sipani-Logo.png';
import SurakshaGroupLogo from '../images/suraksha-group-logo.png';

const OurPartners = () => {
    return (
        <div className="partners">
            <div className="container">
                <div className="sec-title">
                    <h1>Our <span style={{WebkitTextFillColor: "#E62249"}}>Partners</span></h1>
                    <p>The Companies That Represent Us.</p>
                    <section className="ourClientSection">
                        <div className="clientScroll-container">
                            <div className="logo">
                                <img src={GrcInfraLogo} alt="Logo 1" />
                            </div>
                            <div className="logo">
                                <img src={HwBuildTechLogo} alt="Logo 2" />
                            </div>
                            <div className="logo">
                                <img src={SipaniLogo} alt="Logo 3" />
                            </div>
                            <div className="logo">
                                <img src={SurakshaGroupLogo} alt="Logo 4" />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default OurPartners;
