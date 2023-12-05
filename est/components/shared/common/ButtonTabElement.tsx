import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonTabElementProps } from "@/interface";
import { getQueryParam } from "@/utils/helper";
import { ButtonElement } from "@/components";

const ButtonTabElement: React.FC<ButtonTabElementProps> = ({ tabs, buttonContainer, defaultRoute, tabName }) => {
	const storedTab = getQueryParam(tabName);
	const navigate = useNavigate();

	useEffect(() => {
		if (storedTab === null || !tabs.some((tab) => tab.endpoint === storedTab.toLowerCase())) {
			defaultRoute && navigate(defaultRoute);
		}
	}, [defaultRoute, navigate, storedTab, tabs]);

	return (
		<div className={buttonContainer}>
			{tabs.map((tab) => (
				<ButtonElement
					key={tab.index}
					btnClassName={`${tab.tabClassName} ${tab.endpoint === storedTab ? tab.activeClass : ""}`}
					onClick={() => tab.path && navigate(tab.path)}
					text={tab.buttonText}
					imageUrl={tab.imageUrl}
					btnImageCss={tab.imageCss}
				/>
			))}
		</div>
	);
};

export default ButtonTabElement;
