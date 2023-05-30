"use client";

// This component is a multi-step form that is used to collect user data in two steps.
// It uses the StepOne and StepTwo components to render the form fields for each step.
// The useMultiStepForm hook is used to manage the form data and handle form submission.

import React, { useState } from "react";
import StepOne from "@/components/forms/steps/stepOne";
import StepTwo from "@/components/forms/steps/stepTwo";

// Define the types for the form data for each step
interface StepOneProps {
  formData: {
    worked_5_of_10: "" | "Yes" | "No";
    attorney: "" | "Yes" | "No";
    earning_less_than_1000: "" | "Yes" | "No";
    current_dr_or_script: "" | "Yes" | "No";
    receiving_benefits: "" | "Yes" | "No";
    is_veteran: "" | "Yes" | "No";
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      worked_5_of_10: "" | "Yes" | "No";
      attorney: "" | "Yes" | "No";
      earning_less_than_1000: "" | "Yes" | "No";
      current_dr_or_script: "" | "Yes" | "No";
      receiving_benefits: "" | "Yes" | "No";
      is_veteran: "" | "Yes" | "No";
    }>
  >;
}

interface StepTwoProps {
  formData: {
    age: string;
    first_name: string;
    last_name: string;
    email_address: string;
    phone_home: string;
    zip_code: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      age: string;
      first_name: string;
      last_name: string;
      email_address: string;
      phone_home: string;
      zip_code: string;
    }>
  >;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  onSubmit: () => void;
}

// Define the useMultiStepForm hook to manage the form data and handle form submission
const useMultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formDataStep1, setFormDataStep1] = useState<StepOneProps["formData"]>({
    worked_5_of_10: "",
    attorney: "",
    earning_less_than_1000: "",
    current_dr_or_script: "",
    receiving_benefits: "",
    is_veteran: "",
  });
  const [formDataStep2, setFormDataStep2] = useState<StepTwoProps["formData"]>({
    age: "",
    first_name: "",
    last_name: "",
    email_address: "",
    phone_home: "",
    zip_code: "",
  });

  // Define the handleFormSubmit function to log the form data to the console
  const handleFormSubmit = () => {
    console.log("Step 1 data:", formDataStep1);
    console.log("Step 2 data:", formDataStep2);
  };

  // Define the setValue function to update the form data based on the current step
  const setValue: React.Dispatch<
    React.SetStateAction<{
      age: string;
      first_name: string;
      last_name: string;
      email_address: string;
      phone_home: string;
      zip_code: string;
    }>
  > = (field: keyof typeof formDataStep2, value: string) => {
    if (step === 1) {
      setFormDataStep1((prevFormData) => ({
        ...prevFormData,
        [field]: value,
      }));
    } else {
      setFormDataStep2((prevFormData) => ({
        ...prevFormData,
        [field]: value,
      }));
    }
  };

  // Define the handleNextStep function to validate the form data and move to the next step
  const handleNextStep = () => {
    if (
      formDataStep1.worked_5_of_10 === "" ||
      formDataStep1.attorney === "" ||
      formDataStep1.earning_less_than_1000 === "" ||
      formDataStep1.current_dr_or_script === "" ||
      formDataStep1.receiving_benefits === "" ||
      formDataStep1.is_veteran === ""
    ) {
      alert("Please fill out all the fields.");
    } else {
      setStep(step + 1);
    }
  };

  // Define the handlePreviousStep function to move back to the previous step
  const handlePreviousStep = () => setStep(step - 1);

  // Return the necessary values and functions for the MultiStepForm component
  return {
    step,
    formDataStep1,
    formDataStep2,
    setValue,
    handleFormSubmit,
    handleNextStep,
    handlePreviousStep,
  };
};

// Define the MultiStepForm component to render the form and handle form submission
const MultiStepForm = () => {
  const {
    step,
    formDataStep1,
    formDataStep2,
    setValue,
    handleFormSubmit,
    handleNextStep,
    handlePreviousStep,
  } = useMultiStepForm();

  // Render the form fields for each step based on the current step value
  return (
    <div className="w-full">
      {step === 1 && (
        <StepOne formData={formDataStep1} setFormData={setValue} />
      )}
      {step === 2 && (
        <StepTwo
          formData={formDataStep2}
          setFormData={setValue}
          setStep={setStep}
          onSubmit={handleFormSubmit}
        />
      )}

      {/* Render the buttons for each step based on the current step value */}
      <div className="flex justify-center mt-4">
        {step === 1 && (
          <button
            className="bg-orange-500 text-xl font-semibold hover:bg-orange-700 w-3/4 text-white py-6 px-8 rounded"
            onClick={handleNextStep}
          >
            Continue
          </button>
        )}
        {step === 2 && (
          <div>
            <button
              className="mr-2 bg-orange-100 text-xl hover:bg-orange-300 text-orange-500 py-6 px-8 rounded"
              onClick={handlePreviousStep}
            >
              Previous
            </button>
            <button
              className="bg-orange-500 w-auto text-xl font-semibold hover:bg-orange-700 text-white py-6 px-8 rounded"
              onClick={handleFormSubmit}
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
