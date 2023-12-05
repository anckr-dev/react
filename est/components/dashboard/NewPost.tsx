import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { routePath } from "@/constants";
import { newPost } from "@/assets/image/images";
import { ButtonElement } from "@/components";

const NewPost: FC = () => {
	const navigate = useNavigate();
	return (
		<ButtonElement
			text="Post"
			onClick={() => {
				navigate(routePath.JOBCANDIDATE);
			}}
			btnClassName="new-post-button"
			imageUrl={newPost}
			btnImageCss="new-post-icon"
		/>
	);
};

export default NewPost;
