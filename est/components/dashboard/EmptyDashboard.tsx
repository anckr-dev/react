import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { routePath } from "@/constants";
import { ButtonElement } from "@/components";

const EmptyDashboard: FC = () => {
	const navigate = useNavigate();

	return (
		<div className="empty-dashboard">
			<div className="no-job-yet">No jobs yet</div>
			<ButtonElement
				btnClassName="create-request-btn"
				text="Create Request"
				onClick={() => {
					navigate(routePath.JOBCANDIDATE);
				}}
			/>
		</div>
	);
};

export default EmptyDashboard;
