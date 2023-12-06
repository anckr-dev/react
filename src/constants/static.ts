import { activeIcon, archived } from "@/assets/image/images";
import { STRING } from "./string";
import { routePath } from "./routes";
import { NUMBER } from "./number";
import { Candidate } from "@/interface";

/* The code is exporting a constant variable named `privateTabs`. It is an array of objects, where each
object represents a tab in a private section of a web application. Each object has two properties:
`label` and `route`. The `label` property represents the display name of the tab, and the `route`
property represents the URL route associated with the tab. The values for `label` and `route` are
imported from other modules (`STRING` and `routePath`). */

export const privateNavbar = [
	{ label: STRING.JOBS, route: routePath.JOB },
	{ label: STRING.CANDIDATE, route: routePath.CANDIDATE },
	{ label: STRING.NOTIFICATION, route: routePath.NOTIFICATION },
];

// export const publicTabs = [{ label: "Login", route: routePath.LOGIN }];

export const tabs = [
	{
		index: NUMBER.ZERO,
		buttonText: "Active",
		activeClass: "rainbow-button",
		tabClassName: "tab-button",
		imageUrl: activeIcon,
		imageCss: "left-icon",
		path: routePath.HOMETABACTIVE,
		endpoint: "active",
	},
	{
		index: NUMBER.ONE,
		buttonText: "Drafts",
		activeClass: "rainbow-button",
		tabClassName: "tab-button",
		path: routePath.HOMETABDRAFT,
		endpoint: "draft",
	},
	{
		index: NUMBER.TWO,
		buttonText: "Expired",
		activeClass: "rainbow-button",
		tabClassName: "tab-button",
		path: routePath.HOMETABEXPIRED,
		endpoint: "expired",
	},
	{
		index: NUMBER.THREE,
		buttonText: "Archived",
		activeClass: "rainbow-button",
		tabClassName: "tab-button",
		imageCss: "right-icon",
		imageUrl: archived,
		path: routePath.HOMETABACHIEVED,
		endpoint: "achieved",
	},
];

export const settingTab = [
	{
		index: NUMBER.ZERO,
		buttonText: "Account",
		activeClass: "active-btn",
		tabClassName: "navigation-btn",
		path: routePath.SETTINGDEAFULT,
		endpoint: "account",
	},
	{
		index: NUMBER.ONE,
		buttonText: "Email Notification",
		activeClass: "active-btn",
		tabClassName: "navigation-btn",
		path: routePath.SETTINGNOTIFICATION,
		endpoint: "email-notification",
	},
];

export const createJobTab = [
	{
		index: NUMBER.ZERO,
		buttonText: "1. Candidate Details",
		activeClass: "active-btn",
		tabClassName: "navigation-btn",
		path: routePath.JOBCANDIDATE,
		endpoint: "candidate",
	},
	{
		index: NUMBER.ONE,
		buttonText: "2. Job Description",
		activeClass: "active-btn",
		tabClassName: "navigation-btn",
		path: routePath.JOBDESCRIPTION,
		endpoint: "description",
	},
	{
		index: NUMBER.TWO,
		buttonText: "3. Review & Post Job",
		activeClass: "active-btn",
		tabClassName: "navigation-btn",
		path: routePath.JOBREVIEW,
		endpoint: "review",
	},
];
export const candidateTab = [
	{
		index: NUMBER.ZERO,
		buttonText: "Candidates",
		activeClass: "active-btn",
		tabClassName: "navigation-btn",
		path: routePath.CANDIDATEDEAITLS,
		endpoint: "candidate",
	},
	{
		index: NUMBER.ONE,
		buttonText: "Jobs Details",
		activeClass: "active-btn",
		tabClassName: "navigation-btn",
		path: routePath.JOBSDEAITLS,
		endpoint: "jobs",
	},
];

export const options = [
	{ value: "current", label: "Current" },
	{ value: "past", label: "Past" },
	{ value: "future", label: "Future" },
	{ label: "JavaScript", value: "js" },
	{ label: "React", value: "react" },
	{ label: "Node.js", value: "node" },
	{ label: "Python", value: "python" },
	{ label: "Java", value: "java" },
	{ label: "C++", value: "cpp" },
	{ label: "Ruby", value: "ruby" },
];

export const timeOptions = [
	{ value: "past", label: "Past" },
	{ value: "current", label: "Current" },
	{ value: "future", label: "Future" },
	{ label: "JavaScript", value: "js" },
	{ label: "React", value: "react" },
	{ label: "Node.js", value: "node" },
	{ label: "Python", value: "python" },
	{ label: "Java", value: "java" },
	{ label: "C++", value: "cpp" },
	{ label: "Ruby", value: "ruby" },
];

