import { STRING, routePath } from "@/constants";
import PrivateLayout from "@/layout/private";
import { getDataFromLocalStorage } from "@/utils/helper";
import React, { FC, useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

const PrivateRoutes: FC = () => {
	const auth = getDataFromLocalStorage(STRING.USERDETAILS);
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (!auth) {
			navigate(`/login?toRedirect=${location.pathname}`);
		}
	}, [auth, location.pathname, navigate]);

	return auth ? (
		<PrivateLayout auth={auth}>
			<Outlet />
		</PrivateLayout>
	) : (
		<Navigate to={routePath.LOGIN} />
	);
};

export default PrivateRoutes;
