import { LogLevel } from "@/utils/logger";

export const STRING = {
	JOBS: "jobs",
	HOME: "home",
	LOGIN: "login",
	ADMIN: "admin",
	JOB: "job",
	CANDIDATE: "Candidate",
	NOTIFICATION: "Notification",
	USERDETAILS: "userDetails",
	ACTIVETAB: "activeTab",
	TAB: "tab",
	ACTIVE: "active",
	EXPIRED: "expired",
	Draft: "drafts",
	ARCHIVED: "archived",
	SETTINGTAB: "settingTab",
	PAUSED: "Paused",
	AUTHORIZATION: "Authorization",
	AUTHTOKEN: "authToken",
	REQUESTFAILED400: "Request failed with status code 400",
	ACCESSDENIED: "Access Denied! Invalid Credentials",
	USER: "user",
	CREATE: "create",
	ISSIDEBAROPEN: "isSidebarOpen",
	TRUE: "true",
	SIDEBAR: "sidebar",
	Candidate: "candidate",
};

export const apiConstants = {
	USERS: "/users/",
	LOGIN: "/login",
};

export const ActionCreatorTitle = {
	AUTH_LOGIN: "auth/loginUser",
	USER: "users",
	USERBYID: "userById",
};

export const BOOLEANS = {
	TRUE: true,
	FALSE: false,
};

export const SORTBY = {
	ATOZ: "A TO Z",
	ZTOA: "Z TO A",
	MOSTRECENT: "Most Recent",
};

export type Environment = "development" | "production";

export const APP_ENV: Environment = process.env.REACT_APP_SERVER_NAME === "production" ? "production" : "development";

export const LOG_LEVEL: LogLevel = APP_ENV === "production" ? "warn" : "log";

export const HttpStatusCode = {
	UNAUTHORISED: 401,
	SUCCESS_REQUEST: 200,
	SUCCESS_CODE_202: 202,
	SUCCESS_CODE_201: 201,
	SUCCESS_CODE_204: 204,
};