export const skillsOption = [
	{ label: "JavaScript", value: "js" },
	{ label: "React", value: "react" },
	{ label: "Node.js", value: "node" },
	{ label: "Python", value: "python" },
	{ label: "Java", value: "java" },
	{ label: "C++", value: "cpp" },
	{ label: "Ruby", value: "ruby" },
	{ label: "PHP", value: "php" },
	{ label: "HTML", value: "html" },
	{ label: "CSS", value: "css" },
	{ label: "Swift", value: "swift" },
	{ label: "Kotlin", value: "kotlin" },
	{ label: "C#", value: "csharp" },
	{ label: "TypeScript", value: "ts" },
	{ label: "SQL", value: "sql" },
	{ label: "Angular", value: "angular" },
	{ label: "Vue.js", value: "vue" },
	{ label: "Ruby on Rails", value: "ror" },
	{ label: "Django", value: "django" },
	{ label: "Go", value: "go" },
	{ label: "Rust", value: "rust" },
	{ label: "Swift", value: "swift" },
	{ label: "Kotlin", value: "kotlin" },
	{ label: "C#", value: "csharp" },
	{ label: "TypeScript", value: "ts" },
	{ label: "SQL", value: "sql" },
	{ label: "Angular", value: "angular" },
	{ label: "Vue.js", value: "vue" },
	{ label: "Ruby on Rails", value: "ror" },
	{ label: "Django", value: "django" },
	{ label: "Go", value: "go" },
	{ label: "Rust", value: "rust" },
	{ label: "Perl", value: "perl" },
	{ label: "Scala", value: "scala" },
	{ label: "Vue.js", value: "vue" },
	{ label: "Ruby on Rails", value: "ror" },
	{ label: "Django", value: "django" },
	{ label: "Go", value: "go" },
	{ label: "Rust", value: "rust" },
	{ label: "Perl", value: "perl" },
	{ label: "Scala", value: "scala" },
	{ label: "Rust", value: "rust" },
	{ label: "Perl", value: "perl" },
	{ label: "Scala", value: "scala" },
	// Add more unique skills as needed
];

/* The code `export const expiredOption = Array.from({ length: 100 }, (_, index) => ({
	label: `Expires in ${index + 1} day${index === 0 ? "" : "s"}`,
	value: (index + 1).toString(),
}));` is creating an array of objects representing expiration options. */
export const expiredOption = Array.from({ length: 100 }, (_, index) => ({
	label: `Expires in ${index + 1} day${index === 0 ? "" : "s"}`,
	value: (index + 1).toString(),
}));

export const personalDetailsRequestFelids = [
	{
		title: "Full name",
		subTitle: "",
		note: "",
	},
	{
		title: "Contact phone number",
		subTitle: "",
		note: "",
	},
	{
		title: "Contact email",
		note: "",
		subTitle: "",
	},
	{
		title: "Work email verification",
		note: "Candidates are not required to provide a work email. Work emails are anonymized.",
		subTitle: "",
	},
	{
		title: "Current location",
		subTitle: "",
		note: "",
	},
	{
		title: "Open to relocation?",
		subTitle: "",
		note: "",
	},
	{
		title: "Workplace preferences: remote, on-site, and/or hybrid?",
		subTitle: "",
		note: "",
	},
];

export const workExperienceRequestFelids = [
	{
		title: "Industries",
	},
	{
		title: "Work experience",
		subTitle:
			"This includes job title, company, start/end date—and optionally, location and type (eg full-time, part-time, etc)",
		note: "Note: Candidates are required to provide at least one role (past or current)",
	},
];

export const skillRequestFelids = [
	{
		title: "Skills + Proficiency Level",
		note: "Candidates are required to provide at least one skill",
	},
];

export const educationRequestFelids = [
	{
		title: "Highest level of education",
		note: "",
	},
	{
		title: "Education details",
		subTitle: "This includes school, degree, field of study, start/end date",
	},
	{
		title: "Certifications",
		note: "Candidates are not required to provide certifications",
	},
	{
		title: "Awards",
		note: "Candidates are not required to provide awards",
	},
];

