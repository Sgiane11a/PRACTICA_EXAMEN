import { create } from 'zustand';
import { getRickAndMorty } from '../services/rickandmorty.service';
import { adaptRickandMorty } from '../utils/rickandmorty.util';

export const useRickAndMortyStore = create((set) => ({
    rickandmorty: [],
    getRickAndMorty: async () => {
        const rickandmorty = await getRickAndMorty();
        set({ rickandmorty: rickandmorty.map(adaptRickandMorty)});
    }
}))