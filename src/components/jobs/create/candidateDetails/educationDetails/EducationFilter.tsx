import { CheckboxElement, ReactSelectElement, SearchBar } from "@/components";
import { timeOptions } from "@/constants";
import { logger } from "@/utils";
import React, { FC } from "react";

const EducationFilter: FC = () => {
	return (
		<div className="mt-20">
			<div className="personal-heading mt-10">Filters</div>
			<div className="personal-subtitle">Only candidates matching the criteria below will see this job</div>
			<div className="additional-subtitle mt-20">Highest Education Level</div>
			<div className="education-filter-wrapper mt-20">
				<div className="education-filter-select">
					<ReactSelectElement
						isMulti={false}
						wrapperClass="company-select-wrapper "
						options={timeOptions}
						placeholder="Select proficiency level"
					/>
				</div>
				<div className="education-filter-select">
					<ReactSelectElement
						isMulti={false}
						wrapperClass="company-select-wrapper "
						options={timeOptions}
						placeholder="Select proficiency level"
					/>
				</div>
			</div>
			<div className="additional-subtitle mt-20">Certifications</div>
			<CheckboxElement
				label="Candidates must have all listed certifications in order to see this job"
				initialState={false}
				wrapperClass="mt-20"
			/>

			<SearchBar
				placeholder="Start tying to search and select certifications"
				paramNames="certifications"
				onSearch={(value) => logger.log(value)}
				extraClass="mt-20 w-400"
			/>
		</div>
	);
};

export default EducationFilter;
