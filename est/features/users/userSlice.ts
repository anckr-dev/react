import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UsersState } from "src/interface";
import { ActionCreatorTitle, apiConstants } from "@/constants";
import { fetchData } from "./userApi";
import { initialStateUser } from "@/constants/initialState";

const initialState: UsersState = {
	loading: false,
	error: null,
	users: [],
	user: initialStateUser,
};

export const getUsers = createAsyncThunk(ActionCreatorTitle.USER, async () => {
	const data = await fetchData(apiConstants.USERS);
	return data;
});

export const getUserById = createAsyncThunk(ActionCreatorTitle.USERBYID, async (id: number) => {
	const data = await fetchData(`${apiConstants.USERS}${id}`);
	return data;
});

const userSlice = createSlice({
	name: "userSlice",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getUsers.pending, (state) => {
				state.loading = true;
				state.users = [];
				state.error = null;
			})
			.addCase(getUsers.fulfilled, (state, action) => {
				state.loading = false;
				state.users = action.payload;
				state.error = null;
			})
			.addCase(getUsers.rejected, (state, action) => {
				state.loading = false;
				state.users = [];
				state.error = action.error.message || "An error occurred";
			})
			.addCase(getUserById.pending, (state) => {
				state.loading = true;
				state.user = initialStateUser;
				state.error = null;
			})
			.addCase(getUserById.fulfilled, (state, action) => {
				state.loading = false;
				state.user = action.payload;
				state.error = null;
			})
			.addCase(getUserById.rejected, (state, action) => {
				state.loading = false;
				state.user = initialStateUser;
				state.error = action.error.message || "An error occurred";
			});
	},
});

export default userSlice.reducer;
