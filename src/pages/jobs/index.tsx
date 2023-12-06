import React, { FC } from "react";
import { useSearchParams } from "react-router-dom";
import { STRING, createJobTab, routePath } from "@/constants";
import CandidateDetails from "../../components/jobs/create/candidateDetails/Index";
import JobDescription from "../../components/jobs/create/jobDescription";
import { ButtonTabElement, DashboardHeader } from "@/components";
import JobReview from "@/components/jobs/create/jobReview";

const Jobs: FC = () => {
	const [searchParams] = useSearchParams();
	const activeTab = searchParams.get(STRING.CREATE);

	const renderActiveTabContent = () => {
		switch (activeTab) {
			case "candidate":
				return <CandidateDetails />;
			case "description":
				return <JobDescription />;
			case "review":
				return <JobReview />;
			default:
				return null;
		}
	};

	return (
		<div>
			<DashboardHeader title="Create a request" />
			<div className="">
				<div className="setting-container">
					<ButtonTabElement
						buttonContainer="setting-navigation-btn"
						tabs={createJobTab}
						tabName="create"
						defaultRoute={routePath.JOBCANDIDATE}
					/>
				</div>

				{renderActiveTabContent()}
			</div>
		</div>
	);
};

export default Jobs;
