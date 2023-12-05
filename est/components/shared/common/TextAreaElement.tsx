import { InputProps } from "@/interface";
import React from "react";

const TextAreaElement: React.FC<InputProps> = ({
	name,
	label,
	register,
	error,
	className,
	labelClass,
	isLabel,
	wrapperClass,
}) => {
	return (
		<div>
			{isLabel && (
				<label htmlFor={name} className={labelClass}>
					{label}
				</label>
			)}
			<div className={wrapperClass}>
				<textarea {...register(name)} id={name} placeholder={label} className={className} style={{ height: "150px" }} />
			</div>
			{error && <p className="error">{error.message}</p>}
		</div>
	);
};

export default TextAreaElement;
