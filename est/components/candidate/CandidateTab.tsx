import React from "react";
import SidebarFilter from "./SidebarFilter";
import CandidateCard from "./CandidateCard";

const CandidateTab = () => {
	return (
		<div className="candidate-tab-wrapper mt-20">
			<div className="total-accept-reject">
				<div className="total-accept">
					<div>Applicants</div>
					<div>8 (max 40)</div>
				</div>
				<div className="total-accept">
					<div>Accepted</div>
					<div>8 </div>
				</div>
				<div className="total-accept">
					<div>Rejected</div>
					<div>2</div>
				</div>
				<div className="total-accept">
					<div>Data Requests</div>
					<div>24 spent (160 max)</div>
				</div>
				<div className="total-accept">
					<div>Total matching pool</div>
					<div>237</div>
				</div>
			</div>
			<div className="candidate-layout">
				<div className="candidate-layout-left">
					<SidebarFilter />
				</div>
				<div className="candidate-layout-right">
					<CandidateCard />
					<CandidateCard />
				</div>
			</div>
		</div>
	);
};

export default CandidateTab;
