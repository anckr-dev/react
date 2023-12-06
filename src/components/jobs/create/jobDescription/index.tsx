import { CustomAccordion, ReactSelectElement } from "@/components";
import BottomNavigation from "@/components/jobs/create/bottomNavigation";
import { skillsOption } from "@/constants";
import React, { FC, useState } from "react";

const JobDescription: FC = () => {
	const [checkedValue, setCheckedValue] = useState<boolean>(true);

	return (
		<>
			<div className="setting-container">
				<div className="tab-detail-span mt-10">
					This job description will be shared only with candidates who match your targeting criteria.
				</div>
				<CustomAccordion
					isCheckbox={true}
					checked={checkedValue}
					dataRequest="1"
					sectionName="Job Details"
					onCheckboxChange={(checked: boolean) => setCheckedValue(checked)}
					content={
						<>
							<div className="job-des-wrapper w-60">
								<div className="form-group mt-20 ">
									<input type="text" className="form-input" id="name" placeholder="Company" required />
								</div>
								<div className="form-group mt-20">
									<input type="text" className="form-input" id="name" placeholder="Job title" required />
								</div>
								<div className="job-two-wrapper mt-20">
									<ReactSelectElement options={skillsOption} wrapperClass="w-100" placeholder="Seniority" />
									<ReactSelectElement options={skillsOption} wrapperClass="w-100" placeholder="Employment type" />
								</div>
								<div className="job-two-wrapper mt-20">
									<ReactSelectElement options={skillsOption} wrapperClass="w-100" placeholder="Workplace Policy" />
									<div className="form-group w-100">
										<input type="text" className="form-input" id="name" placeholder="Job title" required />
									</div>
								</div>
								<ReactSelectElement
									options={skillsOption}
									isMulti={true}
									wrapperClass="mt-20"
									placeholder="Job function (select up to 3)"
								/>
								<ReactSelectElement
									options={skillsOption}
									isMulti={true}
									wrapperClass="mt-20"
									placeholder="Company industry (select up to 3)"
								/>
								<textarea
									placeholder="Job summary (2000 characters max)"
									className="mt-40 w-100 form-input"
									style={{ height: "150px" }}
								/>
								<ReactSelectElement
									options={skillsOption}
									isMulti={true}
									wrapperClass="mt-20"
									placeholder="Skills (select up to 10)"
								/>
							</div>
							<div className="component-border" />
							<div className="job-des-wrapper w-60">
								<div className="mt-20 base-title "> Base Salary Range (optional)</div>
								<div className="base-salary-wrapper mt-10">
									<div className="base-salary">USD</div>
									<div className="base-input">
										<div className="base-input-wrapper">
											<span>$</span>
											<input className="input-css" />
										</div>
										<div>-</div>
										<div className="base-input-wrapper">
											<span>$</span>
											<input className="input-css" />
										</div>
									</div>
									<div className="base-salary">Per Year</div>
								</div>
								<div className="mt-20 base-title ">Benefits</div>
								<ReactSelectElement
									options={skillsOption}
									wrapperClass="w-100 mt-10"
									placeholder="Select all that apply"
								/>
							</div>
						</>
					}
				/>
			</div>
			<BottomNavigation submitBtnName="Save & Review" />
		</>
	);
};

export default JobDescription;
