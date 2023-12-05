import React from "react";
import ButtonElement from "../shared/common/ButtonElement";
import { useNavigate } from "react-router-dom";

const ErrorBoundaryFallback = () => {
	const navigate = useNavigate();

	const handleReloadPage = () => {
		navigate("/");
	};
	return (
		<div className="error-page">
			<div className="error-content">
				<h1>Something went wrong</h1>
				<p>We're sorry, but something unexpected happened.</p>
				<p>Please try refreshing the page or contact support if the issue persists.</p>
				<ButtonElement text="Go to Home Page" btnClassName="new-post-button" onClick={handleReloadPage} />
			</div>
		</div>
	);
};

export default ErrorBoundaryFallback;
