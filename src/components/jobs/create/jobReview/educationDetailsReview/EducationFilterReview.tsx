import React from "react";

const EducationFilterReview = () => {
	return (
		<div>
			<div className="personal-heading">Filters</div>
			<div className="personal-subtitle">Only candidates matching the criteria below will see this job</div>
			<div className="additional-subtitle mt-20">Highest Education Level</div>
			<div className="experience-review w-60 mt-20">
				<div className="linear-gradient w-100">
					<div className="text-box">Bacherlor’s Degree</div>
				</div>
				<div className="linear-gradient w-100">
					<div className="text-box">2005</div>
				</div>
			</div>
			<div className="additional-subtitle mt-20">Certifications</div>
			<div className="required-field">
				<span className="request-span">Candidates must have all listed certifications in order to see this job</span>
			</div>
			<div className="linear-gradient w-30 mt-10">
				<div className="text-box">Certification 1</div>
			</div>
			<div className="linear-gradient w-30 mt-10">
				<div className="text-box">Certification 2</div>
			</div>
			<div className="linear-gradient w-30 mt-10">
				<div className="text-box">Certification 3</div>
			</div>
		</div>
	);
};

export default EducationFilterReview;
