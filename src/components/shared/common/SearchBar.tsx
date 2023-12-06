import { useLocation, useNavigate } from "react-router-dom";
import { FC, useEffect, useState } from "react";
import { ButtonElement } from "@/components";
import { searchIcon } from "@/assets/image/images";

interface SearchBarProps {
	paramNames?: string;
	onSearch: (query: string) => void;
	placeholder?: string;
	extraClass?: string;
}

const SearchBar: FC<SearchBarProps> = ({ paramNames = "search", onSearch, placeholder, extraClass }) => {
	const [searchValue, setSearchValue] = useState<string>("");
	const navigate = useNavigate();
	const url = useLocation();

	useEffect(() => {
		const searchParams = new URLSearchParams(url.search);
		const query = searchParams.get(paramNames);
		if (query) {
			setSearchValue(query);
		} else {
			setSearchValue("");
		}
	}, [url, paramNames]);

	const handleSearch = () => {
		const searchParams = new URLSearchParams(url.search); // Check if "search" parameter exists
		if (searchParams.has(paramNames)) {
			// If it exists, update it
			searchParams.set(paramNames, searchValue);
		} else {
			// If it doesn't exist, add it
			searchParams.append(paramNames, searchValue);
		}
		// Generate the updated URL
		const updatedUrl = `${url.pathname}?${searchParams.toString()}`;
		// Navigate to the updated URL
		navigate(updatedUrl);
		onSearch(searchValue);
	};

	return (
		<div className={`search-bar ${extraClass}`}>
			<input
				placeholder={placeholder}
				className="search-input"
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						handleSearch();
					}
				}}
			/>
			<ButtonElement imageUrl={searchIcon} onClick={handleSearch} btnClassName="search-btn" />
		</div>
	);
};

export default SearchBar;
