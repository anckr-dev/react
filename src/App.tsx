import React, { Fragment } from "react";
import "./assets/scss/main.scss";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "@/routes/AppRoutes";
import { Toaster } from "./components";

function App() {
	return (
		<Fragment>
			<Toaster />
			<AppRoutes />
		</Fragment>
	);
}

export default App;
