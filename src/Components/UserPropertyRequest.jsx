import React, { useState } from "react";

const UserPropertyRequest = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCallNow = () => {
    window.location.href = "tel:1234567890";
  };


  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi, I'm looking into this property");
    const url = `https://wa.me/1234567890/?text=${message}`;
    window.open(url, "_blank");
  };

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleSubmit = () => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "user-property-request",...formData })
    })
     .then(() => alert("Successfully submitted!"))
     .catch(error => alert(error));
  }





  return (
    <div className="userPropertyRequest">
      <div className="agentDetails">
        <h5>Agent Sriven Groups</h5>
        <p>Mobile: 9036053618</p>
        <p>whatsapp: 9036053618</p>
        <p>Email: info@srivengroups.com</p>
      </div>

    <form name="user-property-request" method="POST" className="userPropertyRequestForm">
    
      <div className="field">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
     <div className="btns">
        <button type="button"  onClick={handleCallNow}>Call Now</button>
        <button type="button" style={{backgroundColor: "rgb(22, 56, 94)"}} onClick={handleWhatsApp}>WhatsApp</button>
      </div>
    </div>
  );
};

export default UserPropertyRequest;
