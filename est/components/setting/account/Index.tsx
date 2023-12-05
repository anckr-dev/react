import React, { FC } from "react";
import { CustomAccordion, ProfileEdit } from "@/components";

// interface CheckboxState {
// 	[key: string]: boolean;
// }

const Account: FC = () => {
	// const [checkboxState, setCheckboxState] = useState<CheckboxState>({
	// 	profile: true,
	// });
	// const handleCheckboxChange = (sectionName: string, checked: boolean) => {
	// 	setCheckboxState((prevState) => ({
	// 		...prevState,
	// 		[sectionName]: checked,
	// 	}));
	// };

	return <CustomAccordion isCheckbox={true} sectionName="Profile" checked={true} content={<ProfileEdit />} />;
};

export default Account;
