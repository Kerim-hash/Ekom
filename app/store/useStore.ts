import { create } from 'zustand';

interface AppState {
  name: string;
  setName: (name: string) => void;
}


export const useStore = create<AppState>((set) => ({
  name: '',
  setName: (name: string) => {
    set({ name })
    if (typeof window !== 'undefined') {
        localStorage.setItem('name', name);
      }
  }, 
}));
