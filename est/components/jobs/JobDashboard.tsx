import { STRING, candidateTab, routePath } from "@/constants";
import React from "react";
import { useSearchParams } from "react-router-dom";
import DashboardHeader from "../dashboard/DashboardHeader";
import ButtonTabElement from "../shared/common/ButtonTabElement";
import CandidateTab from "../candidate/CandidateTab";
import JobDetailsReview from "./jobReview/JobDetailsReview";

const JobDashboard = () => {
	const [searchParams] = useSearchParams();
	const activeTab = searchParams.get(STRING.TAB);
	return (
		<div>
			<DashboardHeader
				title="User Experience Researcher"
				backButtonPath="/"
				subtitle="Expiring on Apr 15 2022 12:14 pm EDT"
			/>
			<div className="setting-container">
				<ButtonTabElement
					buttonContainer="setting-navigation-btn"
					tabs={candidateTab}
					tabName="tab"
					defaultRoute={routePath.CANDIDATEDEAITLS}
				/>

				{activeTab === STRING.Candidate && <CandidateTab />}
				{activeTab === STRING.JOBS && <JobDetailsReview />}
			</div>
		</div>
	);
};

export default JobDashboard;
