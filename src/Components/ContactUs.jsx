import React from "react";
import Button from '@mui/material/Button';
import { useMediaQuery } from "@mui/material";


const ContactUs = () => {
    const isSmallScreen = useMediaQuery("(max-width: 992px)");

    return (
        <div className="contactUsParent">
        <h1>Contact Us</h1>
        <div className="contactUs">
           <div className="contactUsBgEffect"></div>
           <div className="contactUsContent">
            <h3>consectetur adipiscing elit. Donec lacinia porta arcu, et lacinia mi dignissim vel. 
            Morbi lobortis sollicitudin massa, id tempus felis dignissim sodales.</h3>
            <div className="contactUsBtns">
               <Button variant="contained"  size={isSmallScreen ? "medium": "large"} >Call Us Now</Button>
               <div className="whiteBtn">
                 <Button variant="contained" size={isSmallScreen ? "medium": "large"} >Whatsapp</Button>
               </div>
            </div>
           </div>
        </div>
        </div>
    );
}

export default ContactUs;