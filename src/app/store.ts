import authSlice from "@/features/auth/authSlice";
import sidebarSlice from "@/features/auth/sidebarSlice";
import userSlice from "@/features/users/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

const store = configureStore({
	reducer: {
		auth: authSlice,
		sidebar: sidebarSlice,
		user: userSlice,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
