import ButtonElement from "@/components/shared/common/ButtonElement";
import ReactSelectElement from "@/components/shared/common/ReactSelectElement";
import { expiredOption } from "@/constants";
import React, { FC } from "react";

interface BottomNavigationProps {
	submitBtnName: string;
}

const BottomNavigation: FC<BottomNavigationProps> = ({ submitBtnName }) => {
	return (
		<div className="job-match-wrapper mt-20">
			<div className="job-match-result">
				<div className="job-match-result-left">
					200 matching candidates
					<span className="job-match-subtitle"> (based on your filters)</span>
				</div>
				<div className="job-match-result-right">
					<div className="max-applicant-section">
						<div className="max-applicant-text">Max # of applicants</div>
						<div className="max-applicant-number">125</div>
					</div>
					<div className="total-applicant-section">
						<div className="total-applicant-text">Total</div>
						<div className="total-applicant-number">
							<div className="total-applicant-number-text">500 data requests</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bottom-nav-area">
				<ButtonElement text="Back" onClick={() => {}} btnClassName="back-btn" />
				<div className="bottom-right">
					<ButtonElement text="Save for latter" onClick={() => {}} btnClassName="submit-btn-inactive" />
					{submitBtnName === "Post a Job" && (
						<ReactSelectElement placeholder="Select Expiry Time" options={expiredOption} />
					)}

					<ButtonElement text={submitBtnName} onClick={() => {}} btnClassName="submit-btn-active" />
				</div>
			</div>
		</div>
	);
};

export default BottomNavigation;
