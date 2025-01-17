export interface NavModelState {
  isOpen: boolean;
  onScreen: number;
  setOnScreen: (number: number) => void;
  openIsOpen: () => void;
  closeIsOpen: () => void;
}

export interface IsUserLoggedIn {
  isUserLoggedIn: boolean;
  updateUserLoggedInStatus: (status: boolean) => void;
}

export interface FormData {
  number: number | string;
  setNumber: (number: number | string) => void;
  firstName: string;
  setFirstName: (name: string) => void;
  lastName: string;
  setLastName: (name: string) => void;
}
