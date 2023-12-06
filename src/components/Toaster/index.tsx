import React from "react";
import { ToastContainer } from "react-toastify";

const Toaster: React.FC = () => {
	return (
		<ToastContainer
			position="top-center"
			autoClose={2000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme="light"
		/>
	);
};

export default Toaster;
