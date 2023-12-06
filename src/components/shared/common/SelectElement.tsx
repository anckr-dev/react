import React, { ChangeEvent } from "react";

interface Option {
	value: string;
	label: string;
}

interface SelectProps {
	options: Option[];
	onChange: (selectedValue: string) => void;
	title?: string;
}

const SelectElement: React.FC<SelectProps> = ({ options, onChange, title }) => {
	const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = event.target.value;
		onChange(selectedValue);
	};

	return (
		<div className="select-wrapper">
			<label>{title}</label>
			<select onChange={handleSelectChange} className="select-box">
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default SelectElement;
