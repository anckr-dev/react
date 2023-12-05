import { ImageProps } from "@/interface";
import React, { useState } from "react";

const Image: React.FC<ImageProps> = ({ src, alt, className, width, height, placeholderSrc }) => {
	const [error, setError] = useState(false);

	/**
	 * The function `handleImageError` sets an error state to true.
	 */
	const handleImageError = () => {
		setError(true);
	};

	return (
		<>
			{error ? (
				<img src={placeholderSrc || ""} alt="Placeholder" className={className} width={width} height={height} />
			) : (
				<img src={src} alt={alt} className={className} width={width} height={height} onError={handleImageError} />
			)}
		</>
	);
};

export default Image;
