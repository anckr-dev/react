import React, { ErrorInfo, FC, ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryFallback from "./ErrorBoundaryFallback";

interface CustomErrorBoundaryProps {
	children: ReactNode;
}

const logError = (error: Error, info: ErrorInfo) => {};

const CustomErrorBoundary: FC<CustomErrorBoundaryProps> = ({ children }) => {
	return (
		<ErrorBoundary FallbackComponent={ErrorBoundaryFallback} onError={logError}>
			{children}
		</ErrorBoundary>
	);
};

export default CustomErrorBoundary;
