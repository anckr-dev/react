import CustomAccordion from "@/components/customAccordian/customAccordion";
import React, { useState } from "react";
import RequestDetails from "../../requestDetails";
import { skillRequestFelids } from "@/constants";
import AllSkills from "./AllSkills";

const SkillsReview = () => {
	const [checkedValue, setCheckedValue] = useState<boolean>(true);
	return (
		<div>
			<CustomAccordion
				isCheckbox={true}
				checked={checkedValue}
				sectionName="Skills"
				dataRequest="1"
				onCheckboxChange={(checked) => setCheckedValue(checked)}
				content={
					<>
						<div className="skill-body-wrapper">
							<RequestDetails fields={skillRequestFelids} />
							<div className="component-border mt-20" />
							<AllSkills />
						</div>
					</>
				}
			/>
		</div>
	);
};
export default SkillsReview;
