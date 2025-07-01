import { useEffect } from "react";
import { usePokemonStore } from "../store/pokemon.store";
import CardList from "../components/Pokemon/CardList";

export const PokemonPage = () => {
     const pokemons = usePokemonStore((state) => state.pokemons);
        const getPokemons = usePokemonStore((state) => state.getPokemons);
        useEffect(() => {
            getPokemons();
        }, [getPokemons]);
    return (
       <main>
            <h1 className="text-center">POKEMONS</h1>
            <p className="text-center">Los DragonBall disponibles</p>
            <CardList pokemons={pokemons} />
       </main>
    )
}