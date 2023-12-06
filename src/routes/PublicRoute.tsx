import PublicLayout from "@/layout/public";
import React from "react";
import { Outlet } from "react-router-dom";

const PublicRoute = () => {
	return (
		<PublicLayout>
			<Outlet />
		</PublicLayout>
	);
};

export default PublicRoute;
