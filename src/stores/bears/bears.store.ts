import { create } from 'zustand';

type Bears = {
  id: number;
  name: string;
};

interface BearsState {
  blackBears: number;
  polarBears: number;
  pandaBears: number;

  bears: Bears[];

  increaseBlackBears: (by: number) => void;
  increasePolarBears: (by: number) => void;
  increasePandaBears: (by: number) => void;

  doNothing: () => void;
}

export const useBearStore = create<BearsState>()((set) => ({
  blackBears: 12,
  polarBears: 10,
  pandaBears: 1,

  bears: [
    {
      id: 1,
      name: 'Oso Grizzly',
    },
  ],

  increaseBlackBears: (by: number) =>
    set((state) => ({ blackBears: state.blackBears + by })),
  increasePolarBears: (by: number) =>
    set((state) => ({ polarBears: state.polarBears + by })),
  increasePandaBears: (by: number) =>
    set((state) => ({ pandaBears: state.pandaBears + by })),

  doNothing: () => set((state) => ({ bears: [...state.bears] })),
}));
