import { CustomAccordion, RequestDetails } from "@/components";
import React, { FC, useState } from "react";

import { workExperienceRequestFelids } from "@/constants";
import FilterByExperience from "./FilterByExperience";

const WorkExperienceDetails: FC = () => {
	const [checkedValue, setCheckedValue] = useState<boolean>(true);
	return (
		<div>
			<CustomAccordion
				isCheckbox={true}
				checked={checkedValue}
				sectionName="Work experience"
				dataRequest="1"
				onCheckboxChange={(checked) => setCheckedValue(checked)}
				content={
					<div className="personal-detail-wrapper">
						<RequestDetails fields={workExperienceRequestFelids} />
						<FilterByExperience />
					</div>
				}
			/>
		</div>
	);
};

export default WorkExperienceDetails;
