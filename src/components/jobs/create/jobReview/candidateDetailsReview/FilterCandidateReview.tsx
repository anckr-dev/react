import { checkboxIcon } from "@/assets/image/images";
import Image from "@/components/shared/common/Image";
import React, { FC } from "react";

const FilterCandidateReview: FC = () => {
	return (
		<div className="">
			<div className="personal-heading">Filter candidates</div>
			<div className="personal-subtitle">Only candidates matching the criteria below will see this job</div>
			<div className="search-bar-heading">Current location</div>
			<div className="linear-gradient w-30">
				<div className="text-box">New York, NY</div>
			</div>

			<div className="personal-subtitle mt-20">Only candidates in these locations will see this job</div>
			<div className="additional-subtitle mt-20">Workplace Preferences</div>
			<div className="personal-subtitle mt-10">Only show candidates who are...</div>
			<div className="checkbox-review mt-20">
				<Image src={checkboxIcon} height={20} />
				<div>Open to remote</div>
			</div>
			<div className="checkbox-review">
				<Image src={checkboxIcon} height={20} />
				<div>Open to hybrid (remote/onsite)</div>
			</div>
			<div className="checkbox-review">
				<Image src={checkboxIcon} height={20} />
				<div>Open to relocation</div>
			</div>
			<div className="additional-subtitle mt-20">Additional Filters</div>
			<div className="personal-subtitle mt-10">Only show ...</div>
			<div className="checkbox-review mt-20">
				<Image src={checkboxIcon} height={20} />
				<div>Candidates with a verified work email</div>
			</div>
			<div className="checkbox-review">
				<Image src={checkboxIcon} height={20} />
				<div>Candidates who do not require sponsorship</div>
			</div>
			<div className="checkbox-review">
				<Image src={checkboxIcon} height={20} />
				<div>Candidates who are actively looking</div>
			</div>
		</div>
	);
};

export default FilterCandidateReview;
