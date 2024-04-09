import React from "react";


const WhySG = () => {
  const content = [
    {
      imageUrl:"https://img.icons8.com/ios-filled/50/228BE6/briefcase-settings.png",
      imgAltMsg: "briefCase settings",
      title:"Experience", 
      description:`With years of experience in the industry, we have a deep understanding 
      of the market dynamics and trends, enabling us to offer informed advice and solutions.`
    },
    {
      imageUrl: "https://img.icons8.com/ios-filled/50/FD7E14/guarantee.png",
      imgAltMsg: "guarantee",
      title:"Quality", 
      description:`We never compromise on quality.
       From materials to craftsmanship, we ensure that every aspect of our projects meets the highest standards.`
    },
    {
      imageUrl:"https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/68/12B886/external-satisfaction-productivity-concentration-smashingstocks-mixed-smashing-stocks.png",
      imgAltMsg: "external-satisfaction-productivity-concentration-smashingstocks-mixed-smashing-stocks",
      title: "Customer Satisfaction",
      description:`Our commitment to customer satisfaction is unwavering. 
      We go above and beyond to ensure that every client receives 
      personalized attention and support throughout their journey with us.`
    }
  ]

  return (
    <div className="whySGParent">
            <h1>Why <span style={{WebkitTextFillColor: "#E62249"}}>Choose Us?</span></h1>
            <div className="whySG">
      <div className="grid-container">
        {content.map((item, index) => (
          <div key={index} className="grid-item">
            <img width="70" height="70" style={{marginBottom: "20px"}} src={item.imageUrl} alt={item.imgAltMsg}/>
            <h2>{item.title}</h2>
            <p>
            {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};


export default WhySG;