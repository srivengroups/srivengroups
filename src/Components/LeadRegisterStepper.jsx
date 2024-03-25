import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'personal details',
  'channel partner details',
  'select prospects',
  'prospect budget',
  'book site visit',
  'terms and conditions'
];

export default function LeadRegisterStepper({currStep}) {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={currStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel />
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}