import React, { FC } from "react";
import { ButtonTabElement, SearchBar, SortingButton } from "@/components";

import NewPost from "./NewPost";
import { routePath, tabs } from "@/constants";
import { getQueryParam } from "@/utils/helper";
import { logger } from "@/utils";

const DashboardNavArea: FC = () => {
	const storedTab = getQueryParam("tab") || "jobs";
	return (
		<div className="dashboard-nav-container">
			<SearchBar onSearch={(value) => logger.log(value)} paramNames={`${storedTab}-jobs`} placeholder="Search Job" />
			<ButtonTabElement
				tabs={tabs}
				buttonContainer="button-tab-container"
				defaultRoute={routePath.HOMETABACTIVE}
				tabName="tab"
			/>
			<SortingButton />
			<NewPost />
		</div>
	);
};

export default DashboardNavArea;
