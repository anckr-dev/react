import React from "react";
import { CheckboxElement, SearchBar } from "@/components";
import { logger } from "@/utils";

const FilterCandidates = () => {
	return (
		<div className="filter-wrapper">
			<div className="personal-heading">Filter candidates</div>
			<div className="personal-subtitle">Only candidates matching the criteria below will see this job</div>
			<div className="search-bar-heading">Current location</div>
			<SearchBar
				paramNames="current-location"
				onSearch={(value) => logger.log(value)}
				placeholder="Start typing to search and select locations"
			/>
			<span>Only candidates in these locations will see this job</span>
			<div className="additional-subtitle mt-20">Workplace Preferences</div>
			<div className="personal-subtitle">Only show candidates who are...</div>
			<CheckboxElement
				label="Open to remote"
				initialState={false}
				onCheckboxChange={(value) => logger.log(value)}
				wrapperClass="mt-10"
			/>
			<CheckboxElement
				label="Open to working onsite"
				initialState={false}
				onCheckboxChange={(value) => logger.log(value)}
				wrapperClass="mt-10"
			/>
			<CheckboxElement
				label="Open to hybrid (remote/onsite)"
				initialState={true}
				onCheckboxChange={(value) => logger.log(value)}
				wrapperClass="mt-10"
			/>
			<CheckboxElement
				label="Open to relocation"
				initialState={false}
				onCheckboxChange={(value) => logger.log(value)}
				wrapperClass="mt-10"
			/>
			<div className="additional-subtitle mt-20">Additional Filters</div>
			<div className="personal-subtitle">Only show...</div>
			<CheckboxElement
				label="Candidates with a verified work email"
				initialState={false}
				onCheckboxChange={(value) => logger.log(value)}
				wrapperClass="mt-10"
			/>
			<CheckboxElement
				label="Contract only candidates"
				initialState={false}
				onCheckboxChange={(value) => logger.log(value)}
				wrapperClass="mt-10"
			/>
			<CheckboxElement
				label="Candidates who do not require sponsorship"
				initialState={true}
				onCheckboxChange={(value) => logger.log(value)}
				wrapperClass="mt-10"
			/>
			<CheckboxElement
				label="Candidates who are actively looking"
				initialState={false}
				onCheckboxChange={(value) => logger.log(value)}
				wrapperClass="mt-10"
			/>
		</div>
	);
};

export default FilterCandidates;
