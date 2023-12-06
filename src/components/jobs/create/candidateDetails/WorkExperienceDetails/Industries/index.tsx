import React, { FC, useState } from "react";
import { ButtonElement, CheckboxElement, RangeSelect, SearchBar } from "@/components";

interface Industry {
	id: number;
	searchValue: string;
	rangeValue: number;
}

const Industries: FC = () => {
	const [industries, setIndustries] = useState<Industry[]>([{ id: 1, searchValue: "", rangeValue: 10 }]);
	const [nextIndustryId, setNextIndustryId] = useState(2);

	const addIndustry = () => {
		setIndustries([...industries, { id: nextIndustryId, searchValue: "", rangeValue: 10 }]);
		setNextIndustryId(nextIndustryId + 1);
	};

	const updateIndustry = (id: number, field: string, value: string | number) => {
		const updatedIndustries = industries.map((industry) => {
			if (industry.id === id) {
				return { ...industry, [field]: value };
			}
			return industry;
		});

		setIndustries(updatedIndustries);
	};

	const removeIndustry = (id: number) => {
		const indexToRemove = industries.findIndex((industry) => industry.id === id);
		if (indexToRemove !== -1) {
			const updatedIndustries = [...industries];
			updatedIndustries.splice(indexToRemove, 1);
			setIndustries(updatedIndustries);
		}
	};

	return (
		<div className="industry-container-wrapper">
			<div className="additional-subtitle mt-20">Industries</div>
			<CheckboxElement
				label="Candidates must have all listed skills in order to see this job"
				initialState={false}
				wrapperClass="mt-20"
			/>
			<div className="industry-search-bar">
				{industries.map((industry) => (
					<div key={industry.id} className="industry-search-bar">
						{industry.id !== 1 && (
							<>
								<ButtonElement
									text=""
									onClick={() => removeIndustry(industry.id)}
									btnClassName="remove-industry-btn fa-solid fa-xmark"
								/>
							</>
						)}

						<SearchBar
							onSearch={(value) => updateIndustry(industry.id, "searchValue", value)}
							placeholder="Search for industry"
						/>
						<div className="additional-subtitle mt-20">Years of Experience</div>

						<RangeSelect min={0} max={5} className="range-select-wrapper" step={1} />
					</div>
				))}
			</div>

			<ButtonElement text="+ Add an industry" onClick={addIndustry} btnClassName="add-industry-btn" />
		</div>
	);
};

export default Industries;
