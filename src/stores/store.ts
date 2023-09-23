import { create } from "zustand";
import { createUserSlice, UserSlice } from "./slice/user.slice.ts";

export const useStore = create<UserSlice>((...args) => ({
  ...createUserSlice(...args),
}));
