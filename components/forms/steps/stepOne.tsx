import { useState } from "react";

interface StepOneProps {
  formData: {
    worked_5_of_10: "Yes" | "No" | "";
    attorney: "Yes" | "No" | "";
    earning_less_than_1000: "Yes" | "No" | "";
    current_dr_or_script: "Yes" | "No" | "";
    receiving_benefits: "Yes" | "No" | "";
    is_veteran: "Yes" | "No" | "";
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      worked_5_of_10: "Yes" | "No" | "";
      attorney: "Yes" | "No" | "";
      earning_less_than_1000: "Yes" | "No" | "";
      current_dr_or_script: "Yes" | "No" | "";
      receiving_benefits: "Yes" | "No" | "";
      is_veteran: "Yes" | "No" | "";
    }>
  >;
}

const StepOne: React.FC<StepOneProps> = ({ formData, setFormData }) => {
  const {
    worked_5_of_10,
    attorney,
    earning_less_than_1000,
    current_dr_or_script,
    receiving_benefits,
    is_veteran,
  } = formData;

  const handleOptionChange = (
    field: keyof StepOneProps["formData"],
    value: "Yes" | "No"
  ) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl font-bold mb-4">Step 1 of 2</h2>
      <div className="page active bg-white p-12 rounded-lg">
        <div className="row form-group flex justify-between gap-6 mb-10">
          <label
            htmlFor="worked_5_of_10"
            className="col-xs-12 col-md-8 text-xl"
          >
            Have you worked full-time for 5 out of the last 10 years?
          </label>
          <div className="col-xs-12 col-md-4">
            <div
              role="group"
              id="worked_5_of_10"
              aria-label="Have you worked full-time for 5 out of the last 10 years?"
              className="btn-group btn-group-toggle"
            >
              <label
                className={`btn btn-outline-primary py-4 px-6 outline-1 outline-blue-500 outline hover:bg-blue-300 transition-all rounded-l-lg ${
                  worked_5_of_10 === "Yes"
                    ? "bg-green-500 z-50 outline-4 outline-green-400 text-white hover:bg-green-500 z-50"
                    : "bg-white text-blue-500"
                }`}
                onClick={() => handleOptionChange("worked_5_of_10", "Yes")}
              >
                Yes
              </label>
              <label
                className={`btn btn-outline-primary py-4 px-6 outline-1 outline-blue-500 outline hover:bg-blue-300 transition-all rounded-r-lg ${
                  worked_5_of_10 === "No"
                    ? "bg-green-500 z-50 outline-4 outline-green-400 text-white hover:bg-green-500 z-50"
                    : "bg-white text-blue-500"
                }`}
                onClick={() => handleOptionChange("worked_5_of_10", "No")}
              >
                No
              </label>
            </div>
          </div>
        </div>
        <div className="row form-group flex justify-between gap-6 my-10">
          <label htmlFor="attorney" className="col-xs-12 col-md-8 text-xl">
            Is an attorney helping you with your case?
          </label>
          <div className="col-xs-12 col-md-4">
            <div
              role="group"
              id="attorney"
              aria-label="Is an attorney helping you with your case?"
              className="btn-group btn-group-toggle"
            >
              <label
                className={`btn btn-outline-primary py-4 px-6 outline-1 outline-blue-500 outline hover:bg-blue-300 transition-all rounded-l-lg ${
                  attorney === "Yes"
                    ? "bg-green-500 z-50 outline-4 outline-green-400 text-white hover:bg-green-500 z-50"
                    : "bg-white text-blue-500"
                }`}
                onClick={() => handleOptionChange("attorney", "Yes")}
              >
                Yes
              </label>
              <label
                className={`btn btn-outline-primary py-4 px-6 outline-1 outline-blue-500 outline hover:bg-blue-300 transition-all rounded-r-lg ${
                  attorney === "No"
                    ? "bg-green-500 z-50 outline-4 outline-green-400 text-white hover:bg-green-500 z-50"
                    : "bg-white text-blue-500"
                }`}
                onClick={() => handleOptionChange("attorney", "No")}
              >
                No
              </label>
            </div>
          </div>
        </div>
        <div className="row form-group flex justify-between gap-6 my-10">
          <label
            htmlFor="earning_less_than_1000"
            className="col-xs-12 col-md-8 text-xl"
          >
            Do you currently earn less than $1,000 a month?
          </label>
          <div className="col-xs-12 col-md-4">
            <div
              role="group"
              id="earning_less_than_1000"
              aria-label="Do you currently earn less than $1,000 a month?"
              className="btn-group btn-group-toggle"
            >
              <label
                className={`btn btn-outline-primary py-4 px-6 outline-1 outline-blue-500 outline hover:bg-blue-300 transition-all rounded-l-lg ${
                  earning_less_than_1000 === "Yes"
                    ? "bg-green-500 z-50 outline-4 outline-green-400 text-white hover:bg-green-500 z-50"
                    : "bg-white text-blue-500"
                }`}
                onClick={() =>
                  handleOptionChange("earning_less_than_1000", "Yes")
                }
              >
                Yes
              </label>
              <label
                className={`btn btn-outline-primary py-4 px-6 outline-1 outline-blue-500 outline hover:bg-blue-300 transition-all rounded-r-lg ${
                  earning_less_than_1000 === "No"
                    ? "bg-green-500 z-50 outline-4 outline-green-400 text-white hover:bg-green-500 z-50"
                    : "bg-white text-blue-500"
                }`}
                onClick={() =>
                  handleOptionChange("earning_less_than_1000", "No")
                }
              >
                No
              </label>
            </div>
          </div>
        </div>
        <div className="row form-group flex justify-between gap-6 my-10">
          <label
            htmlFor="current_dr_or_script"
            className="col-xs-12 col-md-8 text-xl"
          >
            Are you currently seeing a doctor or taking any prescription
            medication?
          </label>
          <div className="col-xs-12 col-md-4">
            <div
              role="group"
              id="current_dr_or_script"
              aria-label="Are you currently seeing a doctor or taking any prescription medication?"
              className="btn-group btn-group-toggle"
            >
              <label
                className={`btn btn-outline-primary py-4 px-6 outline-1 outline-blue-500 outline hover:bg-blue-300 transition-all rounded-l-lg ${
                  current_dr_or_script === "Yes"
                    ? "bg-green-500 z-50 outline-4 outline-green-400 text-white hover:bg-green-500 z-50"
                    : "bg-white text-blue-500"
                }`}
                onClick={() =>
                  handleOptionChange("current_dr_or_script", "Yes")
                }
              >
                Yes
              </label>
              <label
                className={`btn btn-outline-primary py-4 px-6 outline-1 outline-blue-500 outline hover:bg-blue-300 transition-all rounded-r-lg ${
                  current_dr_or_script === "No"
                    ? "bg-green-500 z-50 outline-4 outline-green-400 text-white hover:bg-green-500 z-50"
                    : "bg-white text-blue-500"
                }`}
                onClick={() => handleOptionChange("current_dr_or_script", "No")}
              >
                No
              </label>
            </div>
          </div>
        </div>
        <div className="row form-group flex justify-between gap-6 my-10">
          <label
            htmlFor="receiving_benefits"
            className="col-xs-12 col-md-8 text-xl"
          >
            Are you already receiving any Social Security Disability benefits?
          </label>
          <div className="col-xs-12 col-md-4">
            <div
              role="group"
              id="receiving_benefits"
              aria-label="Are you already receiving any Social Security Disability benefits?"
              className="btn-group btn-group-toggle"
            >
              <label
                className={`btn btn-outline-primary py-4 px-6 outline-1 outline-blue-500 outline hover:bg-blue-300 transition-all rounded-l-lg ${
                  receiving_benefits === "Yes"
                    ? "bg-green-500 z-50 outline-4 outline-green-400 text-white hover:bg-green-500 z-50"
                    : "bg-white text-blue-500"
                }`}
                onClick={() => handleOptionChange("receiving_benefits", "Yes")}
              >
                Yes
              </label>
              <label
                className={`btn btn-outline-primary py-4 px-6 outline-1 outline-blue-500 outline hover:bg-blue-300 transition-all rounded-r-lg ${
                  receiving_benefits === "No"
                    ? "bg-green-500 z-50 outline-4 outline-green-400 text-white hover:bg-green-500 z-50"
                    : "bg-white text-blue-500"
                }`}
                onClick={() => handleOptionChange("receiving_benefits", "No")}
              >
                No
              </label>
            </div>
          </div>
        </div>
        <div className="row form-group flex justify-between gap-6 my-10">
          <label htmlFor="is_veteran" className="col-xs-12 col-md-8 text-xl">
            Are you a Veteran?
          </label>
          <div className="col-xs-12 col-md-4">
            <div
              role="group"
              id="is_veteran"
              aria-label="Are you or a loved one a Veteran?"
              className="btn-group btn-group-toggle"
            >
              <label
                className={`btn btn-outline-primary py-4 px-6 outline-1 outline-blue-500 outline hover:bg-blue-300 transition-all rounded-l-lg ${
                  is_veteran === "Yes"
                    ? "bg-green-500 z-50 outline-4 outline-green-400 text-white hover:bg-green-500 z-50"
                    : "bg-white text-blue-500"
                }`}
                onClick={() => handleOptionChange("is_veteran", "Yes")}
              >
                Yes
              </label>
              <label
                className={`btn btn-outline-primary py-4 px-6 outline-1 outline-blue-500 outline hover:bg-blue-300 transition-all rounded-r-lg ${
                  is_veteran === "No"
                    ? "bg-green-500 z-50 outline-4 outline-green-400 text-white hover:bg-green-500 z-50"
                    : "bg-white text-blue-500"
                }`}
                onClick={() => handleOptionChange("is_veteran", "No")}
              >
                No
              </label>
            </div>
          </div>
        </div>
        <div className="alert alert-danger display_none">
          The fields highlighted in red are required.
        </div>
      </div>
    </div>
  );
};

export default StepOne;
