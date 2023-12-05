import React, { FC, useState } from "react";
import { toast } from "react-toastify";
import { ButtonElement, CheckboxElement } from "@/components";
import { logger } from "@/utils";

interface CheckboxStates {
	candidatesApply: boolean;
	jobPostExpire: boolean;
	jobPostFulfilled: boolean;
	dataRequestLow: boolean;
	dataRequestAllocated: boolean;
	passwordChanged: boolean;
}

const EmailNotification: FC = () => {
	const [checkboxStates, setCheckboxStates] = useState<CheckboxStates>({
		candidatesApply: true,
		jobPostExpire: true,
		jobPostFulfilled: true,
		dataRequestLow: true,
		dataRequestAllocated: true,
		passwordChanged: true,
	});

	const handleChange = (name: keyof CheckboxStates) => {
		setCheckboxStates((prevState) => ({
			...prevState,
			[name]: !prevState[name],
		}));
	};

	const handleEmailNotificationSave = () => {
		console.log(checkboxStates);
		logger.log(checkboxStates);
		toast.success("Email preference changed successfully");
	};

	return (
		<div className="email-notification-container">
			<div>Send me an email notification to myslogin@waystar.com when...</div>
			<CheckboxElement
				label="Candidates apply to my jobs"
				initialState={checkboxStates.candidatesApply}
				onCheckboxChange={() => handleChange("candidatesApply")}
			/>
			<CheckboxElement
				label="Job post is about to expire"
				initialState={checkboxStates.jobPostExpire}
				onCheckboxChange={() => handleChange("jobPostExpire")}
			/>
			<CheckboxElement
				label="Job post has been fulfilled (your max # applicants or max # data requests are met)"
				initialState={checkboxStates.jobPostFulfilled}
				onCheckboxChange={() => handleChange("jobPostFulfilled")}
			/>
			<CheckboxElement
				label="Data request balance is low"
				initialState={checkboxStates.dataRequestLow}
				onCheckboxChange={() => handleChange("dataRequestLow")}
			/>
			<CheckboxElement
				label="Data request balance has been fully allocated to active jobs"
				initialState={checkboxStates.dataRequestAllocated}
				onCheckboxChange={() => handleChange("dataRequestAllocated")}
			/>
			<CheckboxElement
				label="Password has been changed (for company login details)"
				initialState={checkboxStates.passwordChanged}
				onCheckboxChange={() => handleChange("passwordChanged")}
			/>
			<div className="notification-btn-container">
				<ButtonElement text="Save" btnClassName="company-btn-active" onClick={handleEmailNotificationSave} />
				<ButtonElement text="Cancel" btnClassName="company-btn-disable" />
			</div>
		</div>
	);
};

export default EmailNotification;
