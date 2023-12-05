import React, { FC } from "react";
import { ButtonTabElement } from "@/components";
import { routePath, settingTab } from "@/constants";

const SettingNavigation: FC = () => {
	return (
		<ButtonTabElement
			buttonContainer="setting-navigation-btn"
			tabs={settingTab}
			defaultRoute={routePath.SETTINGDEAFULT}
			tabName="settingTab"
		/>
	);
};

export default SettingNavigation;
