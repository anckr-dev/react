import { ReactNode } from "react";
import { FieldError } from "react-hook-form";

export interface ButtonElementProps {
	text?: string;
	type?: "reset" | "submit" | undefined;
	btnClassName?: string;
	imageUrl?: string;
	onClick?: () => void;
	disabled?: boolean;
	btnImageCss?: string;
}

export interface FloatingLabelInputProps {
	label: string;
	onChange: React.ChangeEventHandler;
}
export interface ImageProps {
	src?: string;
	alt?: string;
	className?: string;
	width?: number;
	height?: number;
	placeholderSrc?: string;
}

export interface Tab {
	label: string;
	route: string;
}

export interface NavbarProps {
	tabs?: Tab[];
	auth?: boolean;
	user?: Array<User>;
}

export interface LoginFormInputs {
	username: string;
	password: string;
}

export interface CompanyFormInputs {
	companyName: string;
	companyBio: string;
}
export interface ChangePasswordFormInputs {
	currentPassword: string;
	newPassword: string;
	confirmNewPassword: string;
}
export interface EmailChangeFormInputs {
	email: string;
}
export interface LayoutProps {
	children: ReactNode;
	auth?: boolean;
}

export interface InputProps {
	name: string;
	label: string;
	type: string;
	className?: string;
	wrapperClass?: string;
	labelClass?: string;
	isLabel?: boolean;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	register: any;
	error: FieldError | undefined;
}

export interface TabData {
	index: number;
	buttonText: string;
	imageUrl?: string;
	activeClass?: string;
	imageCss?: string;
	tabClassName?: string;
	path?: string;
	endpoint?: string;
}

export interface ButtonTabElementProps {
	tabs: TabData[];
	buttonContainer?: string;
	defaultRoute?: string;
	tabName: string;
}

export interface DashboardHeaderProps {
	title?: string;
	subtitle?: string;
	backButtonPath?: string;
}

// authSlice
export interface User {
	id: string;
	username: string;
	email: string;
	firstName: string;
	lastName: string;
	gender: string;
	token: string;
}

export interface AuthState {
	loading: boolean;
	error: string | null;
	user: Array<User>;
}

export interface ProfilerProps {
	user: User;
}

export interface CheckboxElementProps {
	label?: string;
	initialState: boolean;
	onCheckboxChange?: (newState: boolean) => void;
	wrapperClass?: string;
	isGreen?: boolean;
}

export interface RangeSelectProps {
	min: number;
	max: number;
	className?: string;
	step?: number;
}

export interface CustomAccordionProps {
	isCheckbox?: boolean;
	onCheckboxChange?: (checked: boolean) => void;
	sectionName?: string;
	checked: boolean;
	content?: React.ReactNode;
	dataRequest?: string;
}

export interface GetUser {
	id: string;
	firstName: string;
	lastName: string;
	maidenName: string;
	age: number;
	gender: string;
	email: string;
	phone: string;
	username: string;
	password: string;
	birthDate: string;
	image: string;
	bloodGroup: string;
	height: number;
	weight: number;
	eyeColor: string;
	hair: {
		color: string;
		type: string;
	};
	domain: string;
	ip: string;
	address: {
		address: string;
		city: string;
		coordinates: {
			lat: number;
			lng: number;
		};
		postalCode: string;
		state: string;
	};
	macAddress: string;
	university: string;
	bank: {
		cardExpire: string;
		cardNumber: string;
		cardType: string;
		currency: string;
		iban: string;
	};
	company: {
		address: {
			address: string;
			city: string;
			coordinates: {
				lat: number;
				lng: number;
			};
			postalCode: string;
			state: string;
		};
		department: string;
		name: string;
		title: string;
	};
	ein: string;
	ssn: string;
	userAgent: string;
}

export interface UserState {
	loading: boolean;
	error: string | null;
	users: Array<GetUser>;
}

export interface UsersData {
	users: Array<GetUser>;
	limit?: number;
	total?: number;
	skip?: number;
}

export interface UsersState {
	loading: boolean;
	error: string | null;
	users: UsersData[];
	user: GetUser;
}

interface WorkExperience {
	companyName: string;
	position: string;
	location: string;
	description: string;
	startDate: string;
	endDate: string;
}
interface skills {
	name: string;
	level: string;
}
interface certifications {
	name: string;
}
interface educations {
	universityName: string;
	degreeName: string;
	startYear: string;
	endYear: string;
}

export interface Candidate {
	name: string;
	designation: string;
	contactNumber: string;
	email: string;
	officialEmail: string;
	location: string;
	workExperience: WorkExperience[];
	skills: skills[];
	certifications: certifications[];
	awards: certifications[];
	educations: educations[];
}

export interface CandidateDetailsCardProps {
	data: {
		name: string;
		designation: string;
		contactNumber: string;
		email: string;
		officialEmail: string;
		location: string;
		workExperience: WorkExperience[];
		skills: skills[];
		certifications: certifications[];
		awards: certifications[];
		educations: educations[];
	};
}
