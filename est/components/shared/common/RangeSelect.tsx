import { RangeSelectProps } from "@/interface";
import { logger } from "@/utils";
import React, { useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const RangeSelect: React.FC<RangeSelectProps> = ({ min, max, className, step }) => {
	const [value, setValue] = useState({ min, max });

	const handleChange = (newValue: { min: number; max: number }) => {
		setValue(newValue);
	};

	const handleRangeChange = (newValue: number | { min: number; max: number }) => {
		logger.log("newvalue", newValue);
		if (typeof newValue === "number") {
			logger.log("single value", newValue);
		} else {
			handleChange(newValue);
		}
	};

	return (
		<div className={className}>
			<InputRange minValue={min} maxValue={max} value={value} onChange={handleRangeChange} step={step} />
		</div>
	);
};

export default RangeSelect;
