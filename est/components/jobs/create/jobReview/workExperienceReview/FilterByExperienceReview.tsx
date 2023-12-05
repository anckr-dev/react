import React from "react";

interface Item {
	title: string;
	status: string;
	type: string;
}

const items: Item[] = [
	{ title: "UX Researcher", status: "Include", type: "Current" },
	{ title: "User Researcher", status: "Include", type: "Past" },
	{ title: "User Experience Researcher", status: "Include", type: "Past" },
	{ title: "Design Researcher", status: "Include", type: "Past" },
];

const companies: Item[] = [
	{ title: "Meta", status: "Include", type: "Current" },
	{ title: "Apple", status: "Include", type: "Past" },
	{ title: "Amazon", status: "Include", type: "Past" },
	{ title: "Netflix", status: "Include", type: "Past" },
];

const FilterByExperienceReview: React.FC = () => {
	return (
		<div>
			<div className="personal-heading">Filters</div>
			<div className="personal-subtitle">Only candidates matching the criteria below will see this job</div>

			{items.map((item, index) => (
				<div key={index.toString()} className="experience-review w-70 mt-20">
					<div className="linear-gradient w-100">
						<div className="text-box">{item.title}</div>
					</div>
					{item.status === "Include" && <div>{item.status}</div>}
					<div className="linear-gradient w-100">
						<div className="text-box">{item.type}</div>
					</div>
				</div>
			))}

			<div className="additional-subtitle mt-20">Industries</div>
			<div className="required-field">
				<span>Candidates must have all listed industries in order to see this job</span>
			</div>

			<div className="linear-gradient w-30 mt-20">
				<div className="text-box">Research, Design, Information Technology</div>
			</div>

			<div className="additional-subtitle mt-20">Years of Experience</div>

			<div className="linear-gradient w-30 mt-10">
				<div className="text-box">Between 5 - 10 years</div>
			</div>

			<div className="additional-subtitle mt-20">Companies</div>

			{companies.map((company, index) => (
				<div key={index.toString()} className="experience-review w-70 mt-20">
					<div className="linear-gradient w-100">
						<div className="text-box">{company.title}</div>
					</div>
					{company.status === "Include" && <div>{company.status}</div>}
					<div className="linear-gradient w-100">
						<div className="text-box">{company.type}</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default FilterByExperienceReview;
