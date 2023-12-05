import { ButtonElement, SearchBar } from "@/components";
import ReactSelectElement from "@/components/shared/common/ReactSelectElement";
import { timeOptions } from "@/constants";
import React, { useState } from "react";

interface Companies {
	id: number;
	searchValue: string;
	onSelect: string;
}
const Company = () => {
	const [companies, setCompanies] = useState<Companies[]>([{ id: 1, searchValue: "", onSelect: "" }]);
	const [nextCompanyId, setNextCompanyId] = useState(2);

	const addCompany = () => {
		setCompanies([...companies, { id: nextCompanyId, searchValue: "", onSelect: "" }]);
		setNextCompanyId(nextCompanyId + 1);
	};

	const updateCompany = (id: number, field: string, value: string | number) => {
		const updatedCompanies = companies.map((company) => {
			if (company.id === id) {
				return { ...company, [field]: value };
			}
			return company;
		});

		setCompanies(updatedCompanies);
	};

	const removeCompany = (id: number) => {
		const indexToRemove = companies.findIndex((industry) => industry.id === id);
		if (indexToRemove !== -1) {
			const updatedIndustries = [...companies];
			updatedIndustries.splice(indexToRemove, 1);
			setCompanies(updatedIndustries);
		}
	};

	return (
		<div className="company-container-wrapper">
			<div className="additional-subtitle mt-20">Companies</div>
			{companies.map((company) => (
				<div className="company-search-wrapper" key={company.id}>
					<SearchBar
						placeholder="Start typing to search and select companies"
						paramNames="company-name"
						onSearch={(value) => updateCompany(company.id, "searchValue", value)}
					/>
					<div className="company-select">
						<span>Include</span>
						<ReactSelectElement isMulti={false} wrapperClass="company-select-wrapper " options={timeOptions} />
					</div>

					<ButtonElement text="Remove" onClick={() => removeCompany(company.id)} btnClassName="remove-industry-btn" />
				</div>
			))}

			<ButtonElement text="+ Add a company" onClick={addCompany} btnClassName="add-industry-btn" />
		</div>
	);
};

export default Company;
