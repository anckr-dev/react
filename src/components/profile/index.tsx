import React, { useState, useEffect, useRef, FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { clearLocalStorageByKey, getDataFromLocalStorage } from "@/utils/helper";
import { STRING, routePath } from "@/constants";
import { Image } from "@/components";

const Profile: FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();
	const dropdownRef = useRef<HTMLDivElement | null>(null);
	const user = getDataFromLocalStorage(STRING.USERDETAILS);

	const toggleNav = () => {
		setIsOpen(!isOpen);
	};

	const closeDropdown = (e: MouseEvent) => {
		if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", closeDropdown);
		return () => {
			document.removeEventListener("mousedown", closeDropdown);
		};
	}, [dropdownRef]);

	const handleLogout = () => {
		clearLocalStorageByKey(STRING.USERDETAILS);
		navigate(routePath.LOGIN);
	};

	return (
		<div
			className="right-nav"
			onClick={toggleNav}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === "Space") {
					toggleNav();
				}
			}}
		>
			<div className="name-text">
				<div className="name-title">
					{user.firstName} {user.lastName}
				</div>
				<div className="name-org">{user.username}</div>
			</div>
			<Image src={user.image} height={40} width={40} alt="d" placeholderSrc="sss" className="profile-pic" />
			{isOpen && (
				<div className="dropdown-options" ref={dropdownRef}>
					<div className="arrow" />
					<Link className="dropdown-option" to={routePath.SETTINGDEAFULT}>
						Account
					</Link>
					<Link className="dropdown-option" to={routePath.SETTINGNOTIFICATION}>
						Email Notification
					</Link>
					<span
						className="dropdown-option"
						onClick={handleLogout}
						onKeyDown={(e) => {
							if (e.key === "Enter" || e.key === "Space") {
								handleLogout();
							}
						}}
					>
						Logout
					</span>
				</div>
			)}
		</div>
	);
};

export default Profile;
