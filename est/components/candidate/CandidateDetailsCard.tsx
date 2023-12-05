import React from "react";
import { AiFillStar } from "react-icons/ai";
import { MdLocalPhone, MdMarkEmailRead, MdOutlineMapsHomeWork, MdOutlineWavingHand } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import { CgMail } from "react-icons/cg";
import { BsBagFill } from "react-icons/bs";
import { VscTools } from "react-icons/vsc";
import { RiGraduationCapFill } from "react-icons/ri";
import { GrDocumentVerified } from "react-icons/gr";
import { FaTrophy } from "react-icons/fa";
import { CandidateDetailsCardProps } from "@/interface";

const CandidateDetailsCard: React.FC<CandidateDetailsCardProps> = ({ data }) => {
	return (
		<div className="candidate-details-main mt-20">
			<div className="candidate-details-page">
				<div className="candidate-listing-card-left">
					<div className="candidate-job-title">{data.name}</div>
					<div className="candidate-job-title">{data.designation}</div>
					<ul className="candidate-location mt-20">
						<MdLocalPhone color="grey" size={20} />
						<li>{data.contactNumber}</li>
					</ul>
					{data.officialEmail ? (
						<ul className="candidate-location mt-10">
							<MdMarkEmailRead color="#30B900" size={20} />
							<li>verified work email {data.officialEmail}</li>
						</ul>
					) : null}

					<ul className="candidate-location mt-10">
						<CgMail color="grey" size={20} />
						<li>{data.email}</li>
					</ul>
					<ul className="candidate-location mt-10">
						<TiLocation color="grey" size={20} />
						<li>{data.location} (Open to Relocation)</li>
					</ul>
					<ul className="candidate-location mt-10">
						<MdOutlineMapsHomeWork color="grey" size={20} />
						<li>Open to Onsite or Hybrid</li>
					</ul>
					<ul className="candidate-location mt-10">
						<MdOutlineWavingHand color="grey" size={20} />
						<li className="bold-italic">Actively looking</li>
						<li className="bold-italic">Needs sponsorship</li>
					</ul>
				</div>
				<div className="candidate-listing-card-right">
					<div className="candidate-view-profile">
						<AiFillStar size={25} color="#efb615de" />
					</div>
					<div className="verification-notes mt-20">applied Mar 23, 2022</div>
					<div className="verification-notes mt-10">you paid 4 tokens</div>
				</div>
			</div>
			<div className="component-border mt-30" />
			<div className="mt-30">
				<div className="candidate-job-title">Work experience</div>
				<div className="personal-subtitle">Industries: Industry A, B, C</div>
				{data.workExperience.map((experience, index) => (
					<ul key={index.toString()} className="candidate-location mt-10">
						<BsBagFill color="grey" size={20} />
						<li>
							{experience.position} at {experience.companyName}
						</li>
						<li>{experience.description}</li>
						<li>{experience.location}</li>
						<li>
							{experience.startDate} - {experience.endDate}
						</li>
					</ul>
				))}
			</div>
			<div className="component-border mt-30" />
			<div className="mt-30">
				<div className="candidate-job-title">Skills</div>
				{data.skills.map((skill, index) => (
					<ul className="candidate-location mt-10" key={index.toString()}>
						<VscTools color="grey" size={20} />
						<li>{skill.name}</li>
						<li>{skill.level}</li>
					</ul>
				))}
			</div>
			<div className="component-border mt-30" />
			<div className="mt-30">
				<div className="candidate-job-title">Education</div>
				<div className="personal-subtitle">Highest level of education: Bachelor’s degree</div>
				{data.educations.map((education, index) => (
					<ul className="candidate-location mt-10" key={index.toString()}>
						<RiGraduationCapFill color="grey" size={20} />
						<li>{education.universityName}</li>
						<li>{education.degreeName}</li>
						<li>
							{education.startYear} - {education.endYear}
						</li>
					</ul>
				))}
			</div>
			<div className="component-border mt-30" />
			<div className="mt-30">
				<div className="candidate-job-title">Certifications</div>
				{data.certifications.map((Certificate, index) => (
					<ul className="candidate-location mt-10" key={index.toString()}>
						<GrDocumentVerified color="grey" size={20} />
						<li>{Certificate.name}</li>
					</ul>
				))}
			</div>
			<div className="component-border mt-30" />
			<div className="mt-30">
				<div className="candidate-job-title">Awards</div>
				{data.awards.map((award, index) => (
					<ul className="candidate-location mt-10" key={index.toString()}>
						<FaTrophy color="grey" size={20} />
						<li> {award.name}</li>
					</ul>
				))}
			</div>
		</div>
	);
};

export default CandidateDetailsCard;
