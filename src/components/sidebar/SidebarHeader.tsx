import React from "react";
import { FiMenu } from "react-icons/fi";
import { useAppDispatch } from "@/hooks/hooks";
import { toggleSidebar } from "@/features/auth/sidebarSlice";

const SidebarHeader: React.FC = () => {
	const dispatch = useAppDispatch();

	/**
	 * The handleToggleSidebar function dispatches an action to toggle the sidebar.
	 */
	const handleToggleSidebar = () => {
		dispatch(toggleSidebar());
	};

	return (
		<header className="sidebar-head">
			<FiMenu color="white" size={30} className="icons" onClick={handleToggleSidebar} />
		</header>
	);
};

export default SidebarHeader;
