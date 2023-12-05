import { ButtonElement, Image, Loader } from "@/components";
import { getUserById } from "@/features/users/userSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { GetUser } from "@/interface";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const [user, setUser] = useState<GetUser | null>(null);
	const { loading, user: singleUser } = useAppSelector((state) => state.user);
	const [value, setValue] = useState({
		firstName: "",
		lastName: "",
	});

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await dispatch(getUserById(Number(id)));
				setUser(data.payload);
				const res = data.payload;
				console.log("type", typeof data.payload);
				setValue({
					firstName: res.firstName,
					lastName: res.lastName,
				});
			} catch (error) {
				console.error("An error occurred while fetching data:", error);
			}
		};

		getData();
	}, [dispatch, id]);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setValue((prevValue) => ({
			...prevValue,
			[name]: value,
		}));
	};
	const handleSubmit = async () => {
		console.log("updateed user", value);
	};

	console.log("singleUser", singleUser);
	return (
		<div className="user-wrapper">
			<div className="user-card">
				{loading ? <Loader /> : null}
				{user ? (
					<>
						<Image src={user?.image} alt="hello" className="image--cover" />
						<div className="form-group mt-20 ">
							<span>First Name</span>
							<input
								type="text"
								className="form-input"
								name="firstName"
								placeholder="First Name"
								required
								value={value.firstName}
								onChange={handleChange}
							/>
						</div>
						<div className="form-group mt-20 ">
							<span>Last Name</span>
							<input
								type="text"
								className="form-input"
								name="lastName"
								placeholder="Last Name"
								required
								value={value.lastName}
								onChange={handleChange}
							/>
						</div>
						<div className="form-group mt-20 ">
							<span>Email Address</span>
							<input
								type="text"
								className="form-input"
								name="email"
								placeholder="Email Address"
								required
								value={value.lastName}
								onChange={handleChange}
							/>
						</div>
						<div className="form-group mt-20 ">
							<ButtonElement text="Update" btnClassName="button-24" onClick={() => handleSubmit()} />
						</div>
					</>
				) : null}
			</div>
		</div>
	);
};

export default UserDetails;
