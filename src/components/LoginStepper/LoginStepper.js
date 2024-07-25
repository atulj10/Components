import React, { useEffect, useState } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Button } from '@mui/material';
import './LoginStepper.module.css'

const steps = [
    'Select master blaster campaign settings',
    'Create an ad group',
    'Create an ad',
];

export default function LoginStepper() {
    const [activeStep, setActiveStep] = useState(0);
    const [rocket,setRocket]=useState(true);

    const handleNext = () => {
        if (activeStep < steps.length - 1) {
            setActiveStep((prev) => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (activeStep > 0) {
            setActiveStep((prev) => prev - 1);
            setRocket(false)
        }
    };

    const content = [
        "Hello first world",
        "Hello Second world",
        "Hello Third World"
    ];

    return (
        <div className='w-full px-4 py-2 my-10'>
            <h1 className='text-3xl'>Hello</h1>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                    <Step key={index}>
                        {(activeStep===index && activeStep!==0 )&& <div className='rocket'>🚀</div>}
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <div>
                <h1>Content</h1>
                {content.map((item, index) => (
                    activeStep === index && (
                        <h1 key={index}>{item}</h1>
                    )
                ))}
            </div>
            <div className='flex justify-between w-full'>
                <div>
                    {activeStep < steps.length - 1 && <Button onClick={handleNext} variant={"contained"}>Next</Button>}
                </div>
                <div>
                    {activeStep > 0 && <Button onClick={handlePrevious} variant={"contained"}>Previous</Button>}
                </div>
            </div>
        </div>
    );
}
