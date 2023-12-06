import React, { FC } from "react";

import { useSearchParams } from "react-router-dom";
import { STRING } from "@/constants";
import { DashboardHeader, DashboardNavArea, DashboardListing, EmptyDashboard } from "@/components";

const Dashboard: FC = () => {
	const [searchParams] = useSearchParams();
	const activeTab = searchParams.get(STRING.TAB);
	return (
		<div className="dashboard-wrapper">
			<DashboardHeader title="Live requests" subtitle="Welcome to your Dashboard" />
			<DashboardNavArea />
			<div className="dashboard-listing-wrapper">
				{activeTab === STRING.ACTIVE && <DashboardListing />}
				{activeTab === STRING.EXPIRED && <EmptyDashboard />}
			</div>
		</div>
	);
};

export default Dashboard;
