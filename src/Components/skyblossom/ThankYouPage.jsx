import React from "react";
import ThankYouImg from '../../images/common/thank-you.jpg';
import SgNavbar from "../SgNavbar";
import Footer from "../Footer";
import { useNavigate } from 'react-router-dom';



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

    const handleClick = (event) => {
        event.preventDefault();
        window.open(`https://drive.google.com/u/1/uc?id=1kAu2asev20RxZiXepWbYkPc1NjvXFk9a&export=download`, "_blank");
    }

    return (
        <>
        <SgNavbar fixedTop={true} />
        <div className="thankYouPage" style={styles}>
             <img src={ThankYouImg} alt="Thank You" />
             <h3>Our sales team will contact you with detailed information</h3>
        <div className="thankyouBtns">
            <button className="backToHome" onClick={navigate('/skyblossom')}>Back To Home</button>
            <button className="downloadBrochure" onClick={handleClick}>Download Brochure</button>
        </div>
        </div>
        <Footer />
        </>
    )
}


export default ThankYouPage;
