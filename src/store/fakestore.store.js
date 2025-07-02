import { create } from "zustand";
import { adaptFakestore } from "../utils/fakestore.utils";
import { getFakestore } from "../services/fakestore.service";


export const useFakestoreStore = create((set) => ({
  fakestore: [],
  getFakestore: async () => {
    const fakestore = await getFakestore();
    set({ fakestore: fakestore.map(adaptFakestore) });
  },
}));
