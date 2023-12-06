import { CustomAccordion } from "@/components";
import React, { FC, useState } from "react";
import EducationFilter from "./EducationFilter";
import RequestDetails from "@/components/jobs/create/requestDetails";
import { educationRequestFelids } from "@/constants";

const EducationDetails: FC = () => {
	const [checkedValue, setCheckedValue] = useState<boolean>(true);

	const handleCheckboxChange = (checked: boolean) => {
		setCheckedValue(checked);
	};

	return (
		<div>
			<CustomAccordion
				isCheckbox={true}
				checked={checkedValue}
				sectionName="Education, certifications, and awards"
				dataRequest="1"
				onCheckboxChange={handleCheckboxChange}
				content={
					<div className="skill-body-wrapper">
						<RequestDetails fields={educationRequestFelids} />
						<div className="component-border mt-20" />
						<EducationFilter />
					</div>
				}
			/>
		</div>
	);
};

export default EducationDetails;
