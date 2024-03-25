import React from "react";
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MapView from "./MapView";


// const position = [12.8912831,77.5799345];

// const MapView = () => {
//   return (
//     <div id="map" className="map" style={{height: "400px", width: "600px"}}>
//     <MapContainer center={[12.8912831, 77.5799345]} zoom={13} style={{height: "100%", width: "100%"}} scrollWheelZoom={false}>
//   <TileLayer
//     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//   />
//   <Marker position={[12.8912831, 77.5799345]}>
//     <Popup>
//       A pretty CSS3 popup. <br /> Easily customizable.
//     </Popup>
//   </Marker>
// </MapContainer>
//   </div>
//   )
// }

const KnowMore = () => {

    

    return (
        <section id="contactUs" className="contactSection">
              <MapView coordinates={[12.8912831, 77.5799345]}/>
              {/* <MapView /> */}
            <div data-aos="flip-left" data-aos-delay="150" className="form-Container aos-init aos-animate">
                <form action="Reach-Us.php" method="post" autocomplete="off">
                    <h2>Reach <span style={{WebkitTextFillColor: "#E62249"}}>Us</span></h2>
                    <p>We will be happy to assist you</p>
                    <div className="inputContainer">
                        <input type="text" name="name" id="name" placeholder="Enter your name " />
                    </div>
                    <div className="inputContainer">
                        <input type="email" name="email" id="email" placeholder="Enter your email " />
                    </div>
                    <div className="inputContainer">
                        <input type="text" name="number" id="number" placeholder="Enter Mobile Number .. " />
                    </div>
                    <div className="inputContainer">
                        <input type="text" name="name" id="name" placeholder="Write what your are looking for ?" />
                    </div>
                    <div className="inputContainer">
                        <input className="inputButton" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </section>
    );
}

export default KnowMore;
