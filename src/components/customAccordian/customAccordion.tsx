import React, { FC, useState } from "react";
import { CustomAccordionProps } from "@/interface";
import { CheckboxElement } from "@/components";

const CustomAccordion: FC<CustomAccordionProps> = ({
	isCheckbox = true,
	onCheckboxChange,
	sectionName,
	checked = true,
	content,
	dataRequest,
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleAccordionClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setIsOpen(!isOpen);
	};

	const handleCheckbox = (isChecked: boolean) => {
		if (onCheckboxChange) {
			onCheckboxChange(isChecked);
		}
	};

	return (
		<div>
			<div className="accordion-container">
				<div className={`accordion-header-container-${checked ? "active" : "inActive"} `}>
					<div className="accordion-header-button-div">
						{isCheckbox && (
							<CheckboxElement
								initialState={checked}
								isGreen={false}
								onCheckboxChange={handleCheckbox}
								wrapperClass="mt-5"
							/>
						)}
						<button
							type="button"
							onClick={handleAccordionClick}
							className={`accordion-header-btn-${checked ? "active" : "inActive"}`}
						>
							{sectionName}
							<i
								className={`header-btn-icon fa fa-chevron-down${isOpen ? " rotate-icon rotated" : ""}`}
								aria-hidden="true"
							/>
						</button>
					</div>
					{dataRequest ? (
						<div className={`accordion-data-request-${checked ? "active" : "inActive"}`}>
							{dataRequest} data request
						</div>
					) : null}
				</div>
				<div className={`accordion-body-container ${isOpen ? "show" : "hide"}`}>{content}</div>
			</div>
		</div>
	);
};

export default CustomAccordion;
