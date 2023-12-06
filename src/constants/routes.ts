/* The code is exporting a constant object called `routePath`. This object contains various key-value
pairs, where each key represents a specific route path and the corresponding value is the actual
path string. */

export const routePath = {
	HOME: "/",
	HOMETABACTIVE: "/?tab=active",
	HOMETABDRAFT: "/?tab=draft",
	HOMETABEXPIRED: "/?tab=expired",
	HOMETABACHIEVED: "/?tab=achieved",
	PageNotFound: "*",
	LOGIN: "/login",
	ADMIN: "/admin",
	JOB: "/jobs",
	JOBID: "/jobs/id",
	JOBCANDIDATE: "/jobs?create=candidate",
	JOBDESCRIPTION: "/jobs?create=description",
	JOBREVIEW: "/jobs?create=review",
	CANDIDATE: "/candidate",
	NOTIFICATION: "/notification",
	GETUSER: "/notification/:id",
	FORGOTPASSWORD: "/forgot-password",
	SETTING: "/setting",
	SETTINGDEAFULT: "/setting?settingTab=account",
	SETTINGNOTIFICATION: "/setting?settingTab=email-notification",
	ERRORCOMPONENT: "/error-component",
	CANDIDATEDEAITLS: "/jobs/id?tab=candidate",
	JOBSDEAITLS: "/jobs/id?tab=jobs",
	JOBCANDIDATES: "/jobs/candidates",
};
