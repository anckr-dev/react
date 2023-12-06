import { Footer, Navbar } from "@/components";
import React from "react";
import { LayoutProps } from "src/interface";

const PublicLayout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="main-container container-fluid ">
			<Navbar />
			<div className="body-container">{children}</div>
			<Footer />
		</div>
	);
};

export default PublicLayout;
