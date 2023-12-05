import React, { FC } from "react";
import { ChangePassword, EmailChange, CompanyDetailsEdit } from "@/components";

const ProfileEdit: FC = () => {
	return (
		<div className="profile-section-edit">
			<div className="component-border">
				<CompanyDetailsEdit />
			</div>
			<div className="component-border">
				<EmailChange label="Change Login Email" />
			</div>
			<div className="component-border">
				<EmailChange label="Change Login Email for 2FA" />
			</div>
			<div className="component-border">
				<ChangePassword />
			</div>
		</div>
	);
};

export default ProfileEdit;
