import React from 'react';
import Logo1 from '../images/web logo (1).png';
import Logo2 from '../images/web logo (1).png';
import Logo3 from '../images/web logo (1).png';
import Logo4 from '../images/web logo (1).png';
import Logo5 from '../images/web logo (1).png';
import Logo6 from '../images/web logo (1).png';

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
                                <img src={Logo1} alt="Logo 1" />
                            </div>
                            <div className="logo">
                                <img src={Logo2} alt="Logo 2" />
                            </div>
                            <div className="logo">
                                <img src={Logo3} alt="Logo 3" />
                            </div>
                            <div className="logo">
                                <img src={Logo4} alt="Logo 4" />
                            </div>
                            <div className="logo">
                                <img src={Logo5} alt="Logo 5" />
                            </div>
                            <div className="logo">
                                <img src={Logo6} alt="Logo 6" />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default OurPartners;
