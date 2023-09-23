import { StateCreator } from "zustand";

export type UserSlice = UserState & UserActions;

export type UserState = {
  name: string;
};

export type UserActions = {
  setName: (name: string) => void;
};

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  name: "",
  setName: (name) => set({ name }),
});
