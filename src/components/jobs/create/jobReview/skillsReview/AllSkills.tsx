import React from "react";

interface Skill {
	title: string;
	level: string;
}

const skills: Skill[] = [
	{ title: "User Personas", level: "Master" },
	{ title: "User Journeys", level: "Master" },
	{ title: "Survey Design", level: "Advanced" },
];

const AllSkills: React.FC = () => {
	return (
		<div>
			<div className="personal-heading">Filter</div>
			<div className="personal-subtitle">Only candidates matching the criteria below will see this job</div>
			<div className="additional-subtitle mt-20">Skills</div>
			<div className="required-field">
				<span className="request-span">Candidates must have all listed skills in order to see this job</span>
			</div>
			{skills.map((skill, index) => (
				<div key={index.toString()} className="experience-review w-60 mt-20">
					<div className="linear-gradient w-100">
						<div className="text-box">{skill.title}</div>
					</div>
					<div className="linear-gradient w-100">
						<div className="text-box">{skill.level}</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default AllSkills;
