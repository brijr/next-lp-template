"use client";

import { useState } from "react";
import StepOne from "@/components/forms/steps/stepOne";

interface Step1Props {
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

const Step1: React.FC<Step1Props> = ({ formData, setFormData }) => {
  return <StepOne formData={formData} setFormData={setFormData} />;
};

const Step2 = () => <div className="text-center">Step 2</div>;
const Step3 = () => <div className="text-center">Step 3</div>;

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Step1Props["formData"]>({
    worked_5_of_10: "",
    attorney: "",
    earning_less_than_1000: "",
    current_dr_or_script: "",
    receiving_benefits: "",
    is_veteran: "",
  });

  const handleNextStep = () => setStep(step + 1);
  const handlePreviousStep = () => setStep(step - 1);

  const handleFormSubmit = () => {
    // Submit form data to the server
    console.log(formData);
  };

  return (
    <div className="w-full">
      {step === 1 && <Step1 formData={formData} setFormData={setFormData} />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}

      <div className="flex justify-center mt-4">
        <button
          className="mr-2 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePreviousStep}
          disabled={step === 1}
        >
          Previous
        </button>
        {step < 3 && (
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleNextStep}
          >
            Next
          </button>
        )}
        {step === 3 && (
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
