import React, { FC } from "react";
import { DashboardHeaderProps } from "@/interface";
import { AiOutlineInfoCircle } from "react-icons/ai";
import ButtonElement from "../shared/common/ButtonElement";
import { useNavigate } from "react-router-dom";

const DashboardHeader: FC<DashboardHeaderProps> = ({ title, subtitle, backButtonPath }) => {
	const lockedToken: number = 100;
	const remainingToken: number = 50;
	const totalTokens: number = lockedToken + remainingToken;
	const percentageLocked: number = (lockedToken / totalTokens) * 100;
	const percentageRemaining: number = (remainingToken / totalTokens) * 100;
	const navigate = useNavigate();

	return (
		<div className="dashboard-header">
			<div className="welcome-message-wrapper">
				{backButtonPath && (
					<ButtonElement text="Back to jobs" btnClassName="job-review-edit" onClick={() => navigate(backButtonPath)} />
				)}

				<div className="welcome-title mt-30">{title}</div>
				{subtitle ? <div className="welcome-subtitle mt-20">{subtitle}</div> : null}
			</div>
			<div className="token-balance-wrapper">
				<div>
					<span className="token-balance">Your balance:</span>
					<span className="data-request">500 data requests</span>
				</div>
				<div className="data-balance-wrapper">
					<span className="data-balance">0 available balance</span>
					<AiOutlineInfoCircle />
				</div>
				<div className="total-token">
					<div className="token-progress-text">
						<div className="locked">locked</div>
						<div className="locked">remaining</div>
					</div>
					<div className="progress">
						<div
							className="progress-bar locked-container"
							role="progressbar"
							style={{ width: `${percentageLocked}%` }}
							aria-valuenow={percentageLocked}
							aria-valuemin={0}
							aria-valuemax={100}
						>
							{lockedToken}
						</div>
						<div
							className="progress-bar remaining-container"
							role="progressbar"
							style={{ width: `${percentageRemaining}%` }}
							aria-valuenow={percentageRemaining}
							aria-valuemin={0}
							aria-valuemax={100}
						>
							{remainingToken}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardHeader;
