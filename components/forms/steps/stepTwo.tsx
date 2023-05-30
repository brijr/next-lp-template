import React from "react";

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

const StepTwo: React.FC<StepTwoProps> = ({
  formData: { age, first_name, last_name, email_address, phone_home, zip_code },
  setFormData,
  setStep,
  onSubmit,
}) => {
  const trySubmitForm = () => {
    // Handle form submission
    onSubmit();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div id="page_2" className="page active">
      <div className="row form-group">
        <label htmlFor="age" className="col-xs-12 col-md-5 col-form-label">
          Age
        </label>
        <div className="col-xs-12 col-md-7" id="age">
          <select
            name="age"
            value={age}
            className="form-control pristine untouched"
            aria-required="true"
            aria-invalid="false"
          >
            <option disabled value="">
              Select Your Age
            </option>
            {[...Array(77)].map((_, i) => (
              <option key={i} value={String(i + 24)}>
                {i + 24}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="row form-group">
        <label
          htmlFor="first_name"
          className="col-xs-12 col-md-5 col-form-label"
        >
          First Name
        </label>
        <div className="col-xs-12 col-md-7" id="first_name">
          <input
            type="text"
            name="first_name"
            value={first_name}
            placeholder="First Name"
            className="form-control pristine untouched"
            aria-required="true"
            aria-invalid="false"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row form-group">
        <label
          htmlFor="last_name"
          className="col-xs-12 col-md-5 col-form-label"
        >
          Last Name
        </label>
        <div className="col-xs-12 col-md-7" id="last_name">
          <input
            type="text"
            name="last_name"
            value={last_name}
            placeholder="Last Name"
            className="form-control pristine untouched"
            aria-required="true"
            aria-invalid="false"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row form-group">
        <label
          htmlFor="email_address"
          className="col-xs-12 col-md-5 col-form-label"
        >
          Email Address
        </label>
        <div className="col-xs-12 col-md-7" id="email_address">
          <input
            type="email"
            name="email_address"
            value={email_address}
            placeholder="Email Address"
            autoCapitalize="off"
            autoCorrect="off"
            autoComplete="email"
            className="form-control pristine untouched"
            aria-required="true"
            aria-invalid="false"
            onChange={handleChange}
          />
          <small className="text-danger display_none">
            Email format is invalid
          </small>
          {/* Add any necessary elements */}
        </div>
      </div>
      <div className="row form-group">
        <label
          htmlFor="phone_home"
          className="col-xs-12 col-md-5 col-form-label"
        >
          Telephone Number
        </label>
        <div className="col-xs-12 col-md-7" id="phone_home">
          <input
            type="tel"
            pattern="[0-9]*"
            inputMode="numeric"
            name="phone_home"
            value={phone_home}
            placeholder="Telephone Number"
            autoCorrect="off"
            autoComplete="tel"
            className="form-control pristine untouched"
            aria-required="true"
            aria-invalid="false"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row form-group">
        <label htmlFor="zip_code" className="col-xs-12 col-md-5 col-form-label">
          Zip Code
        </label>
        <div className="col-xs-12 col-md-7" id="zip_code">
          <input
            type="text"
            pattern="[0-9]*"
            inputMode="numeric"
            name="zip_code"
            value={zip_code}
            placeholder="Zip Code"
            autoCorrect="off"
            autoComplete="postal-code"
            className="form-control pristine untouched"
            aria-required="true"
            aria-invalid="false"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="alert alert-danger display_none">
        The fields highlighted in red are required.
      </div>

      <div className="row form-group">
        <div className="col">
          <button
            className="btn btn-info btn-lg btn-block"
            onClick={trySubmitForm}
          >
            Finish
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <span className="go-back" onClick={() => setStep(1)}>
            Go back
          </span>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
