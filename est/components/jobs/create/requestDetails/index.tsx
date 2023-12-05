import React, { FC } from "react";

interface Field {
	title: string;
	subTitle?: string;
	note?: string;
}

interface RequestDetailsProps {
	fields: Field[];
}

const RequestDetails: FC<RequestDetailsProps> = ({ fields }) => {
	return (
		<div>
			<div className="personal-heading">Request details</div>
			<div className="personal-subtitle">Candidates will receive a request for the following information:</div>
			<div className="required-field">
				{fields.map((field, index) => (
					<div key={index.toString()}>
						<span className="request-span">{field.title}</span>
						{field.subTitle && <div className="verification-notes"> {field.subTitle}</div>}
						{field.note && <div className="verification-notes">Note: {field.note}</div>}
					</div>
				))}
			</div>
		</div>
	);
};

export default RequestDetails;
