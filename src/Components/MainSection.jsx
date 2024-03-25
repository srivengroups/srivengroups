import React from "react";


export default function MainSection() {

    return (
        <div className="mainSection" id="home">
         <div className="content">
         <h1>
            We Help You Find Your Perfect Homes. 
         </h1>
         <form class="FormSection aos-init aos-animate" action="hero-capture.php" method="post">
        <input class="inputForm" type="text" name="name" id="name" placeholder="Name" />
        <input class="inputForm" type="email" name="email" id="email" placeholder="Email" />
        <input class="buttonForm" type="submit" value="Submit" />
         </form>
         </div>
        </div>
    );
}