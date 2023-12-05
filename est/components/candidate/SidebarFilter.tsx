import React from "react";
import Image from "../shared/common/Image";
import { logo } from "@/assets/image/images";
import ReactSelectElement from "../shared/common/ReactSelectElement";
import { skillsOption } from "@/constants";
import CheckboxElement from "../shared/common/CheckboxElement";
import { logger } from "@/utils";
import RangeSelect from "../shared/common/RangeSelect";

const SidebarFilter = () => {
	return (
		<div>
			<Image src={logo} placeholderSrc={logo} />
			<ReactSelectElement placeholder="Select candidates" options={skillsOption} wrapperClass="mt-20" />
			<CheckboxElement
				label="Showed starred only"
				initialState={false}
				onCheckboxChange={(value) => logger.log(value)}
				wrapperClass="mt-20"
			/>
			<div className="component-border" />
			<div className="additional-subtitle mt-20">Only show candidates...</div>
			<CheckboxElement
				label="With a verified work email"
				initialState={false}
				onCheckboxChange={(value) => logger.log(value)}
				wrapperClass="mt-10"
			/>
			<CheckboxElement
				label="Do not need sponsorship"
				initialState={false}
				onCheckboxChange={(value) => logger.log(value)}
				wrapperClass="mt-10"
			/>
			<CheckboxElement
				label="Who are actively looking"
				initialState={true}
				onCheckboxChange={(value) => logger.log(value)}
				wrapperClass="mt-10"
			/>
			<CheckboxElement
				label="Who are contract only"
				initialState={false}
				onCheckboxChange={(value) => logger.log(value)}
				wrapperClass="mt-10"
			/>
			<div className="component-border" />
			<div className="additional-subtitle mt-20">Current Location</div>
			<ReactSelectElement options={skillsOption} wrapperClass="mt-20" placeholder="Select location" />
			<CheckboxElement
				label="Open to relocation"
				initialState={false}
				onCheckboxChange={(value) => logger.log(value)}
				wrapperClass="mt-20"
			/>
			<div className="component-border" />
			<div className="additional-subtitle mt-20">Workplace Preferences</div>
			<ReactSelectElement options={skillsOption} wrapperClass="mt-20" placeholder="Select location" />
			<CheckboxElement
				label="Open to remote"
				initialState={false}
				onCheckboxChange={(value) => logger.log(value)}
				wrapperClass="mt-20"
			/>
			<CheckboxElement
				label="Open to onsite"
				initialState={false}
				onCheckboxChange={(value) => logger.log(value)}
				wrapperClass="mt-20"
			/>
			<CheckboxElement
				label="Open to hybrid"
				initialState={false}
				onCheckboxChange={(value) => logger.log(value)}
				wrapperClass="mt-20"
			/>
			<div className="component-border" />
			<div className="additional-subtitle mt-30">Years of Experience</div>
			<RangeSelect min={0} max={5} className="mt-20" step={1} />
			<div className="component-border mt-20" />
			<div className="additional-subtitle mt-30">Highest Education Level</div>
			<ReactSelectElement options={skillsOption} wrapperClass="mt-20" placeholder="Select location" />
			<div className="component-border" />
			<div className="additional-subtitle mt-20">Industries</div>
			<ReactSelectElement options={skillsOption} wrapperClass="mt-20" placeholder="Select location" />
			<CheckboxElement
				label="Must have all industries"
				initialState={false}
				onCheckboxChange={(value) => logger.log(value)}
				wrapperClass="mt-20"
			/>
			<div className="component-border" />
			<div className="additional-subtitle mt-20">Skills</div>
			<ReactSelectElement options={skillsOption} wrapperClass="mt-20" placeholder="Select Skills" />
			<CheckboxElement
				label="Must have all industries"
				initialState={false}
				onCheckboxChange={(value) => logger.log(value)}
				wrapperClass="mt-20"
			/>
			<div className="component-border" />
			<div className="additional-subtitle mt-20">Certifications</div>
			<ReactSelectElement options={skillsOption} wrapperClass="mt-20" placeholder="Select Certifications" />
			<CheckboxElement
				label="Must have all certifications"
				initialState={false}
				onCheckboxChange={(value) => logger.log(value)}
				wrapperClass="mt-20"
			/>
		</div>
	);
};

export default SidebarFilter;
