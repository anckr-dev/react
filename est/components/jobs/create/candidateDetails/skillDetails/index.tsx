import { CustomAccordion } from "@/components";
import React, { FC, useState } from "react";
import AddSkillLevel from "./AddSkillLevel";
import RequestDetails from "@/components/jobs/create/requestDetails/index";
import { skillRequestFelids } from "@/constants";

const SkillDetails: FC = () => {
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
							<AddSkillLevel />
						</div>
					</>
				}
			/>
		</div>
	);
};

export default SkillDetails;
