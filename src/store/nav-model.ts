import { create } from "zustand";
import { IsUserLoggedIn, NavModelState } from "./interfaces";

export const useNavModel = create<NavModelState>((set) => ({
  isOpen: false,
  onScreen: 0,
  setOnScreen: (number) => set({ onScreen: number }),
  openIsOpen: () => set(() => ({ isOpen: true })),
  closeIsOpen: () => set(() => ({ isOpen: false })),
}));

export const useUserLoggedIn = create<IsUserLoggedIn>((set) => ({
  isUserLoggedIn: false,
  updateUserLoggedInStatus: (status) => set({ isUserLoggedIn: status }),
}));
