import React from "react";


export default function MainSection() {

    return (
        <div className="mainSection" id="home">
         <div className="content">
         <h1>
            We Help You Find Your Perfect Homes. 
         </h1>
         <h6>"Unlock Your Dream Home: Explore Endless Possibilities with Sriven Groups.<br /> Welcome to a World of Exceptional Properties and Personalized Service."</h6>
         <form class="FormSection" name="user-name-and-email" method="POST">
         <input type="hidden" name="form-name" value="user-name-and-email" />
        <input class="inputForm" type="text" name="name" id="name" placeholder="Name" />
        <input class="inputForm" type="email" name="email" id="email" placeholder="Email" />
        <input class="buttonForm" type="submit" value="Submit" />
         </form>
         </div>
        </div>
    );
}