import { STRING } from "@/constants";
import React, { FC } from "react";
import { useSearchParams } from "react-router-dom";
import { DashboardHeader, SettingNavigation, EmailNotification, Account } from "@/components";

const Setting: FC = () => {
	const [searchParams] = useSearchParams();
	const activeTab = searchParams.get(STRING.SETTINGTAB);

	return (
		<div className="setting-container">
			<DashboardHeader title="Setting" />
			<SettingNavigation />
			<div className="setting-body">
				<span className="setting-title">Manage your company’s account settings</span>
				{activeTab === "account" && <Account />}
				{activeTab === "email-notification" && <EmailNotification />}
			</div>
		</div>
	);
};

export default Setting;
