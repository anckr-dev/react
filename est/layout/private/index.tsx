import { Footer, Navbar } from "@/components";
import Sidebar from "@/components/sidebar";
import { privateNavbar, routePath } from "@/constants";
import { useAppSelector } from "@/hooks/hooks";
import React from "react";
import { LayoutProps } from "src/interface";
import { FaBug, FaChartBar, FaCog, FaBell } from "react-icons/fa";

const links = [
	{ icon: <FaBug size={30} />, text: "Error Component", route: routePath.ERRORCOMPONENT },
	{ icon: <FaChartBar size={30} />, text: "Analytics", route: "/analytics" },
	{ icon: <FaCog size={30} />, text: "Settings", route: "/setting" },
	{ icon: <FaBell size={30} />, text: "Notification", route: "/notification" },
];

const PrivateLayout: React.FC<LayoutProps> = ({ children, auth }) => {
	const { user } = useAppSelector((state) => state.auth);

	return (
		<div className="main-container container-fluid ">
			<Navbar tabs={privateNavbar} auth={auth} user={user} />
			<div className="body-container">
				<div className="sidebar-container">{/* <Sidebar links={links} /> */}</div>

				<div className="content-container">{children}</div>
			</div>

			<Footer />
		</div>
	);
};

export default PrivateLayout;
