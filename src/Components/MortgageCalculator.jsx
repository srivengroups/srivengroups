import React, { useState } from 'react';
import Slider from '@mui/material/Slider';

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(200000); // Default value: ₹200,000
  const [downPaymentPercentage, setDownPaymentPercentage] = useState(20); // Default value: 20%
  const [interestRate, setInterestRate] = useState(4); // Default value: 4%
  const [loanTerm, setLoanTerm] = useState(10); // Default value: 10 years

  const handleHomePriceChange = (event, newValue) => {
    setHomePrice(newValue);
  };

  const handleDownPaymentPercentageChange = (event, newValue) => {
    setDownPaymentPercentage(newValue);
  };

  const handleInterestRateChange = (event, newValue) => {
    setInterestRate(newValue);
  };

  const handleLoanTermChange = (event, newValue) => {
    setLoanTerm(newValue);
  };

  const calculateMonthlyPayment = () => {
    const loanAmount = homePrice * (1 - downPaymentPercentage / 100);
    const monthlyInterestRate = interestRate / 1200; // Monthly interest rate (convert from percentage to decimal and divide by 12)
    const numberOfPayments = loanTerm * 12; // Total number of payments

    // Calculate monthly payment using the formula for an amortizing loan
    const monthlyPayment =
      (loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    return monthlyPayment.toFixed(2); // Return monthly payment rounded to 2 decimal places
  };

  // Calculate monthly payment
  const monthlyPayment = calculateMonthlyPayment();

  return (
    <>
    <h5>Mortgage Calculator</h5>
    <div className='mortgage'>
      <div className='mortgageResults'>
        <div className='circle'>
           <p>₹{monthlyPayment}</p>
           <h6>per Month</h6>  
        </div>

        <div className='results'>
           <p>Monthly Payment</p>
           <p>₹{monthlyPayment} per month</p>
           <p>
              {loanTerm} Years Fixed, {interestRate}% Interest
           </p>
           <p>Principle and Interest ₹{monthlyPayment}</p>
        </div>

      </div>
      <div className='mortgageFields'>
      <div className='mortgageField'>
        <h6>Home Price</h6>
        <input
          type="number"
          value={homePrice}
          onChange={(e) => setHomePrice(parseFloat(e.target.value))}
        />
        <Slider
          value={homePrice}
          onChange={handleHomePriceChange}
          min={100000}
          max={1000000}
          step={1000}
          valueLabelDisplay="auto"
        />
      </div>
      <div className='mortgageField'>
        <h6>Down Payment Percentage</h6>
        <input
          type="number"
          value={downPaymentPercentage}
          onChange={(e) => setDownPaymentPercentage(parseFloat(e.target.value))}
        />
        <Slider
          value={downPaymentPercentage}
          onChange={handleDownPaymentPercentageChange}
          min={0}
          max={100}
          valueLabelDisplay="auto"
        />
      </div>
      <div className='mortgageField'>
        <h6>Interest Rate</h6>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(parseFloat(e.target.value))}
        />
        <Slider
          value={interestRate}
          onChange={handleInterestRateChange}
          min={0}
          max={10}
          step={0.1}
          valueLabelDisplay="auto"
        />
      </div>
      <div className='mortgageField'>
        <h6>Loan Term</h6>
        <input
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(parseFloat(e.target.value))}
        />
        <Slider
          value={loanTerm}
          onChange={handleLoanTermChange}
          min={5}
          max={30}
          valueLabelDisplay="auto"
        />
      </div>
      </div>
    </div>
    </>
  );
};

export default MortgageCalculator;
