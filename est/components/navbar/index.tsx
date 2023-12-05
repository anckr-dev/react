import React, { FC } from "react";
import { Image, Profile } from "@/components";
import { Link, useLocation } from "react-router-dom";
import { routePath } from "@/constants";
import { NavbarProps } from "@/interface";
import { logo } from "@/assets/image/images";
// import SidebarHeader from "../sidebar/SidebarHeader";
const Navbar: FC<NavbarProps> = ({ tabs, auth, user }) => {
	const location = useLocation();

	return (
		<nav className="navbar">
			<div className="left-nav">
				{/* {auth ? <SidebarHeader /> : null} */}

				<Link to={routePath.HOME}>
					<Image src={logo} alt="Example Image" className="custom-image" width={40} height={40} placeholderSrc={logo} />
				</Link>
				{tabs?.map((tab, index) => (
					<Link
						to={tab.route}
						className={location.pathname === tab.route ? "active-nav remove-underline" : "remove-underline"}
						key={index.toString()}
					>
						{tab.label}
					</Link>
				))}
			</div>
			{auth ? <Profile /> : null}
		</nav>
	);
};

export default Navbar;
