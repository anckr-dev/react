import React, { FC } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { COMPANY_VALIDATION_SCHEMA, NUMBER } from "@/constants";
import { CompanyFormInputs } from "@/interface";
import { InputElement, TextAreaElement, ButtonElement } from "@/components";
import { logger } from "@/utils";

const CompanyDetailsEdit: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CompanyFormInputs>({
		resolver: yupResolver(COMPANY_VALIDATION_SCHEMA),
		mode: "onTouched",
		defaultValues: {
			companyName: "Google LLC",
			companyBio:
				"Google LLC is an American multinational technology company focusing on artificial intelligence, online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, and consumer electronic",
		},
	});
	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		logger.log(data);
	};
	const hasErrors = Object.keys(errors).length > NUMBER.ZERO;

	return (
		<div className="company-profile">
			<form onSubmit={handleSubmit(onSubmit)}>
				<InputElement
					name="companyName"
					label="Company Name"
					type="text"
					register={register}
					error={errors.companyName}
					className="form-input"
					labelClass="company-label required"
					wrapperClass="form-group mt-10"
					isLabel={true}
				/>
				<TextAreaElement
					name="companyBio"
					label="Company bio"
					type="text"
					register={register}
					error={errors.companyBio}
					className="form-input mn-100"
					isLabel={true}
					labelClass="company-label required"
					wrapperClass="form-group w-100 mn-100 mt-10"
				/>
				<div className="company-btn-container">
					<ButtonElement text="Save" btnClassName="company-btn-active" type="submit" disabled={hasErrors} />
					<ButtonElement text="Cancel" btnClassName="company-btn-disable" />
				</div>
			</form>
		</div>
	);
};

export default CompanyDetailsEdit;
