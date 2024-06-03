import React from "react";
import ThankYouImg from '../../images/common/thank-you.jpg';
import SgNavbar from "../SgNavbar";
import Footer from "../Footer";
import { useNavigate } from 'react-router-dom';
import { Helmet} from 'react-helmet';
import GoogleTagManagerNoscript from '../GoogleTagManagerNoscript';
import useGoogleTagManager from "../useGoogleTagManager";


const ThankYouPage = () => {
    const navigate = useNavigate();

    const styles = {
        width: "100vw",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
    }
    useGoogleTagManager("GTM-5X7MZ7RK");

    const handleClick = (event) => {
        event.preventDefault();
        window.open(`https://drive.google.com/u/1/uc?id=1kAu2asev20RxZiXepWbYkPc1NjvXFk9a&export=download`, "_blank");
    }

    return (

        <>
        <Helmet>
          <title>Sky Blossom - Thank You</title>
          <meta name="description" content="Sky Blossom - Thank You" />
          <meta property="og:title" content="Sky Blossom - Thank You" />
          <meta property="og:description" content="Sky Blossom - Thank You" />
          <meta property="og:url" content="https://www.srivengroups.com/skyblossom" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://www.srivengroups.com/skyblossom/images/common/thank-you.jpg" />
          <meta property="og:site_name" content="Sky Blossom" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Sky Blossom - Thank You" />
          <meta name="twitter:description" content="Sky Blossom - Thank You" />
          <meta name="twitter:image" content="https://www.srivengroups.com/skyblossom/images/common/thank-you.jpg" />
          <meta name="twitter:site" content="@srivengroups" />
          <meta name="twitter:creator" content="@srivengroups" />
          <link rel="canonical" href="https://www.srivengroups.com/skyblossom" />

        </Helmet>
        <GoogleTagManagerNoscript id={"GTM-5X7MZ7RK"} />
        <SgNavbar fixedTop={true} />
        <div className="thankYouPage" style={styles}>
             <img src={ThankYouImg} alt="Thank You" />
             <h3>Our sales team will contact you with detailed information</h3>
        <div className="thankyouBtns">
            <button className="backToHome" onClick={() => navigate('/skyblossom')}>Back To Home</button>
            <button className="downloadBrochure" onClick={handleClick}>Download Brochure</button>
        </div>
        </div>
        <Footer />
        </>
    )
}


export default ThankYouPage;
