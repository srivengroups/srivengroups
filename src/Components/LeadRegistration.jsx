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

const PersonalDetails = ({handleNextClick, handlePrevClick}) => {
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
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
      }));
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
      <div className="stepMovers">
             <button className="next" onClick={()=>handleNextClick({personalDetails: formData})}>Next</button>
      </div>
      </div>
    );
  };


  const OffCanvas = ({partnerDetails, setPartnerDetails, leadRegistration}) => {
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
    <PartnerRegistration channelPartner={true} leadRegistration={leadRegistration} partnerDetails={partnerDetails} setPartnerDetails={setPartnerDetails}  noHeaderFooter={true} />
  </div>
</div>
        </div>
    )
  }




function ChannelPartnerDetails({handleNextClick, handlePrevClick}) {
  const [partnerDetails, setPartnerDetails] = React.useState('');
  const [availablePartners, setAvailablePartners] = React.useState('');

  const handleChange = (event) => {
    setAvailablePartners(event.target.value);
    if(event.target.value) {
      setPartnerDetails(prevPartnerDetails => event.target.value);
    }
  };

  return (
    <div className="lgChannelPartnerDetails">
      <h3>Please Select Channel Partner</h3>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={availablePartners}
          onChange={handleChange}
          autoWidth
          label="Channel Partner"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>
      <OffCanvas partnerDetails={partnerDetails} leadRegistration={true} setPartnerDetails={setPartnerDetails} />
      <div className="stepMovers">
             <button className="prev" onClick={handlePrevClick}>Prev</button>
             <button className="next" onClick={()=>handleNextClick({channelPartnerDetails: partnerDetails})}>Next</button>
      </div>
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

function SelectProspects({personName, setPersonName}) {

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


const ConfigurationProspect = ({handleNextClick, handlePrevClick}) => {
  const [personName, setPersonName] = React.useState([]);
    return(
         <div className="configurationProspect">
            <h3>
               What configuration Prospect is Interested In?
            </h3>
            <SelectProspects personName={personName} setPersonName={setPersonName} />
            <div className="stepMovers">
             <button className="prev" onClick={handlePrevClick}>Prev</button>
             <button className="next" onClick={()=>handleNextClick({configurationProspect: personName})}>Next</button>
           </div>
         </div>
    );
}


function RadioButtonsGroup({range, setRange}) {

  const handleChange = (event) => {
    setRange(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Range</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        value={range}
        onChange={handleChange}
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


const SelectProspectBudget = ({handleNextClick, handlePrevClick}) => {

  const [range, setRange] = useState("1.5Cr - 2Cr");
    return (
        <div className="selectProspectBudget">
          <h3>What is the budget of your prospect?</h3>
          <RadioButtonsGroup range={range} setRange={setRange} />
          <div className="stepMovers">
             <button className="prev" onClick={handlePrevClick}>Prev</button>
             <button className="next" onClick={()=>handleNextClick({selectProspectBudget: range})}>Next</button>
      </div>
        </div>
    )
}

const Contactable = ({handleNextClick, handlePrevClick}) => {

  const [contactable, setContactable] = useState('Yes');

  const handleChange = (event) => {
    setContactable(event.target.value);
  };

    return(
        <div className="contactable">
            <h3>Do you want us to call and arrange a Site Visit?</h3>
            <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        value={contactable}
        onChange={handleChange}
        name="radio-buttons-group"
      >
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
    <div className="stepMovers">
             <button className="prev" onClick={handlePrevClick}>Prev</button>
             <button className="next" onClick={()=>handleNextClick({contactable: contactable})}>Next</button>
      </div>
        </div>
    )
}


const TermsAndConditions = ({handleNextClick, handlePrevClick}) => {

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

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
               <FormControlLabel required
                control={<Checkbox checked={isChecked} onChange={handleChange} />} label={text} />
            </FormGroup>
            <div className="stepMovers">
             <button className="prev" onClick={handlePrevClick}>Prev</button>
             <button className="next" onClick={()=>handleNextClick({termsAndConditions: isChecked})}>Submit</button>
      </div>
        </div>
    )
}


const LeadRegistration = () => {

    const defaultStep = 1;

    const [currStep, setCurrStep] = useState(defaultStep);
    // const [PropertyValue, setPropertyValue] = useState('');
    const [leadRegistration, setLeadRegistration] = useState({
      personalDetails: "",
      channelPartnerDetails: "",
      configurationProspect: "",
      selectProspectBudget: "",
      contactable: "Yes",
      termsAndConditions: "true",
    });


    const handleNextClick = (PropertyValue) => {
         console.log(PropertyValue);
         setLeadRegistration(prevLeadRegistration => ({...prevLeadRegistration, ...PropertyValue}));
         console.log(leadRegistration);
          switch (currStep) {
            case 6:
              if(!PropertyValue.termsAndConditions){
                alert("Please accept the terms and conditions to complete the registration!");
              } else {
                submitRegistration();
              }
              break;
            default:
              if(PropertyValue){
                setCurrStep(currStep + 1);
              } else {
                alert('Please fill in all required fields.');
              }
              break;
          }
          console.log(leadRegistration);
      
  }

    const submitRegistration = () => {
      const userData = {
        firstName: leadRegistration.personalDetails.firstName,
        lastName: leadRegistration.personalDetails.lastName,
        phoneNumber: leadRegistration.personalDetails.phoneNumber,
        emailAddress: leadRegistration.personalDetails.emailAddress,
        channelPartnerDetails: leadRegistration.channelPartnerDetails,
        configurationProspect: leadRegistration.configurationProspect,
        selectProspectBudget: leadRegistration.selectProspectBudget,
        contactable: leadRegistration.contactable,
        termsAndConditions: leadRegistration.termsAndConditions,
      };
      console.log(userData);
      
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(userData).toString(),
      })
        .then(() => alert("Thank you for registering with us!"))
        .catch((error) => alert(error));
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
            
            {currStep === 1 && <PersonalDetails handleNextClick={handleNextClick} handlePrevClick={handlePrevClick} />}
            {currStep === 2 && <ChannelPartnerDetails handleNextClick={handleNextClick} handlePrevClick={handlePrevClick} />}
            {currStep === 3 && <ConfigurationProspect handleNextClick={handleNextClick} handlePrevClick={handlePrevClick} />}
            {currStep === 4 && <SelectProspectBudget handleNextClick={handleNextClick} handlePrevClick={handlePrevClick} /> }
            {currStep === 5 && <Contactable handleNextClick={handleNextClick} handlePrevClick={handlePrevClick} /> }
            {currStep === 6 && <TermsAndConditions handleNextClick={handleNextClick} handlePrevClick={handlePrevClick} /> }
        </div>
        <Footer />
        </div>
    )
}


export default LeadRegistration;