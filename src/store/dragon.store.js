import { create } from "zustand";
import { getDragon } from "../services/dragon.service";
import { adaptDragon } from "../utils/dragon.utils";

export const useDragonStore =create((set) => ({
    dragons: [],
    getDragons: async () => {
        const dragons = await
        getDragon();
        set({ dragons: dragons.map(adaptDragon)});
    }
}))