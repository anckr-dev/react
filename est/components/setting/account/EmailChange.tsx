import React, { FC } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { EmailChangeFormInputs } from "@/interface";
import { CHANGE_EMAIL_VALIDATION_SCHEMA, NUMBER } from "@/constants";
import { ButtonElement, InputElement } from "@/components";
import { logger } from "@/utils";
import { toast } from "react-toastify";

interface EmailChangeProps {
	label: string;
}

const EmailChange: FC<EmailChangeProps> = ({ label }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<EmailChangeFormInputs>({
		resolver: yupResolver(CHANGE_EMAIL_VALIDATION_SCHEMA),
		mode: "onTouched",
		defaultValues: { email: "xxxxxxxxxxx@google.com" },
	});
	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		logger.log(data);
		toast.success("Email updated successfully");
	};
	const hasErrors = Object.keys(errors).length > NUMBER.ZERO;
	return (
		<div className="email-change-container mt-20">
			<form onSubmit={handleSubmit(onSubmit)}>
				<InputElement
					name="email"
					label={label}
					type="email"
					register={register}
					error={errors.email}
					className="form-input"
					labelClass="change-password-title   required"
					isLabel={true}
					wrapperClass="form-group mt-20"
				/>
				<div className="email-btn-container">
					<ButtonElement text="Save" btnClassName="company-btn-active" type="submit" disabled={hasErrors} />
					<ButtonElement text="Cancel" btnClassName="company-btn-disable" />
				</div>
			</form>
		</div>
	);
};

export default EmailChange;
