import axiosInstance from "@/app/axiosInstance";
import { apiConstants } from "@/constants";
import { toast } from "react-toastify";

export const fetchData = async (endpoint: string) => {
	try {
		const { data } = await axiosInstance.get(endpoint);
		return data;
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (error: any) {
		if (error.response && error.response.message === 404) {
			toast.error("Something went wrong");
		} else {
			toast.error("An error occurred while fetching user data");
		}
		throw error;
	}
};
export const fetchUserById = async (id: number) => {
	try {
		const url = `${apiConstants.USERS}${id}`;
		const { data } = await axiosInstance.get(url);
		return data;
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (error: any) {
		if (error.response && error.response.status === 404) {
			toast.error("Something went wrong");
		} else {
			toast.error("An error occurred while fetching user data");
		}
		throw error;
	}
};
