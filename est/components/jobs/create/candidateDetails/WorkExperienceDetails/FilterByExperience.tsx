import { SearchBar, ReactSelectElement } from "@/components";
import { timeOptions } from "@/constants";
import Industries from "./Industries";
import Company from "./company";
import { logger } from "@/utils";

const FilterByExperience = () => {
	return (
		<div>
			<div className="personal-heading">Filters</div>
			<div className="personal-subtitle">Only candidates matching the criteria below will see this job</div>
			<div className="work-experience-wrapper">
				<div className="additional-subtitle mt-20">Job Titles</div>
				<div className="work-experience-search mt-10">
					<SearchBar
						placeholder="Start typing to search and select titles"
						paramNames="job-title"
						onSearch={(value) => logger.log(value)}
					/>

					<div className="job-select">
						<span>Include</span>
						<ReactSelectElement isMulti={false} wrapperClass="select-box" options={timeOptions} />
					</div>
				</div>
			</div>
			<Industries />
			<Company />
		</div>
	);
};

export default FilterByExperience;
