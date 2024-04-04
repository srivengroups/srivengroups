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
                  <h3>Service2</h3>
                     <p>Es un hecho establecido hace demasiado tiempo
                      que un lector se distraerá con el contenido del texto de un 
                      sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una
                      distribución más o menos normal de las letras, al contrario de usar textos como por </p>
                  </div>
                  <div className='service'>
                  <h3>Service3</h3>
                     <p>Es un hecho establecido hace demasiado tiempo
                      que un lector se distraerá con el contenido del texto de un 
                      sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una
                      distribución más o menos normal de las letras, al contrario de usar textos como por </p>
                  </div>
                  <div className='service'>
                  <h3>Service4</h3>
                     <p>Es un hecho establecido hace demasiado tiempo
                      que un lector se distraerá con el contenido del texto de un 
                      sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una
                      distribución más o menos normal de las letras, al contrario de usar textos como por </p>
                  </div>
             </div>
         </section>
    )
}




export default Services