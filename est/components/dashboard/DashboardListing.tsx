import React, { FC } from "react";
import ListingTableBody from "./ListingTableBody";
import ListingTableHead from "./ListingTableHead";

const DashboardListing: FC = () => {
	return (
		<div className="listing-main">
			<ListingTableHead />
			<ListingTableBody />
			<ListingTableBody />
		</div>
	);
};

export default DashboardListing;
