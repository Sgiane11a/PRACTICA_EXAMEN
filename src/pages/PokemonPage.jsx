import { useEffect, useState } from "react";
import { usePokemonStore } from "../store/pokemon.store";
import CardList from "../components/Pokemon/CardList";

export const PokemonPage = () => {
    const pokemons = usePokemonStore((state) => state.pokemons);
    const getPokemons = usePokemonStore((state) => state.getPokemons);

    const [search, setSearch] = useState("");

    useEffect(() => {
        getPokemons();
    }, [getPokemons]);

    const filteredPokemons = pokemons.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <main>
            <h1 className="text-center">POKEMONS</h1>
            <p className="text-center">Los DragonBall disponibles</p>

            <section className="container mt-5">
                <div className="input-group rounded">
                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" value={search} onChange={(e) => setSearch(e.target.value)} />
                    <span className="input-group-text border-0" id="search-addon">
                        <i className="fas fa-search"></i>
                    </span>
                </div>
            </section>

            <CardList pokemons={filteredPokemons} />
        </main>
    )
}