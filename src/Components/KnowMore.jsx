import React from "react";
import MapView from "./MapView";

const KnowMore = () => {

    

    return (
        <section id="contactUs" className="contactSection">
              <MapView coordinates={[12.8912831, 77.5799345]}/>
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
