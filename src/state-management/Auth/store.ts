import { create } from "zustand";

interface AuthStore {
  user: string;
  login: (username: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: "",
  login: (username) => set(() => ({ user: username })),
  logout: () => set(() => ({ user: "" })),
}));

export default useAuthStore;

//  we are not calculating next state based on current state , no we are not
// using 'store ' parameter so make it empty
//  remember set always takes arrow function to calculate next state

// now go to loginStatus compponent
