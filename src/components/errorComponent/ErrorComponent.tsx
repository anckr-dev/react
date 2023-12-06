import React, { FC, useEffect } from "react";
import { useErrorBoundary } from "react-error-boundary";

const ErrorComponent: FC = () => {
	const { showBoundary } = useErrorBoundary();

	useEffect(() => {
		// Simulate an API call with a timeout
		const fetchData = async () => {
			try {
				// Replace this with your actual API call
				const response = await fetch("https://dummyjson.com/products/1");
				if (response.ok) {
					throw new Error("API request failed");
				}
				// Process the response data
				const data = await response.json();
				console.log("API data:", data);
			} catch (error) {
				// Handle the API request error and show it with the error boundary
				showBoundary(error);
				console.log("API error:", error);
			}
		};

		fetchData();
	}, [showBoundary]);

	return (
		<div>
			<div>An error occurred. This won't be rendered due to the error.</div>
		</div>
	);
};

export default ErrorComponent;
