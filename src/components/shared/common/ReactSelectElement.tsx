import React from "react";
import Select, { components } from "react-select";
import { IoMdArrowDropdown } from "react-icons/io";

interface Option {
	value: string;
	label: string;
}

interface ReactSelectProps {
	wrapperClass?: string;
	placeholder?: string;
	isMulti?: boolean;
	options: Option[];
	maxSelection?: number;
	isClearable?: boolean;
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const DropdownIndicator = (props: any) => {
	return (
		<components.DropdownIndicator {...props}>
			<IoMdArrowDropdown size={30} color="black" />
		</components.DropdownIndicator>
	);
};

const ReactSelectElement: React.FC<ReactSelectProps> = ({
	wrapperClass,
	placeholder,
	isMulti,
	options,
	maxSelection = 4,
	isClearable = false,
}) => {
	return (
		<div className={wrapperClass}>
			<Select
				options={options}
				classNames={{
					control: (state) => (state.isFocused ? "border-red-600" : "border-grey-300"),
				}}
				isMulti={isMulti}
				className="react-multi-select-div"
				placeholder={placeholder}
				components={{ DropdownIndicator }}
				isClearable={isClearable}
			/>
		</div>
	);
};

export default ReactSelectElement;
