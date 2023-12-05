import ButtonElement from "@/components/shared/common/ButtonElement";
import React from "react";
import EducationDetailsReview from "../create/jobReview/educationDetailsReview";
import SkillsReview from "../create/jobReview/skillsReview";
import WorkExperienceReview from "../create/jobReview/workExperienceReview";
import CandidateDetailsReview from "../create/jobReview/candidateDetailsReview";
import Image from "@/components/shared/common/Image";
import { company } from "@/assets/image/images";

const JobDetailsReview = () => {
	return (
		<div className="mt-30">
			<div className="mt-20 job-review-title ">
				Candidate details
				<ButtonElement text="Edit" btnClassName="job-review-edit pl-10" />
			</div>
			<CandidateDetailsReview />
			<WorkExperienceReview />
			<SkillsReview />
			<EducationDetailsReview />
			<div className="mt-20 job-review-title">
				Job Description
				<ButtonElement text="Edit" btnClassName="job-review-edit pl-10" />
			</div>
			<div className="job-preview-wrapper mt-20">
				<div className="w-60">
					<Image src={company} placeholderSrc={company} />
					<div className="job-preview-title mt-20">Felix Co</div>
					<div>
						is looking for a <span className="bold-text">Senior UX Researcher</span>
					</div>
					<div className="component-border" />
					<div className="mt-20 job-location-details">
						<div>New York, NY (Remote) • Full-time • Senior Level • $135,000–$160,000</div>
						<div>Job function: job function 1</div>
						<div>Industry: Industry 1</div>
						<div>Medical insurance: Medical insurance 1</div>
					</div>
					<ButtonElement text="see more benefits" btnClassName="job-review-edit mt-20" />
					<div className="mt-20">
						<span className="bold-text">Felix Co</span> is building an operating system for veterinary care delivery
						that implements intelligent workflows to streamline care delivery and revolutionizes the pet care experience
						outside the care setting. We offer an end-to-end platform that unifies fragmented health care data to enable
						providers, payors, and life science companies to automate care delivery operations - from patient
						communication to documentation to reimbursement. We uniquely use artificial intelligence to digitize
						existing care delivery workflows, giving vets infrastructure that learns from every encounter they have.
					</div>
					<div>We are growing our team and are excited to bring on a UX researcher.</div>
					<div className="mt-20 bold-text">Responsibilities</div>
					<div className="mt-10">
						Lead user-centered research throughout the product development process, from discovery to delivery, using a
						variety of qualitative and quantitative research methods (e.g., interviews, surveys, usability tests,
						concept tests, contextual inquiry, competitive analysis). Collaborate with our product team and internal
						stakeholders to surface and prioritize key strategic questions, and lead research initiatives that will
						directly shape our roadmap. Create foundational research artifacts—including personas and user journeys—to
						enable product teams to make better-informed decisions and build shared understanding of our users.
					</div>
					<div className="mt-20 bold-text">Qualifications</div>
					<div className="mt-10">
						An experienced UX researcher who has worked on an agile team and shipped products and features for at least
						a few years. Experience leading research projects across the entire product lifecycle. Experience planning
						research to address knowledge gaps, to enable us to make better product decisions. Experience aligning and
						facilitating decision-making with stakeholders. Experience collaborating with product managers, designers,
						engineers, and other internal stakeholders; you are inclusive in your approach to research and employ a
						variety of methods to get the best ideas and questions out of your team.
					</div>
				</div>
			</div>
		</div>
	);
};

export default JobDetailsReview;
