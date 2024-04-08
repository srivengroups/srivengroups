import React from "react";
import { useParams } from "react-router-dom";
import SgNavbar from "./SgNavbar";
import Footer from "./Footer";
import MortgageCalculator from "./MortgageCalculator";
import UserPropertyRequest from "./UserPropertyRequest";
import DoneIcon from '@mui/icons-material/Done';

const PropertyPage = ({ properties }) => {
  
  const { propertyName } = useParams();

  const decodedPropertyName = propertyName.replace(/%20/g, " ");
  const [property] = properties.filter(
    (prop) => prop.heading === decodedPropertyName
  );
  const description = property.description;
  return (
    <div className="propertyPage">
      <div className="propertyPageHeading">
        <SgNavbar fixedTop={true} />
        {/* <h1 className="mx-5">{property[0].heading}</h1> */}
        <div className="textDetails">
              <div className="sideLeft">
                <h1>{property.heading}</h1>
                <h3>{property.location}</h3>
              </div>
              <div className="sideRight">
                <h5>{property.propertyStatus === "underConstruction"? "under construction": property.propertyStatus === "readyToMove"? "Ready to Move": "Sold Out" }</h5>
                <h5>{property.priceDetails? property.priceDetails : "Price: Unveiling soon"}</h5>
              </div>
        </div>
      </div>
      <div className="pageContent">
      <div className="pagePropertyContent">
        <div className="nonMapAndMortgage">
          <div className="propertyPageMetaData">
            <div className="pictureDetails">
              <img src={property.imageUrl} height={"300px"} alt="image3" />
            </div>
          </div>

          <div className="propertyContent">
            <p>Property ID: SVG-875347</p>
            <div className="flatDetails">
              <div>
                <p>Bedrooms</p>
                <div>
                <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FA5252/bedroom.png" alt="bedroom"/>
                  <p>{property.bedrooms}</p>
                </div>
              </div>
              <div>
                <p>Area</p>
                <div>
                <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/FA5252/wyoming.png" alt="wyoming"/>
                  <p>{property.area}</p>
                </div>
              </div>
              <div>
                <p>Unit Size</p>
                <div>
                <img width="40" height="40" src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/FA5252/external-Size-arrows-tanah-basah-basic-outline-tanah-basah-2.png" alt="external-Size-arrows-tanah-basah-basic-outline-tanah-basah-2"/>
                  <p>{property.unitSize}</p>
                </div>
              </div>
              <div>
                <p>Location</p>
                <div>
                <img width="40" height="40" src="https://img.icons8.com/color/48/marker--v1.png" alt="marker--v1"/>
                  <p>{property.location}</p>
                </div>
              </div>
            </div>
            <div className="propertyDescription">
              <h5>Description</h5>
              <p>{description}</p>
            </div>
            <div className="additionalInformation">
              <h5>Additional Details</h5>
              <div>
                <h6>Structure</h6>
                <p>{property.structure}</p>
              </div>
              <div>
                <h6>Rera Number</h6>
                <p>{property.reraNumber}</p>
              </div>
            </div>
            <div className="Features">
              <h5>Features</h5>
              <div className="featureGrid">
                {
                  property.features.split(',').map((feature) => {
                    return (
                      <div className="feature">
                        <DoneIcon style={{color: "#E62249"}} />
                        <p>{feature}</p>
                      </div>
                    );
                  })
                }
              </div>
            </div>

            <div className="floorPlans">
              <h5>Floor Plans</h5>
              <div className="planGrid">
              {property.floorPlans.split(",").map((floorPlan, id) => (
  <div className="plan" key={id}>
    <h6>{floorPlan}</h6>
    <div>
      <p>{property.floorPrices.split(',')[id]}</p>
    </div>
  </div>
))}
              </div>
            </div>
          </div>
        </div>

        <div className="mapAndMortgage">
            <iframe title="sumadhuraSushantham" src={property.mapUrl} min-width="800" height="400" style={{border: "0", boxShadow: "0 2px 4px grey"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <MortgageCalculator />
        </div>
        </div>
        <div className="AgentContactRequest">
            <UserPropertyRequest />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyPage;
