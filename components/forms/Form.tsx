'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Section from '@/components/Section';

export default function Form() {
	const router = useRouter();
	const [formData, setFormData] = useState({});
	const [currentFormStep, setCurrentFormStep] = useState(1);
	const [worked_5_of_10, setWorked_5_of_10] = useState('');
	const [attorney, setAttorney] = useState('');
	const [earning_less_than_1000, setEarning_less_than_1000] = useState('');
	const [current_dr_or_script, setCurrent_dr_or_script] = useState('');
	const [receiving_benefits, setReceiving_benefits] = useState('');
	const [is_veteran, setIs_veteran] = useState('');
	const [age, setAge] = useState('');
	const [first_name, setFirst_name] = useState('');
	const [last_name, setLast_name] = useState('');
	const [email_address, setEmail_address] = useState('');
	const [phone_home, setPhone_home] = useState('');
	const [zip_code, setZip_code] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleOptionChange = (name: string, value: string) => {
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setFormData({ ...formData });
		localStorage.setItem('formData', JSON.stringify(formData));
		router.push('/thank-you');
	};

	const handleNextStep = () => {
		setCurrentFormStep((prevStep) => prevStep + 1);
	};

	const handlePreviousStep = () => {
		setCurrentFormStep((prevStep) => prevStep - 1);
	};

	const stepOne = () => {
		const handleOptionChange = (field: string, value: string) => {
			switch (field) {
				case 'worked_5_of_10':
					setWorked_5_of_10(value);
					break;
				case 'attorney':
					setAttorney(value);
					break;
				case 'earning_less_than_1000':
					setEarning_less_than_1000(value);
					break;
				case 'current_dr_or_script':
					setCurrent_dr_or_script(value);
					break;
				case 'receiving_benefits':
					setReceiving_benefits(value);
					break;
				case 'is_veteran':
					setIs_veteran(value);
					break;
				default:
					break;
			}
			console.log(field, value);
		};

		return (
			<div className="flex flex-col items-center w-full">
				<h2 className="text-2xl font-bold mb-4">Step 1 of 2</h2>
				<div className="page active bg-white md:p-12 p-4 rounded-lg w-full">
					<div className="row form-group md:flex items-center justify-between gap-6 mb-10">
						<label htmlFor="worked_5_of_10" className="col-xs-12 col-md-8 text-xl h-full">
							Have you worked full-time for 5 out of the last 10 years?
						</label>
						<div className="col-xs-12 col-md-4 md:mt-0 mt-6">
							<div
								role="group"
								id="worked_5_of_10"
								aria-label="Have you worked full-time for 5 out of the last 10 years?"
								className="btn-group btn-group-toggle md:mt-0 mt-6"
							>
								<label
									className={`btn btn-outline-primary py-4 px-6 outline-1 outline-blue-500 outline hover:bg-blue-300 transition-all rounded-l-lg ${
										worked_5_of_10 === 'Yes'
											? 'bg-green-500 z-50 outline-4 outline-green-400 text-white hover:bg-green-500'
											: 'bg-white text-blue-500'
									}`}
									onClick={() => handleOptionChange('worked_5_of_10', 'Yes')}
								>
									Yes
								</label>
								<label
									className={`btn btn-outline-primary py-4 px-6 outline-1 outline-blue-500 outline hover:bg-blue-300 transition-all rounded-r-lg ${
										worked_5_of_10 === 'No'
											? 'bg-green-500 z-50 outline-4 outline-green-400 text-white hover:bg-green-500'
											: 'bg-white text-blue-500'
									}`}
									onClick={() => handleOptionChange('worked_5_of_10', 'No')}
								>
									No
								</label>
							</div>
						</div>
					</div>
					<div className="row form-group md:flex items-center justify-between gap-6 my-10">
						<label htmlFor="attorney" className="col-xs-12 col-md-8 text-xl h-full">
							Is an attorney helping you with your case?
						</label>
						<div className="col-xs-12 col-md-4 md:mt-0 mt-6">
							<div
								role="group"
								id="attorney"
								aria-label="Is an attorney helping you with your case?"
								className="btn-group btn-group-toggle md"
							>
								<label
									className={`btn btn-outline-primary py-4 px-6 outline-1 outline-blue-500 outline hover:bg-blue-300 transition-all rounded-l-lg ${
										attorney === 'Yes'
											? 'bg-green-500 z-50 outline-4 outline-green-400 text-white hover:bg-green-500'
											: 'bg-white text-blue-500'
									}`}
									onClick={() => handleOptionChange('attorney', 'Yes')}
								>
									Yes
								</label>
								<label
									className={`btn btn-outline-primary py-4 px-6 outline-1 outline-blue-500 outline hover:bg-blue-300 transition-all rounded-r-lg ${
										attorney === 'No'
											? 'bg-green-500 z-50 outline-4 outline-green-400 text-white hover:bg-green-500'
											: 'bg-white text-blue-500'
									}`}
									onClick={() => handleOptionChange('attorney', 'No')}
								>
									No
								</label>
							</div>
						</div>
					</div>
					<div className="row form-group md:flex items-center justify-between gap-6 my-10">
						<label htmlFor="earning_less_than_1000" className="col-xs-12 col-md-8 text-xl h-full">
							Do you currently earn less than $1,000 a month?
						</label>
						<div className="col-xs-12 col-md-4 md:mt-0 mt-6">
							<div
								role="group"
								id="earning_less_than_1000"
								aria-label="Do you currently earn less than $1,000 a month?"
								className="btn-group btn-group-toggle md"
							>
								<label
									className={`btn btn-outline-primary py-4 px-6 outline-1 outline-blue-500 outline hover:bg-blue-300 transition-all rounded-l-lg ${
										earning_less_than_1000 === 'Yes'
											? 'bg-green-500 z-50 outline-4 outline-green-400 text-white hover:bg-green-500'
											: 'bg-white text-blue-500'
									}`}
									onClick={() => handleOptionChange('earning_less_than_1000', 'Yes')}
								>
									Yes
								</label>
								<label
									className={`btn btn-outline-primary py-4 px-6 outline-1 outline-blue-500 outline hover:bg-blue-300 transition-all rounded-r-lg ${
										earning_less_than_1000 === 'No'
											? 'bg-green-500 z-50 outline-4 outline-green-400 text-white hover:bg-green-500'
											: 'bg-white text-blue-500'
									}`}
									onClick={() => handleOptionChange('earning_less_than_1000', 'No')}
								>
									No
								</label>
							</div>
						</div>
					</div>
					<div className="row form-group md:flex items-center justify-between gap-6 my-10">
						<label htmlFor="current_dr_or_script" className="col-xs-12 col-md-8 text-xl h-full">
							Are you currently seeing a doctor or taking any prescription medication?
						</label>
						<div className="col-xs-12 col-md-4 md:mt-0 mt-6">
							<div
								role="group"
								id="current_dr_or_script"
								aria-label="Are you currently seeing a doctor or taking any prescription medication?"
								className="btn-group btn-group-toggle md"
							>
								<label
									className={`btn btn-outline-primary py-4 px-6 outline-1 outline-blue-500 outline hover:bg-blue-300 transition-all rounded-l-lg ${
										current_dr_or_script === 'Yes'
											? 'bg-green-500 z-50 outline-4 outline-green-400 text-white hover:bg-green-500'
											: 'bg-white text-blue-500'
									}`}
									onClick={() => handleOptionChange('current_dr_or_script', 'Yes')}
								>
									Yes
								</label>
								<label
									className={`btn btn-outline-primary py-4 px-6 outline-1 outline-blue-500 outline hover:bg-blue-300 transition-all rounded-r-lg ${
										current_dr_or_script === 'No'
											? 'bg-green-500 z-50 outline-4 outline-green-400 text-white hover:bg-green-500'
											: 'bg-white text-blue-500'
									}`}
									onClick={() => handleOptionChange('current_dr_or_script', 'No')}
								>
									No
								</label>
							</div>
						</div>
					</div>
					<div className="row form-group md:flex items-center justify-between gap-6 my-10">
						<label htmlFor="receiving_benefits" className="col-xs-12 col-md-8 text-xl h-full">
							Are you already receiving any Social Security Disability benefits?
						</label>
						<div className="col-xs-12 col-md-4 md:mt-0 mt-6">
							<div
								role="group"
								id="receiving_benefits"
								aria-label="Are you already receiving any Social Security Disability benefits?"
								className="btn-group btn-group-toggle md"
							>
								<label
									className={`btn btn-outline-primary py-4 px-6 outline-1 outline-blue-500 outline hover:bg-blue-300 transition-all rounded-l-lg ${
										receiving_benefits === 'Yes'
											? 'bg-green-500 z-50 outline-4 outline-green-400 text-white hover:bg-green-500'
											: 'bg-white text-blue-500'
									}`}
									onClick={() => handleOptionChange('receiving_benefits', 'Yes')}
								>
									Yes
								</label>
								<label
									className={`btn btn-outline-primary py-4 px-6 outline-1 outline-blue-500 outline hover:bg-blue-300 transition-all rounded-r-lg ${
										receiving_benefits === 'No'
											? 'bg-green-500 z-50 outline-4 outline-green-400 text-white hover:bg-green-500'
											: 'bg-white text-blue-500'
									}`}
									onClick={() => handleOptionChange('receiving_benefits', 'No')}
								>
									No
								</label>
							</div>
						</div>
					</div>
					<div className="row form-group md:flex items-center justify-between gap-6 md:mt-10">
						<label htmlFor="is_veteran" className="col-xs-12 col-md-8 text-xl h-full">
							Are you a Veteran?
						</label>
						<div className="col-xs-12 col-md-4 md:mt-0 my-6">
							<div
								role="group"
								id="is_veteran"
								aria-label="Are you or a loved one a Veteran?"
								className="btn-group btn-group-toggle"
							>
								<label
									className={`btn btn-outline-primary py-4 px-6 outline-1 outline-blue-500 outline hover:bg-blue-300 transition-all rounded-l-lg ${
										is_veteran === 'Yes'
											? 'bg-green-500 z-50 outline-4 outline-green-400 text-white hover:bg-green-500'
											: 'bg-white text-blue-500'
									}`}
									onClick={() => handleOptionChange('is_veteran', 'Yes')}
								>
									Yes
								</label>
								<label
									className={`btn btn-outline-primary py-4 px-6 outline-1 outline-blue-500 outline hover:bg-blue-300 transition-all rounded-r-lg ${
										is_veteran === 'No'
											? 'bg-green-500 z-50 outline-4 outline-green-400 text-white hover:bg-green-500'
											: 'bg-white text-blue-500'
									}`}
									onClick={() => handleOptionChange('is_veteran', 'No')}
								>
									No
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	};

	const [formDataTwo, setFormDataTwo] = useState({
		age: '',
		first_name: '',
		last_name: '',
		email_address: '',
		zip_code: '',
		phone_home: ''
	});

	const handleChangeTwo = (e) => {
		setFormDataTwo({ ...formDataTwo, [e.target.name]: e.target.value });
	};

	const stepTwo = () => {
		const handleChangeTwo = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
			const { name, value } = e.target;
			setFormDataTwo((prevData) => ({ ...prevData, [name]: value }));
		};

		return (
			<div className="w-full">
				<h2 className="text-2xl font-bold mb-4 text-center w-full">Step 2 of 2</h2>
				<div id="page_2" className="page-two active bg-white md:p-12 p-4 rounded-lg w-full">
					<div className="row form-group flex-col md:flex-row flex gap-4 w-full justify-start md:justify-between items-center py-6 text-xl">
						<label htmlFor="age" className="col-xs-12 col-md-5 col-form-label w-full">
							Age
						</label>
						<div className="col-xs-12 col-md-7 w-full" id="age">
							<select
								name="age"
								value={formDataTwo.age}
								className="form-control pristine untouched bg-slate-200 p-4 rounded-lg w-full"
								aria-required="true"
								aria-invalid="false"
								onChange={handleChangeTwo}
							>
								<option disabled value="">
									Select Your Age
								</option>
								<option value="66+">66+</option>
								{[...Array(42)].map((_, i) => (
									<option key={i} value={String(66 - i)}>
										{66 - i}
									</option>
								))}
								<option value="Under 25">Under 25</option>
							</select>
						</div>
					</div>
					<div className="row form-group flex-col md:flex-row flex gap-4 w-full justify-start md:justify-between items-center py-6 text-xl">
						<label htmlFor="first_name" className="col-xs-12 col-md-5 col-form-label w-full">
							First Name
						</label>
						<div className="col-xs-12 col-md-7 w-full" id="first_name">
							<input
								type="text"
								name="first_name"
								value={formDataTwo.first_name}
								placeholder="First Name"
								className="form-control pristine untouched bg-slate-200 p-4 rounded-lg w-full"
								aria-required="true"
								aria-invalid="false"
								onChange={handleChangeTwo}
							/>
						</div>
					</div>
					<div className="row form-group flex-col md:flex-row flex gap-4 w-full justify-start md:justify-between items-center py-6 text-xl">
						<label htmlFor="last_name" className="col-xs-12 col-md-5 col-form-label w-full">
							Last Name
						</label>
						<div className="col-xs-12 col-md-7 w-full" id="last_name">
							<input
								type="text"
								name="last_name"
								value={formDataTwo.last_name}
								placeholder="Last Name"
								className="form-control pristine untouched bg-slate-200 p-4 rounded-lg w-full"
								aria-required="true"
								aria-invalid="false"
								onChange={handleChangeTwo}
							/>
						</div>
					</div>
					<div className="row form-group flex-col md:flex-row flex gap-4 w-full justify-start md:justify-between items-center py-6 text-xl">
						<label htmlFor="email_address" className="col-xs-12 col-md-5 col-form-label w-full">
							Email Address
						</label>
						<div className="col-xs-12 col-md-7 w-full" id="email_address">
							<input
								type="email"
								name="email_address"
								value={formDataTwo.email_address}
								placeholder="Email Address"
								autoCapitalize="off"
								autoCorrect="off"
								autoComplete="email"
								className="form-control pristine untouched bg-slate-200 p-4 rounded-lg w-full"
								aria-required="true"
								aria-invalid="false"
								onChange={handleChangeTwo}
							/>
						</div>
					</div>
					<div className="row form-group flex-col md:flex-row flex gap-4 w-full justify-start md:justify-between items-center py-6 text-xl">
						<label htmlFor="phone_home" className="col-xs-12 col-md-5 col-form-label w-full">
							Telephone Number
						</label>
						<div className="col-xs-12 col-md-7 w-full" id="phone_home">
							<input
								type="tel"
								pattern="[0-9]*"
								inputMode="numeric"
								name="phone_home"
								value={formDataTwo.phone_home}
								placeholder="Telephone Number"
								autoCorrect="off"
								autoComplete="tel"
								className="form-control pristine untouched bg-slate-200 p-4 rounded-lg w-full"
								aria-required="true"
								aria-invalid="false"
								onChange={handleChangeTwo}
							/>
						</div>
					</div>
					<div className="row form-group flex-col md:flex-row flex gap-4 w-full justify-start md:justify-between items-center py-6 text-xl">
						<label htmlFor="zip_code" className="col-xs-12 col-md-5 col-form-label w-full">
							Zip Code
						</label>
						<div className="col-xs-12 col-md-7 w-full" id="zip_code">
							<input
								type="text"
								pattern="[0-9]*"
								inputMode="numeric"
								name="zip_code"
								value={formDataTwo.zip_code}
								placeholder="Zip Code"
								autoCorrect="off"
								autoComplete="postal-code"
								className="form-control pristine untouched bg-slate-200 p-4 rounded-lg w-full"
								aria-required="true"
								aria-invalid="false"
								onChange={handleChangeTwo}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<Section>
			<form className="max-w-screen-md w-full" id="">
				<div id="w-full">
					{currentFormStep === 1 && stepOne()}
					{currentFormStep === 2 && stepTwo()}

					{currentFormStep < 2 ? (
						<button
							className="px-6 py-6 bg-orange-500 hover:bg-orange-300 transition-all w-full mt-6 text-2xl font-semibold text-white rounded-lg"
							onClick={handleNextStep}
							type="button"
						>
							Continue
						</button>
					) : (
						<button
							className="px-6 py-6 bg-orange-500 hover:bg-orange-300 transition-all w-full mt-6 text-2xl font-semibold text-white rounded-lg"
							onClick={handleFormSubmit}
							type="button"
						>
							Submit
						</button>
					)}
				</div>
			</form>
		</Section>
	);
}
