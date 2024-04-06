import React from "react";
// import MapView from "./MapView";

const KnowMore = () => {

    

    return (
        <section id="contactUs" className="contactSection">
              {/* <MapView coordinates={[12.8912831, 77.5799345]}/> */}
              <iframe title="srivengroups-mapview" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15557.110713692176!2d77.5817269!3d12.889858!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xafec68da8c5a5849%3A0x18c07a54d42d4a09!2sSRIVEN%20GROUPS!5e0!3m2!1sen!2sin!4v1711958668544!5m2!1sen!2sin" width="600" height="450" style={{border: 0, boxShadow: "2px 4px 8px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div data-aos="flip-left" data-aos-delay="150" className="form-Container aos-init aos-animate">
                <form method="POST" name="reachUs" action="/" netlify>
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
