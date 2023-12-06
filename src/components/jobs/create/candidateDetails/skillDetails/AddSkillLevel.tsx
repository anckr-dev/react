import { ButtonElement, CheckboxElement, ReactSelectElement, SearchBar } from "@/components";
import { timeOptions } from "@/constants";
import React, { useState } from "react";

const AddSkillLevel = () => {
	const [skills, setSkills] = useState([{ id: 1, searchValue: "", onSelect: "" }]);
	const [nextSkillId, setNextSkillId] = useState(2);

	const addSkill = () => {
		setSkills([...skills, { id: nextSkillId, searchValue: "", onSelect: "" }]);
		setNextSkillId(nextSkillId + 1);
	};

	const updateSkills = (id: number, field: string, value: string | number) => {
		const updatedIndustries = skills.map((skill) => {
			if (skill.id === id) {
				return { ...skill, [field]: value };
			}
			return skill;
		});

		setSkills(updatedIndustries);
	};

	const removeSkill = (id: number) => {
		const indexToRemove = skills.findIndex((skill) => skill.id === id);
		if (indexToRemove !== -1) {
			const updatedIndustries = [...skills];
			updatedIndustries.splice(indexToRemove, 1);
			setSkills(updatedIndustries);
		}
	};

	return (
		<div>
			<div className="personal-heading">Filters</div>
			<div className="personal-subtitle">Only candidates matching the criteria below will see this job</div>
			<div className="additional-subtitle mt-20">Skills</div>
			<CheckboxElement
				label="Candidates must have all listed skills in order to see this job"
				initialState={false}
				wrapperClass="mt-20"
			/>
			{skills.map((skill) => (
				<div className="skills-search-wrapper mt-10" key={skill.id}>
					<SearchBar
						placeholder="Start tying to search and select a skill"
						paramNames="skill-name"
						onSearch={(value) => updateSkills(skill.id, "searchValue", value)}
					/>
					<div className="skills-select">
						<ReactSelectElement
							isMulti={false}
							wrapperClass="company-select-wrapper "
							options={timeOptions}
							placeholder="Select proficiency level"
						/>
					</div>
					<ButtonElement text="Remove" onClick={() => removeSkill(skill.id)} btnClassName="remove-industry-btn" />
				</div>
			))}
			<ButtonElement text="+ Add a skill" onClick={addSkill} btnClassName="add-industry-btn" />
		</div>
	);
};

export default AddSkillLevel;
