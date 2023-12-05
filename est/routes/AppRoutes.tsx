import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoute from "./PublicRoute";
import { routePath } from "@/constants";
import Login from "@/pages/auth";
import Jobs from "@/pages/jobs";
import Candidate from "@/pages/candidate";
import ForgotPassword from "@/pages/forgotPassword";
import { Setting } from "@/components";
import Home from "@/pages/home";
import Notifications from "@/pages/notifications";
import CustomErrorBoundary from "@/components/customErrorBoundary";
import ErrorComponent from "@/components/errorComponent/ErrorComponent";
import PageNotFound from "@/pages/pageNotFound";
import UserDetails from "@/pages/notifications/UserDetails";
import CandidateDetails from "@/components/candidate/CandidateDetails";
import JobDashboard from "@/components/jobs/JobDashboard";

const AppRoutes = () => {
	return (
		<>
			<Routes>
				<Route element={<PrivateRoutes />}>
					<Route path={routePath.HOME} element={<Home />} />
					<Route path={routePath.JOB} element={<Jobs />} />
					<Route path={routePath.CANDIDATE} element={<Candidate />} />
					<Route path={routePath.NOTIFICATION} element={<Notifications />} />
					<Route path={routePath.GETUSER} element={<UserDetails />} />
					<Route path={routePath.JOBCANDIDATES} element={<CandidateDetails />} />
					<Route path={routePath.JOBID} element={<JobDashboard />} />

					<Route
						path={routePath.ERRORCOMPONENT}
						element={
							<CustomErrorBoundary>
								<ErrorComponent />
							</CustomErrorBoundary>
						}
					/>
					<Route path={routePath.SETTING} element={<Setting />} />
					<Route path={routePath.PageNotFound} element={<PageNotFound />} />
				</Route>
				<Route element={<PublicRoute />}>
					<Route path={routePath.LOGIN} element={<Login />} />
					<Route path={routePath.FORGOTPASSWORD} element={<ForgotPassword />} />
				</Route>
			</Routes>
		</>
	);
};

export default AppRoutes;
