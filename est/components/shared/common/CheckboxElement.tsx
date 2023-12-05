import { CheckboxElementProps } from "@/interface";
import React, { useState } from "react";

const CheckboxElement: React.FC<CheckboxElementProps> = ({
	label,
	initialState,
	onCheckboxChange,
	wrapperClass,
	isGreen,
}) => {
	const [checked, setChecked] = useState<boolean>(initialState);

	const handleCheckboxChange = () => {
		const newChecked = !checked;
		setChecked(newChecked);
		if (onCheckboxChange) {
			onCheckboxChange(newChecked);
		}
	};

	return (
		<div className={`checkbox-wrapper ${isGreen ? "green-checkbox" : "black-checkbox"} ${wrapperClass}`}>
			<input type="checkbox" checked={checked} onChange={handleCheckboxChange} />
			<label>{label}</label>
		</div>
	);
};

export default CheckboxElement;
