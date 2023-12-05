import { STRING } from "@/constants";
import { createSlice } from "@reduxjs/toolkit";

/* The `initialState` constant is defining the initial state of the `sidebar` slice of the Redux store.
It has a property `isSidebarOpen` which is set to the value of
`localStorage.getItem("isSidebarOpen") === "true" || false`. */
const initialState = {
	isSidebarOpen: localStorage.getItem(STRING.ISSIDEBAROPEN) === STRING.TRUE || false,
};

/* This reducer create manage sidebar toggle */

const sidebarSlice = createSlice({
	name: STRING.SIDEBAR,
	initialState,
	reducers: {
		toggleSidebar: (state) => {
			state.isSidebarOpen = !state.isSidebarOpen;
			localStorage.setItem(STRING.ISSIDEBAROPEN, state.isSidebarOpen.toString());
		},
	},
});

export const { toggleSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
