import { useEffect, useState } from "react";
import CardList from "../components/RickAndMorty/CardList";
import { useRickAndMortyStore } from "../store/rickandmorty.store";

export const RickandmortyPage = () => {
    const rickandmorty = useRickAndMortyStore((state) => state.rickandmorty);
    const getRickAndMorty = useRickAndMortyStore((state) => state.getRickAndMorty);
    const [search, setSearch] = useState("");
    useEffect(() => {
        getRickAndMorty();
    }, [getRickAndMorty]);
    const filteredRickAndMorty = rickandmorty.filter((r) =>
        r.name.toLowerCase().includes(search.toLowerCase())
    );
    return (

        <main>
            <h1 className="text-center">Rick and Morty Characters</h1>
            <p className="text-center">This is a list of characters from the Rick and Morty series.</p>

            <section className="container mt-5">
                <div className="input-group rounded">
                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" value={search} onChange={(e) => setSearch(e.target.value)} />
                    <span className="input-group-text border-0" id="search-addon">
                        <i className="fas fa-search"></i>
                    </span>
                </div>
            </section>

            <CardList rickandmorty={filteredRickAndMorty} />
        </main>

    )
}

export default RickandmortyPage;