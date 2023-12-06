import React from "react";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineDomainVerification, MdOutlineMapsHomeWork, MdOutlineWavingHand } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import ButtonElement from "../shared/common/ButtonElement";
import { useNavigate } from "react-router-dom";
import { routePath } from "@/constants";

const CandidateCard = () => {
	const navigate = useNavigate();
	return (
		<div className="candidate-listing-card">
			<div className="candidate-listing-card-left">
				<div className="candidate-job-title">Casey Lu</div>
				<div className="candidate-job-title">Senior UX Researcher at Netflix</div>
				<div className="candidate-location mt-20">
					<MdOutlineDomainVerification color="green" size={20} />
					<span>Senior UX Researcher at Netflix</span>
				</div>
				<div className="candidate-location mt-10">
					<TiLocation color="grey" size={20} />
					<span>San Francisco, California (Open to Relocation)</span>
				</div>
				<div className="candidate-location mt-10">
					<MdOutlineMapsHomeWork color="grey" size={20} />
					<span>Open to Onsite or Hybrid</span>
				</div>
				<ul className="candidate-location mt-30">
					<MdOutlineWavingHand color="grey" size={20} />
					<li className="bold-italic">Actively looking</li>
					<li className="bold-italic">Needs sponsorship</li>
				</ul>
			</div>
			<div className="candidate-listing-card-right">
				<div className="candidate-view-profile">
					<AiFillStar size={25} color="#efb615de" />
					<ButtonElement
						text="View profile"
						btnClassName="submit-btn-active "
						onClick={() => navigate(routePath.JOBCANDIDATES)}
					/>
				</div>
				<div className="verification-notes mt-20">applied Mar 23, 2022</div>
				<div className="verification-notes mt-10">you paid 4 tokens</div>
			</div>
		</div>
	);
};

export default CandidateCard;