export const candidatesData: Candidate[] = [
	{
		name: "Ram",
		designation: "UI Engineer in Amazon",
		contactNumber: "123-456-7890",
		email: "ramsingh@gmail.com.com",
		officialEmail: "ram@amazon.com",
		location: "Seattle, WA",
		workExperience: [
			{
				companyName: "Netflix",
				position: "Senior UX Researcher",
				location: "Cupertino, CA",
				startDate: "2019-01-01",
				endDate: "Present",
				description: "Full-time",
			},
			{
				companyName: "Twitter",
				position: "UX Researcher",
				location: "San Francisco, CA",
				startDate: "2018-12-01",
				endDate: "2019-12-01",
				description: "Full-time",
			},
		],
		skills: [
			{
				name: "User Interviews",
				level: "Master",
			},
			{
				name: "HTML Developer",
				level: "Advanced",
			},
			{
				name: "Javascript",
				level: "Advanced",
			},
			{
				name: "Java Development",
				level: "Advanced",
			},
		],
		educations: [
			{
				universityName: "University",
				degreeName: "B.S. in Business Administration",
				startYear: "2017",
				endYear: "2018",
			},
		],
		certifications: [{ name: "Javascript Intermediate" }, { name: "Java Development" }],
		awards: [{ name: "Javascript" }, { name: "Java Development" }],
	},
	{
		name: "Sara",
		designation: "Frontend Developer",
		contactNumber: "987-654-3210",
		email: "sara.dev@gmail.com",
		officialEmail: "sara@company.com",
		location: "New York, NY",
		workExperience: [
			{
				companyName: "Google",
				position: "Software Engineer",
				location: "Mountain View, CA",
				startDate: "2020-02-01",
				endDate: "Present",
				description: "Full-time",
			},
			{
				companyName: "Microsoft",
				position: "Web Developer",
				location: "Redmond, WA",
				startDate: "2019-01-01",
				endDate: "2020-01-01",
				description: "Full-time",
			},
		],
		skills: [
			{
				name: "React.js",
				level: "Expert",
			},
			{
				name: "CSS",
				level: "Advanced",
			},
			{
				name: "JavaScript",
				level: "Advanced",
			},
		],
		educations: [
			{
				universityName: "Tech University",
				degreeName: "B.S. in Computer Science",
				startYear: "2015",
				endYear: "2019",
			},
		],
		certifications: [{ name: "React.js Professional" }, { name: "CSS Mastery" }],
		awards: [{ name: "Outstanding Coder Award" }, { name: "Best Web Developer" }],
	},
	{
		name: "John",
		designation: "Data Scientist",
		contactNumber: "555-123-4567",
		email: "john.doe@gmail.com",
		officialEmail: "john@company.ai",
		location: "San Jose, CA",
		workExperience: [
			{
				companyName: "IBM",
				position: "Data Analyst",
				location: "Armonk, NY",
				startDate: "2021-03-15",
				endDate: "Present",
				description: "Full-time",
			},
			{
				companyName: "DataCorp",
				position: "Research Scientist",
				location: "Palo Alto, CA",
				startDate: "2019-08-01",
				endDate: "2021-02-28",
				description: "Full-time",
			},
		],
		skills: [
			{
				name: "Machine Learning",
				level: "Expert",
			},
			{
				name: "Python",
				level: "Advanced",
			},
			{
				name: "Statistical Analysis",
				level: "Advanced",
			},
			{
				name: "Data Visualization",
				level: "Intermediate",
			},
		],
		educations: [
			{
				universityName: "Tech Institute",
				degreeName: "M.S. in Data Science",
				startYear: "2017",
				endYear: "2019",
			},
		],
		certifications: [{ name: "Certified Data Scientist" }, { name: "Python for Data Science" }],
		awards: [{ name: "Outstanding Data Scientist Award" }, { name: "Best Research Paper" }],
	},
	{
		name: "Alice",
		designation: "Backend Developer",
		contactNumber: "987-654-3210",
		email: "alice.dev@gmail.com",
		officialEmail: "alice@company.com",
		location: "Austin, TX",
		workExperience: [
			{
				companyName: "Facebook",
				position: "Software Engineer",
				location: "Menlo Park, CA",
				startDate: "2022-01-01",
				endDate: "Present",
				description: "Full-time",
			},
			{
				companyName: "Uber",
				position: "Backend Developer",
				location: "San Francisco, CA",
				startDate: "2020-05-01",
				endDate: "2021-12-31",
				description: "Full-time",
			},
		],
		skills: [
			{
				name: "Java",
				level: "Expert",
			},
			{
				name: "Spring Boot",
				level: "Advanced",
			},
			{
				name: "RESTful APIs",
				level: "Advanced",
			},
		],
		educations: [
			{
				universityName: "Code University",
				degreeName: "B.S. in Computer Science",
				startYear: "2016",
				endYear: "2020",
			},
		],
		certifications: [{ name: "Java Enterprise Developer" }, { name: "Spring Framework Certified" }],
		awards: [{ name: "Excellence in Backend Development" }, { name: "Innovation Award" }],
	},
	{
		name: "ChatGPT",
		designation: "AI Language Model",
		contactNumber: "N/A",
		email: "chatgpt@openai.com",
		officialEmail: "info@openai.com",
		location: "San Francisco, CA",
		workExperience: [
			{
				companyName: "OpenAI",
				position: "AI Language Model",
				location: "San Francisco, CA",
				startDate: "2020-06-01",
				endDate: "Present",
				description: "Full-time",
			},
		],
		skills: [
			{
				name: "Natural Language Processing",
				level: "Advanced",
			},
			{
				name: "Machine Learning",
				level: "Expert",
			},
			{
				name: "Conversational AI",
				level: "Advanced",
			},
		],
		educations: [
			{
				universityName: "AI University",
				degreeName: "Ph.D. in Artificial Intelligence",
				startYear: "2018",
				endYear: "2022",
			},
		],
		certifications: [{ name: "Advanced NLP Certification" }, { name: "AI Language Model Specialist" }],
		awards: [{ name: "Innovation in AI Language Models" }, { name: "Best AI Technology" }],
	},
];
