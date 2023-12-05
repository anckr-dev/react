import { AppDispatch, RootState } from "@/app/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

/* The line `export const useAppDispatch: () => AppDispatch = useDispatch;` is exporting a custom hook
called `useAppDispatch`. This hook is used to access the Redux dispatch function in a TypeScript
project. */

export const useAppDispatch: () => AppDispatch = useDispatch;

/* `export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;` is exporting a custom
hook called `useAppSelector` that is used to select and access the state from the Redux store in a
TypeScript project. */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
