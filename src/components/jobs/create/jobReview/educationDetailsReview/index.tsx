import CustomAccordion from "@/components/customAccordian/customAccordion";
import React, { useState } from "react";
import RequestDetails from "../../requestDetails";
import { educationRequestFelids } from "@/constants";
import EducationFilterReview from "./EducationFilterReview";

const EducationDetailsReview = () => {
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
						<EducationFilterReview />
					</div>
				}
			/>
		</div>
	);
};
export default EducationDetailsReview;
