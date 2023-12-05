import { ButtonElement, Image, Loader } from "@/components";
import { routePath } from "@/constants";
import { getUsers } from "@/features/users/userSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { GetUser } from "@/interface";
import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Notifications: FC = () => {
	const dispatch = useAppDispatch();
	const { loading } = useAppSelector((state) => state.user);
	const [value, setValue] = useState<GetUser[]>([]);
	const navigate = useNavigate();

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await dispatch(getUsers());
				setValue(data.payload.users);
			} catch (error) {
				console.error("An error occurred while fetching data:", error);
			}
		};

		getData();
	}, [dispatch]);

	return (
		<div>
			<h1>All Users</h1>
			{loading ? <Loader /> : null}
			<div className="user-wrapper">
				{value.map((user) => (
					<div className="user-card" key={user.id}>
						<h2 className="name">
							<span>{user.firstName}</span>
							<span> {user.lastName}</span>
						</h2>
						<Image src={user.image} alt={user.image} className="image--cover" />
						<div>
							<ButtonElement
								text="Edit"
								btnClassName="button-24"
								onClick={() => navigate(`${routePath.NOTIFICATION}/${user.id}`)}
							/>
							<ButtonElement text="Delete" btnClassName="button-24" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Notifications;
