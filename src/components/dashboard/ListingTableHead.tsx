import React, { FC } from "react";

const ListingTableHead: FC = () => {
	return (
		<div className="listing-title">
			<div className="table-title title-job w-40">Jobs</div>
			<div className="table-title w-10">Active candidates</div>
			<div className="table-title w-10">Applicants</div>
			<div className="table-title w-10 ">Spent</div>
			<div className="table-title w-10">Posted</div>
			<div className="table-title w-10">Status</div>
		</div>
	);
};

export default ListingTableHead;
