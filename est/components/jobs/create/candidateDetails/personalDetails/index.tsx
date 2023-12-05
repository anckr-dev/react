import React, { FC, useState } from "react";
import FilterCandidates from "./FilterCandidates";
import { CustomAccordion, RequestDetails } from "@/components";

import { personalDetailsRequestFelids } from "@/constants";
const PersonalDetails: FC = () => {
	const [checkedValue, setCheckedValue] = useState<boolean>(true);

	return (
		<div>
			<CustomAccordion
				isCheckbox={true}
				checked={checkedValue}
				dataRequest="1"
				sectionName="Personal details & workplace preferences"
				onCheckboxChange={(checked: boolean) => setCheckedValue(checked)}
				content={
					<>
						<div className="personal-detail-required-message">
							<div className="personal-detail-wrapper ">
								Personal details are required. Every candidate must provide their personal details when they apply to
								your job.
							</div>
						</div>
						<div className="personal-detail-wrapper">
							<RequestDetails fields={personalDetailsRequestFelids} />
							<div className="component-border" />
							<FilterCandidates />
						</div>
					</>
				}
			/>
		</div>
	);
};

export default PersonalDetails;
