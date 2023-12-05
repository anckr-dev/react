import React, { useState } from "react";
import DashboardHeader from "../dashboard/DashboardHeader";
import ButtonElement from "../shared/common/ButtonElement";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import CandidateDetailsCard from "./CandidateDetailsCard";
import { candidatesData } from "@/constants";

const CandidateDetails: React.FC = () => {
	const [currentCandidate, setCurrentCandidate] = useState<number>(0);

	const handlePrevCandidate = () => {
		setCurrentCandidate((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : candidatesData.length - 1));
	};

	const handleNextCandidate = () => {
		setCurrentCandidate((prevIndex) => (prevIndex < candidatesData.length - 1 ? prevIndex + 1 : 0));
	};

	return (
		<div className="">
			<DashboardHeader title="From User Experience Researcher" backButtonPath="/" />
			<div className="candidate-details-wrapper">
				<div className="setting-navigation-btn candidate-details-nav">
					<ButtonElement text="Candidates" btnClassName="active-btn navigation-btn" />
					<div className="left-container">
						<div>{`${currentCandidate + 1} of ${candidatesData.length} candidates`}</div>
						<AiOutlineLeft
							size={30}
							className={`icon-pointer ${currentCandidate === 0 ? "icon-pointer-disabled" : "icon-pointer-active"}`}
							onClick={currentCandidate !== 0 ? handlePrevCandidate : undefined}
						/>
						<AiOutlineRight
							size={30}
							className={`icon-pointer ${
								currentCandidate === candidatesData.length - 1 ? "icon-pointer-disabled" : "icon-pointer-active"
							}`}
							onClick={currentCandidate !== candidatesData.length - 1 ? handleNextCandidate : undefined}
						/>
						<RxCross2 size={30} className="icon-pointer-active" />
					</div>
				</div>
				<div className="candidate-details">
					<CandidateDetailsCard data={candidatesData[currentCandidate]} />
				</div>
			</div>
		</div>
	);
};

export default CandidateDetails;
