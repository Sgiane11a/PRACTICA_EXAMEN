import { create } from 'zustand';
import { getPokemon } from '../services/pokemon.service';
import { adaptPokemon } from '../utils/pokemon.utils';

export const usePokemonStore = create((set) => ({
  pokemons: [],
  getPokemons: async () => {
    const pokemons = await getPokemon();
    set({ pokemons: pokemons.map(adaptPokemon) });
  },
}));
