import React, { FC, useEffect, useRef, useState } from "react";
import { ButtonElement, Image } from "@/components";
import { action, oval } from "@/assets/image/images";
import { STRING } from "@/constants";
import { useNavigate } from "react-router-dom";

const ListingTableBody: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [selectedOption, setSelectedOption] = useState<string>("Paused");
	const dropdownRef = useRef<HTMLDivElement | null>(null);
	const navigate = useNavigate();

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleOptionClick = (option: string) => {
		setSelectedOption(option);
		setIsOpen(false);
	};

	const spent = 90;
	const percentageRemaining = (spent / 100) * 100;

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div className="listing-body" onClick={() => navigate("/jobs/id")}>
			<div className="body-job-title w-40">
				<Image src={oval} alt="hrr" className="body-job-pic" />
				<div className="body-job-text">User Experience Researcher</div>
			</div>
			<div className="body-background  w-10">
				<div className="active-candidate">4</div>
				<div className="active-candidate-btn">2 · New</div>
			</div>
			<div className="body-background w-10">
				<div className="applicant">6 of 40 · applied</div>
			</div>
			<div className="body-background w-10">
				<div
					className="spent"
					role="progressbar"
					style={{ width: `${percentageRemaining}%` }}
					aria-valuenow={percentageRemaining}
					aria-valuemin={0}
					aria-valuemax={100}
				>
					{spent}
				</div>
			</div>
			<div className="body-background posted w-10">
				<span className="posted">Mar 7 · 2022</span>
			</div>
			<div className="body-background w-10" ref={dropdownRef}>
				<div className="action-main">
					<div className="action-text">{selectedOption}</div>
					<ButtonElement btnClassName="action-btn" aria-hidden={true} onClick={toggleDropdown} imageUrl={action} />
					{isOpen && (
						<div className="sorting-options">
							<ButtonElement
								onClick={() => handleOptionClick(STRING.ACTIVE)}
								text="Active"
								btnClassName="dropdown-option"
							/>
							<ButtonElement
								onClick={() => handleOptionClick(STRING.PAUSED)}
								text="Paused"
								btnClassName="dropdown-option"
							/>
							<ButtonElement
								onClick={() => handleOptionClick(STRING.ARCHIVED)}
								text="Achieved"
								btnClassName="dropdown-option"
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ListingTableBody;
