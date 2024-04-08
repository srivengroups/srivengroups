import React from 'react';
import ApartmentIcon from '@mui/icons-material/Apartment';
import KeyIcon from '@mui/icons-material/Key';



const Services = () => {

    return(
         <section className='services' id='services'>
             <div className="head">
                <h1>
                Our 
                   <span style={{WebkitTextFillColor: "#E62249"}}> Services</span>
                </h1>
             </div>

             <div className="body">
                  <div className='service serviceMetaData'>
                     <h2 className='serviceHeading'>Get the best properties at best prices</h2>
                     <div>
                       <ApartmentIcon style={{fontSize: "50px", color: "#E62249"}}/>
                       <p>Informed Market Insights</p>
                     </div>
                     <div>
                        <KeyIcon style={{fontSize: "50px", color: "#E62249"}} />
                        <p>Best Spacious Homes</p>
                     </div>
                  </div>
                  <div className='service'>
                  <h3>APARTMENT SHOWCASE</h3>
                     <p>Looking to sell your apartment? We specialize in 
                     connecting you with interested buyers and organizing 
                     on-site visits to showcase your property's charm. Trust us 
                     to present your apartment to a global audience and make your sale a success. </p>
                  </div>
                  <div className='service'>
                  <h3>LAND PLOTS</h3>
                     <p>We specialize in facilitating the discovery of 
                     potential buyers for your property. Additionally, we meticulously coordinate site visits for interested parties, 
                     ensuring they have the opportunity to 
                     fully experience and appreciate the unique features of your property. </p>
                  </div>
                  <div className='service'>
                  <h3>VILLAS EXPOSURE</h3>
                     <p>Interested in selling your villa? We 
                     excel in linking you with potential buyers keen on your 
                     property. Our team not only finds the right buyer but also organizes site visits,
                      allowing interested 
                      parties to experience your stunning villa firsthand. Trust us to showcase your villa globally. </p>
                  </div>
             </div>
         </section>
    )
}




export default Services