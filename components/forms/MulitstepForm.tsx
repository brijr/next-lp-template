The code has been refactored to use a custom hook to handle form data and submission.

import React, { useState } from "react";
import StepOne from "@/components/forms/steps/stepOne";
import StepTwo from "@/components/forms/steps/stepTwo";

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

  const handleFormSubmit = () => {
    console.log("Step 1 data:", formDataStep1);
    console.log("Step 2 data:", formDataStep2);
  };

  const setValue = (field: string, value: any) => {
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

  const handlePreviousStep = () => setStep(step - 1);

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


