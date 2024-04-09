import React from "react";
import { Link } from "react-router-dom";

const PropertyCard = ({key, property}) => {
    return (
        <div className="propertyCard" key={key}>
             <div className="image">
                <img src={property.imageUrl} style={{minHeight: "300px", width: "100%"}} alt="image1" />
             </div>
             <div className="PCcardContent">
             <div className="PCContent">
                <h5>{property.heading}</h5>
                <p>{property.shortDescription}</p>
                <div className="flatDetails">
                   <div className="property">
                      <h6><span>Area: </span>{property.area}</h6>
                   </div>
                   <div className="property">
                      <h6><span>Bedrooms: </span>{property.bedrooms}</h6>
                   </div>
                </div>
                <p>{property.location}</p>
             </div>
             <div className="priceDetails">
                <h5>{property.propertyStatus === "underConstruction"? "Under Construction": property.propertyStatus === "readyToMove"? "Ready to Move": "Sold Out" }</h5>
                <p>{property.priceDetails}</p>
                <div className="pcBtns">
                    <Link to={"/lead-registration"} className="btn">Lead Registration</Link>
                    {/* <a href="#" class="btn btn-primary">Lead Registration</a> */}
                   <Link to={`/properties/page/${property.heading}`} className="btn">View Property</Link>
                    {/* <a href="#" class="btn btn-primary">View Property</a> */}
                </div>
             </div>
             </div>
        </div>

    );
}

export default PropertyCard;
