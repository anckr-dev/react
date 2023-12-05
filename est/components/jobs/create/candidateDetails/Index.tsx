import React, { FC, Fragment } from "react";
import PersonalDetails from "./personalDetails";
import WorkExperienceDetails from "./WorkExperienceDetails";
import EducationDetails from "./educationDetails";
import SkillDetails from "./skillDetails";
import BottomNavigation from "@/components/jobs/create/bottomNavigation";

const CandidateDetails: FC = () => {
	return (
		<>
			<div className="setting-container">
				<div className=" tab-detail-span mt-10">
					Specify what details you would like to request from candidates—and what kinds of candidates can see this job.
				</div>
				<PersonalDetails />
				<WorkExperienceDetails />
				<SkillDetails />
				<EducationDetails />
			</div>
			<BottomNavigation submitBtnName="Save & Continue to Job Description" />
		</>
	);
};

export default CandidateDetails;
