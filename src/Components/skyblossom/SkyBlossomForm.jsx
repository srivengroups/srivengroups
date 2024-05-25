import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const SkyBlossomForm = ({ sectionName, floor }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferences: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    const { name, phone, email, preferences } = formData;
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!phone) newErrors.phone = "Phone number is required";
    if (!email) newErrors.email = "Email is required";
    if (sectionName !== 'floorPlan' && !preferences) newErrors.preferences = "Preferences are required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleClick = (event) => {
    event.preventDefault();
    if (!validateForm()) {
      alert("Please fill out all required fields.");
      return;
    }
    handleSubmit();
    switch (sectionName) {
      case 'enquireNow':
        navigate('/skyblossom/thank-you');
        break;
      case 'brochure':
        window.open(`https://drive.google.com/u/1/uc?id=1kAu2asev20RxZiXepWbYkPc1NjvXFk9a&export=download`, "_blank");
        break;
      case 'floorPlan':
        navigate('/skyblossom/floor-price', { state: { floor: floor } });
        break;
      case 'contactUs':
        navigate('/skyblossom/thank-you');
        break;
      default:
        console.log('default');
        break;
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      alert("Please fill out all required fields.");
      return;
    }

    if(floor) {
      formData.preferences = floor;
      formData.message = "";
    }

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "skyblossom",...formData })
      });
    } catch (error) {
      console.log(error);
      alert('error submitting the form. Please try again');
    }
  };

  return (
    <form>
      {sectionName === 'enquireNow' && <h5 style={{textAlign: 'center'}}>Enquire Now</h5>}
      <input
        type="text"
        className="formControl"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && <span className="error">{errors.name}</span>}
      <input
        type="text"
        className="formControl"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
      />
      {errors.phone && <span className="error">{errors.phone}</span>}
      <input
        type="email"
        className="formControl"
        name="email"
        placeholder="Email Id"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <span className="error">{errors.email}</span>}
      {sectionName !== 'floorPlan' &&
        <>
          <select
            required
            className="formControl"
            name="preferences"
            value={formData.preferences}
            onChange={handleChange}
          >
            <option value="" disabled hidden>Preferences</option>
            <option value="2 BHK">2 BHK</option>
            <option value="3 BHK">3 BHK</option>
          </select>
          {errors.preferences && <span className="error">{errors.preferences}</span>}
          <textarea
            className="formControl"
            id="message"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </>
      }
      <input
        type="submit"
        className="form-btn formControl"
        value={sectionName === 'brochure' ? "Download" : "Submit"}
        onClick={handleClick}
      />
    </form>
  );
};

export default SkyBlossomForm;
