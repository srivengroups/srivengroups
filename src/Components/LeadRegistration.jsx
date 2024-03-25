import React, {useState} from "react";
import LeadRegisterStepper from "./LeadRegisterStepper";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PartnerRegistration from "./PartnerRegistration";
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import SgNavbar from "./SgNavbar";
import Footer from "./Footer";

const PersonalDetails = () => {
    // State variables to store form data
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      emailAddress: ''
    });
  
    // Function to handle form input changes
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    // Function to handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      // Validate form fields
      if (formData.firstName && formData.lastName && formData.phoneNumber && formData.emailAddress) {
        // Form data is valid, perform further actions (e.g., submit to server)
        console.log('Form submitted:', formData);
      } else {
        // Form data is incomplete, display an error message or handle as needed
        alert('Please fill in all required fields.');
      }
    };
  
    return (
        <div className="personalDetails">
        <h4>Please Fill in Leads Personal Details</h4>
      <form>
        <div className="formElements">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formElements">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formElements">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formElements">
          <label htmlFor="emailAddress">Email Address:</label>
          <input
            type="email"
            id="emailAddress"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            required
          />
        </div>
        
      </form>
      </div>
    );
  };


  const OffCanvas = () => {
    return (
        <div>
            <a class="btn" style={{backgroundColor: "#43A3D5", color: "white"}} data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
            Add New Channel Partner
</a>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <PartnerRegistration channelPartner={true} noHeaderFooter={true} />
  </div>
</div>
        </div>
    )
  }




function ChannelPartnerDetails() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="lgChannelPartnerDetails">
      <h3>Please Select Channel Partner</h3>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>
      <OffCanvas />
    </div>
  );
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function SelectProspects() {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Select Prospects</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}


const ConfigurationProspect = () => {

    return(
         <div className="configurationProspect">
            <h3>
               What configuration Prospect is Interested In?
            </h3>
            <SelectProspects />
         </div>
    );
}


function RadioButtonsGroup() {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Range</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="1.5Cr - 2Cr"
        name="radio-buttons-group"
      >
        <FormControlLabel value="90L - 1Cr" control={<Radio />} label="90L - 1Cr" />
        <FormControlLabel value="1Cr - 1.25Cr" control={<Radio />} label="1Cr - 1.25Cr" />
        <FormControlLabel value="1.25Cr - 1.5Cr" control={<Radio />} label="1.25Cr - 1.5Cr" />
        <FormControlLabel value="1.5Cr - 2Cr" control={<Radio />} label="1.5Cr - 2Cr" />
      </RadioGroup>
    </FormControl>
  );
}


const SelectProspectBudget = () => {

    return (
        <div className="selectProspectBudget">
          <h3>What is the budget of your prospect?</h3>
          <RadioButtonsGroup />
        </div>
    )
}

const Contactable = () => {

    return(
        <div className="contactable">
            <h3>Do you want us to call and arrange a Site Visit?</h3>
            <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Yes"
        name="radio-buttons-group"
      >
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>

        </div>
    )
}


const TermsAndConditions = () => {

    const text =  `I Accept that Power of Flow Realty LLP is a mandate 
    service provider that facilitates sales transactions 
    between the developer, customer &amp; Channel partner 
    for a given project.  All the Channel partner fee shall 
    be paid directly by the developer and Flow will not be inv
    olved in any commercial arrangement with the channel partner
     with respect to the bookings done.`

    return (
        <div className="termsAndConditions">
            <h3>Please Accept Terms and conditions</h3>
            <FormGroup>
               <FormControlLabel required control={<Checkbox />} label={text} />
            </FormGroup>
        </div>
    )
}


const LeadRegistration = () => {

    const defaultStep = 1;

    const [currStep, setCurrStep] = useState(defaultStep);

    const handleNextClick = () => {
        setCurrStep(currStep + 1);
    }
    const handlePrevClick = () => {
        setCurrStep(currStep - 1);
    }
    return (
        <div className="leadregisterParent">
        <SgNavbar fixedTop={false}/>
        <LeadRegisterStepper currStep={currStep - 1} />
        <div className="leadRegistration">
            <h1>Lead Registration</h1>
            
            {currStep === 1 && <PersonalDetails />}
            {currStep === 2 && <ChannelPartnerDetails />}
            {currStep === 3 && <ConfigurationProspect />}
            {currStep === 4 && <SelectProspectBudget /> }
            {currStep === 5 && <Contactable /> }
            {currStep === 6 && <TermsAndConditions /> }
            <div className="stepMovers">
             {currStep !== defaultStep && <button className="prev" onClick={handlePrevClick}>Prev</button>}
             <button className="next" onClick={handleNextClick}>Next</button>
            </div>
        </div>
        <Footer />
        </div>
    )
}


export default LeadRegistration;