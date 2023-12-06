import { InputProps } from "@/interface";
import React from "react";

const InputElement: React.FC<InputProps> = ({
	name,
	label,
	type,
	register,
	error,
	className,
	wrapperClass,
	labelClass,
	isLabel,
}) => {
	return (
		<div>
			{isLabel && <label className={labelClass}>{label}</label>}
			<div className={wrapperClass}>
				<input {...register(name)} type={type} id={name} placeholder={label} className={className} autoComplete="off" />
			</div>
			{error && <p className="error">{error.message}</p>}
		</div>
	);
};
export default InputElement;
