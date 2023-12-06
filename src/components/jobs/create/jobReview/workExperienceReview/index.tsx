import CustomAccordion from "@/components/customAccordian/customAccordion";
import { workExperienceRequestFelids } from "@/constants";
import React, { useState } from "react";
import RequestDetails from "../../requestDetails";
import FilterByExperienceReview from "./FilterByExperienceReview";

const WorkExperienceReview = () => {
	const [checkedValue, setCheckedValue] = useState<boolean>(true);
	return (
		<CustomAccordion
			isCheckbox={true}
			checked={checkedValue}
			sectionName="Work experience"
			dataRequest="1"
			onCheckboxChange={(checked) => setCheckedValue(checked)}
			content={
				<div className="personal-detail-wrapper">
					<RequestDetails fields={workExperienceRequestFelids} />
					<FilterByExperienceReview />
				</div>
			}
		/>
	);
};

export default WorkExperienceReview;
