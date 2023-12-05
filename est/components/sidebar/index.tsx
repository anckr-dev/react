import { useAppSelector } from "@/hooks/hooks";
import React from "react";
import { useLocation, Link } from "react-router-dom";

interface SidebarProps {
	title?: string;
	links: { icon: React.ReactNode; text: string; route: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ title, links }) => {
	const { isSidebarOpen } = useAppSelector((state) => state.sidebar);

	const location = useLocation();

	return (
		<nav className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
			<div className="menu-items">
				{links.map((link, index) => (
					<Link
						to={link.route}
						className={`nav-item  ${location.pathname.startsWith(link.route) ? "active-sidebar" : ""}`}
						key={index.toString()}
					>
						{link.icon}
						<div className="text nav-text">{link.text}</div>
					</Link>
				))}
			</div>
		</nav>
	);
};

export default Sidebar;
