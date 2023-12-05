import React, { FC } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { ChangePasswordFormInputs } from "@/interface";
import { CHANGE_PASSWORD_VALIDATION_SCHEMA, NUMBER } from "@/constants";
import { InputElement, ButtonElement } from "@/components";
import { logger } from "@/utils";
import { toast } from "react-toastify";

const ChangePassword: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ChangePasswordFormInputs>({
		resolver: yupResolver(CHANGE_PASSWORD_VALIDATION_SCHEMA),
		mode: "onTouched",
		defaultValues: { currentPassword: "88787878" },
	});
	const hasErrors = Object.keys(errors).length > NUMBER.ZERO;

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		logger.log(data);
		toast.success("Passwords updated successfully");
	};

	return (
		<div className="password-change-container mt-20">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="change-password-title">Change Password</div>
				<InputElement
					name="currentPassword"
					label="Current password"
					type="text"
					register={register}
					error={errors.currentPassword}
					className="form-input"
					labelClass="company-label mt-20 required"
					isLabel={true}
					wrapperClass="current-password mt-20 form-group mt-10"
				/>

				<div className="new-password-wrapper">
					<InputElement
						name="newPassword"
						label="New password"
						type="text"
						register={register}
						error={errors.newPassword}
						className="form-input"
						labelClass="company-label required"
						isLabel={true}
						wrapperClass="new-password form-group mt-10"
					/>

					<InputElement
						name="confirmNewPassword"
						label="Confirm new password"
						type="text"
						register={register}
						error={errors.confirmNewPassword}
						className="form-input"
						labelClass="company-label required"
						isLabel={true}
						wrapperClass="new-password form-group mt-10"
					/>
				</div>

				<div className="password-btn-container">
					<ButtonElement text="Save" btnClassName="company-btn-active" disabled={hasErrors} />
					<ButtonElement text="Cancel" btnClassName="company-btn-disable" />
				</div>
			</form>
		</div>
	);
};

export default ChangePassword;
