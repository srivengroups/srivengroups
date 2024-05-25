import React from "react";
import SgNavbar from "../SgNavbar";
import Footer from "../Footer";
import FloorPlan3BHKImg from '../../images/skyBlossom/floor-plan-3bhk.jpg';
import FloorPlan2BHKImg from '../../images/skyBlossom/floor-plan-2bhk.jpg';
import { useLocation } from 'react-router-dom';



const FloorPrice = () => {

    const location = useLocation();
  const { floor } = location.state || {};

    const twoBHK = {
        price: "71.36 - 80.25 Lakhs",
        dimensions: "1151 - 1254 Sq. Ft",
        floor: "2BHK"
    }
    const threeBHK = {
        price: "85.50 - 1.16 Crores",
        dimensions: "1380 - 1823 Sq. Ft",
        floor: "3BHK"
    }

    return(
        <div>
        <SgNavbar />
        <div className="floorPrice">
        <div className="floorPriceContent">
           
          {floor === '2bhk'? 
          <>
          <h1><span>Floor:</span> {twoBHK.floor}</h1>
          <h1><span>Price:</span> {twoBHK.price}</h1>
          <h1><span>Dimensions:</span> {twoBHK.dimensions}</h1>

          </>:
          <>
          <h1><span>Floor:</span> {threeBHK.floor}</h1>
          <h1><span>Price:</span> {threeBHK.price}</h1>
          <h1><span>Dimensions:</span> {threeBHK.dimensions}</h1>
          </>}
        
        </div>
          {floor === '2bhk'? <img src={FloorPlan2BHKImg} alt="skyblossom 3bhk floor plan" /> 
          : <img src={FloorPlan3BHKImg} alt="skyblossom 3bhk floor plan" />
          }
        </div>
        <Footer />
      </div>
    )
}


export default FloorPrice;