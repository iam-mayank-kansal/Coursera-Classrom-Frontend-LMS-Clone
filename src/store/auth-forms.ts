import { create } from "zustand";
import { FormData } from "./interfaces";

export const useAuthForms = create<FormData>((set) => ({
  number: "",
  setNumber: (number) => set({ number }),
  firstName: "",
  setFirstName: (name) => set({ firstName: name }),
  lastName: "",
  setLastName: (name) => set({ lastName: name }),
}));
