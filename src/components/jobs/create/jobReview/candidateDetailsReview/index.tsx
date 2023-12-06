import CustomAccordion from "@/components/customAccordian/customAccordion";
import React, { useState } from "react";
import RequestDetails from "../../requestDetails";
import { personalDetailsRequestFelids } from "@/constants";
import FilterCandidateReview from "./FilterCandidateReview";

const CandidateDetailsReview = () => {
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
						<div className="personal-detail-wrapper">
							<RequestDetails fields={personalDetailsRequestFelids} />
							<div className="component-border" />
							<FilterCandidateReview />
						</div>
					</>
				}
			/>
		</div>
	);
};

export default CandidateDetailsReview;
