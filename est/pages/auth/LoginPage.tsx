import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { Loader, Image, InputElement, ButtonElement } from "@/components";
import { LoginFormInputs } from "@/interface";
import { getDataFromLocalStorage, getQueryParam } from "@/utils/helper";
import { loginUser } from "@/features/auth/authSlice";
import { logo } from "@/assets/image/images";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { LOGIN_VALIDATION_SCHEMA, STRING, routePath } from "@/constants";

const LoginForm = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { loading } = useAppSelector((state) => state.auth);
	const targetRoute = getQueryParam("toRedirect");

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormInputs>({
		resolver: yupResolver(LOGIN_VALIDATION_SCHEMA),
	});

	useEffect(() => {
		const auth = getDataFromLocalStorage(STRING.AUTHTOKEN);
		if (auth) {
			navigate(routePath.HOME);
		}
	}, [navigate]);

	/**
	 * Handles the form submission when the login form is submitted.
	 * Dispatches the `loginUser` action with the form data and redirects the user to the specified route if the login is successful.
	 * @param data - The form data submitted by the user.
	 */

	const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
		try {
			const result = await dispatch(loginUser(data));
			const redirectTo = targetRoute || routePath.HOME;
			if (result.payload) {
				navigate(redirectTo);
			}
		} catch (error) {
			console.error("An error occurred during login:", error);
		}
	};

	return (
		<>
			{loading ? <Loader /> : null}
			<form onSubmit={handleSubmit(onSubmit)} className="login-form">
				<Image
					src={logo}
					alt="logo"
					className="custom-image"
					width={70}
					height={50}
					placeholderSrc="https://b.zmtcdn.com/images/res_avatar_476_320_1x_new.png"
				/>
				<div className="form-header">
					<div className="login-title mt-20">Welcome to ANCKR</div>
					<div className="login-subtitle ">Please login below :</div>
				</div>
				<InputElement
					name="username"
					label="Username"
					type="text"
					register={register}
					error={errors.username}
					className="form-input"
					wrapperClass="form-group mt-10"
				/>
				<InputElement
					name="password"
					label="Password"
					type="password"
					register={register}
					error={errors.password}
					className="form-input"
					wrapperClass="form-group"
				/>
				<Link to={routePath.FORGOTPASSWORD} className="login-forgot-password">
					Forgot password ?
				</Link>
				<ButtonElement text="Login" btnClassName="form-button" />
			</form>
		</>
	);
};

export default LoginForm;
