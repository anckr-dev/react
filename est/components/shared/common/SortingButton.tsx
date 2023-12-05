import React, { useState, useEffect, useRef } from "react";
import { ButtonElement } from "@/components";
import { SORTBY } from "@/constants";

const SortingButton: React.FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [selectedOption, setSelectedOption] = useState<string>(SORTBY.MOSTRECENT);
	const dropdownRef = useRef<HTMLDivElement | null>(null);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleOptionClick = (option: string) => {
		setSelectedOption(option);
		setIsOpen(false);
	};

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
		<div className="sorting-button-container">
			<div className="sorting-button">Sort By</div>
			{isOpen && (
				<div className="sorting-options" ref={dropdownRef}>
					<ButtonElement
						onClick={() => handleOptionClick(SORTBY.MOSTRECENT)}
						text="Most Recent"
						btnClassName="dropdown-option"
					/>
					<ButtonElement onClick={() => handleOptionClick(SORTBY.ATOZ)} text="A to Z" btnClassName="dropdown-option" />
					<ButtonElement onClick={() => handleOptionClick(SORTBY.ZTOA)} text="Z to A" btnClassName="dropdown-option" />
				</div>
			)}
			<div className="selected-option">
				{selectedOption}
				<ButtonElement
					btnClassName={`fa ${isOpen ? "fa-chevron-up" : "fa-chevron-down"} toggle-drop`}
					aria-hidden={true}
					onClick={toggleDropdown}
				/>
			</div>
		</div>
	);
};

export default SortingButton;
