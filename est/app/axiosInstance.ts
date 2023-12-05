import axios from "axios";
import { APP_ENV, STRING } from "@/constants";
import { getDataFromLocalStorage, logger } from "@/utils";

const baseURL = "https://dummyjson.com/auth";
const axiosInstance = axios.create({
	baseURL: baseURL
});

let startTime: number | null = null;

axiosInstance.interceptors.request.use(
	(config) => {
		startTime = new Date().getTime();
		const token = getDataFromLocalStorage(STRING.USERDETAILS);
		if (token?.token) {
			config.headers[STRING.AUTHORIZATION] = `Bearer ${token?.token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

axiosInstance.interceptors.response.use(
	(response) => {
		if (startTime !== null) {
			const endTime = new Date().getTime();
			const responseTime = endTime - startTime;

			if (APP_ENV !== "production") {
				logger.log(`API took ${responseTime} ms for this request`);
			}
		}

		return response;
	},
	(error) => {
		return Promise.reject(error);
	},
);

export default axiosInstance;
