import { ButtonElementProps } from "@/interface";
import React from "react";

const ButtonElement: React.FC<ButtonElementProps> = ({
	text,
	imageUrl,
	onClick,
	btnClassName,
	disabled,
	btnImageCss,
	type,
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={disabled ? "company-btn-disable" : btnClassName}
			disabled={disabled}
		>
			{text}
			{imageUrl && <img src={imageUrl} alt="Button Icon" className={btnImageCss} />}
		</button>
	);
};

export default ButtonElement;
