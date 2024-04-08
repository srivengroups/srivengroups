import React, {useState} from "react";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";


const ProjectCard = ({ image, details }) => {
  const isSmallScreen = useMediaQuery("(max-width: 992px)");
  return (
    <div className="card projectCard text-bg-dark">
      <img src={details.imageUrl} height={!isSmallScreen && "400px"} className={isSmallScreen ? "card-img-top" : "card-img-left"} alt="property" />
      <div  className={isSmallScreen ? "card-body" : "card-img-overlay"}>
        <div className={isSmallScreen ? "": "cardContent"}>
           <h5 className="card-title">{details.heading}</h5>
           <p className="card-text">
           {details.shortDescription && details.shortDescription}
           </p>
           <div className="flatDetails">
           <div>
           <h6>Bedrooms</h6>
           <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/FA5252/bedroom.png" alt="bedroom"/>
           <span>{details.bedrooms}</span>
           </div>
           <div>
           <h6>Area</h6>
           <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/FA5252/wyoming.png" alt="wyoming"/>
           <span>{details.area}</span>
           </div>
           </div>
           <h6>{details.location}</h6>
           <h6>{details.propertyStatus === "underConstruction"? "under construction": details.propertyStatus === "readyToMove"? "Ready to Move": "Sold Out" }</h6>
           {details.minPrice? <h4>Starting From <span style={{color: "#E62249"}}>{details.minPrice}</span></h4>: <h4 style={{color: "#E62249"}}>Price Unveiling Soon</h4>}
           <div className="pcBtns">
                    <Link to={`/properties/page/${details.heading}`} className="btn">View Property</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

const Gallery = ({ images, properties }) => {
  const imagesPerPage = 1; // Number of images to display per page
  const [currentPage, setCurrentPage] = useState(1); // Current page number

  // Calculate the index range of images to display for the current page
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  return (
    <div className="latestProjects" id="propertyListings">
    <div className="gallery-container">
      <p>Latest</p>
      <h2>Property <span style={{WebkitTextFillColor: "#E62249"}}>Listings</span></h2>
      {/* Render images for the current page */}
      {currentImages.map((imagePair, index) => (
        <div className="card-container" key={index}>
          <ProjectCard image={imagePair[0]} details={properties[currentPage === 1 ? 0 : currentPage*2 -2]} />
          {properties.length>currentPage*2 -1 && <ProjectCard image={imagePair[1]} details={properties[currentPage === 1 ? 1 : currentPage*2 -1]} />}
        </div>
      ))}
      {/* Pagination */}
      <p style={{marginTop: "2.5rem"}}>Page No.</p>
      <ul className="pagination">
        {Array.from({ length: Math.ceil(images.length / imagesPerPage) }).map((_, index) => (
          <li key={index} className={currentPage === index + 1 ? 'active' : ''}>
            <button onClick={() => paginate(index + 1)}>{index + 1}</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Gallery;




